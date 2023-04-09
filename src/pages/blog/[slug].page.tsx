import Link from 'next/link'
import fetch from 'node-fetch'
import { useRouter } from 'next/router'
import blogStyles from '../../styles/blog.module.css'
import getPageData from '../../lib/notion/getPageData'
import React, { useEffect } from 'react'
import getBlogIndex from '../../lib/notion/getBlogIndex'
import getNotionUsers from '../../lib/notion/getNotionUsers'
import { getBlogLink, getDateStr } from '../../lib/blog-helpers'
import PostContent from './components/PostContent/PostContent'

// Get the data for each blog post
export async function getStaticProps({ params: { slug }, preview }) {
  // load the postsTable so that we can get the page's ID
  const postsTable = await getBlogIndex()
  const post = postsTable[slug]

  // if we can't find the post or if it is unpublished and
  // viewed without preview mode then we just redirect to /blog
  if (!post || (post.Published !== 'Yes' && !preview)) {
    // eslint-disable-next-line no-console
    console.log(`Failed to find post for slug: ${slug}`)
    return {
      props: {
        redirect: '/blog',
        preview: false,
      },
      unstable_revalidate: 5,
    }
  }
  const postData = await getPageData(post.id)
  post.content = postData.blocks

  for (let i = 0; i < postData.blocks.length; i++) {
    const { value } = postData.blocks[i]
    const { type, properties } = value
    if (type == 'tweet') {
      const src = properties.source[0][0]
      // parse id from https://twitter.com/_ijjk/status/TWEET_ID format
      const tweetId = src.split('/')[5].split('?')[0]
      if (!tweetId) continue

      try {
        const res = await fetch(
          `https://api.twitter.com/1/statuses/oembed.json?id=${tweetId}`
        )
        const json = await res.json()
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        properties.html = (json as any).html.split('<script')[0]
        post.hasTweet = true
      } catch (_) {
        // eslint-disable-next-line no-console
        console.log(`Failed to get tweet embed for ${src}`)
      }
    }
  }

  const { users } = await getNotionUsers(post.Authors || [])
  post.Authors = Object.keys(users).map((id) => users[id].full_name)

  return {
    props: {
      post,
      preview: preview || false,
    },
    revalidate: 10,
  }
}

// Return our list of blog posts to prerender
export async function getStaticPaths() {
  const postsTable = await getBlogIndex()
  // we fallback for any unpublished posts to save build time
  // for actually published ones
  return {
    paths: Object.keys(postsTable)
      .filter((post) => postsTable[post].Published === 'Yes')
      .map((slug) => getBlogLink(slug)),
    fallback: true,
  }
}

const RenderPost = ({ post, redirect, preview }) => {
  const router = useRouter()

  useEffect(() => {
    const twitterSrc = 'https://platform.twitter.com/widgets.js'
    // make sure to initialize any new widgets loading on
    // client navigation
    if (post && post.hasTweet) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const twttrWidgets = (window as any)?.twttr?.widgets
      if (twttrWidgets) {
        twttrWidgets.load()
      } else if (!document.querySelector(`script[src="${twitterSrc}"]`)) {
        const script = document.createElement('script')
        script.async = true
        script.src = twitterSrc
        document.querySelector('body').appendChild(script)
      }
    }
  }, [])

  useEffect(() => {
    if (redirect && !post) {
      router.replace(redirect)
    }
  }, [redirect, post])

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  // if you don't have a post at this point, and are not
  // loading one from fallback then  redirect back to the index
  if (!post) {
    return (
      <div className={blogStyles.post}>
        <p>
          Woops! didn't find that post, redirecting you back to the blog index
        </p>
      </div>
    )
  }

  return (
    <>
      {preview && (
        <div className={blogStyles.previewAlertContainer}>
          <div className={blogStyles.previewAlert}>
            <b>Note:</b>
            {` `}Viewing in preview mode{' '}
            <Link href={`/api/clear-preview?slug=${post.Slug}`}>
              <button className={blogStyles.escapePreview}>Exit Preview</button>
            </Link>
          </div>
        </div>
      )}
      <div className={blogStyles.post}>
        <h1>{post.Page || ''}</h1>
        {post.Authors.length > 0 && (
          <div className="authors">By: {post.Authors.join(' ')}</div>
        )}
        {post.Date && (
          <div className="posted">Posted: {getDateStr(post.Date)}</div>
        )}

        <hr />

        {(!post.content || post.content.length === 0) && (
          <p>This post has no content</p>
        )}

        <PostContent post={post} />
      </div>
    </>
  )
}

export default RenderPost
