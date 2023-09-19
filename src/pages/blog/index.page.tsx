import Link from 'next/link'

import blogStyles from '../../styles/blog.module.css'
import sharedStyles from '../../styles/shared.module.css'

import { postIsPublished } from '../../lib/blog-helpers'

import getNotionUsers from '../../lib/notion/getNotionUsers'
import getBlogIndex from '../../lib/notion/getBlogIndex'
import { Empty } from 'antd'
import Post from './components/Post/Post'
import { StyledPosts } from './index.style'

export async function getStaticProps({ preview }) {
  const postsTable = await getBlogIndex()

  const authorsToGet: Set<string> = new Set()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const posts: any[] = Object.keys(postsTable)
    .map((slug) => {
      const post = postsTable[slug]
      // remove draft posts in production
      if (!preview && !postIsPublished(post)) {
        return null
      }
      post.Authors = post.Authors || []
      for (const author of post.Authors) {
        authorsToGet.add(author)
      }
      return post
    })
    .filter(Boolean)

  const { users } = await getNotionUsers([...authorsToGet])

  posts.map((post) => {
    post.Authors = post.Authors.map((id) => users[id].full_name)
  })

  return {
    props: {
      preview: preview || false,
      posts,
    },
    revalidate: 10,
  }
}

const Index = ({ posts = [], preview }) => {
  return (
    <>
      {preview && (
        <div className={blogStyles.previewAlertContainer}>
          <div className={blogStyles.previewAlert}>
            <b>Note:</b>
            {` `}Viewing in preview mode{' '}
            <Link href={`/api/clear-preview`}>
              <button className={blogStyles.escapePreview}>Exit Preview</button>
            </Link>
          </div>
        </div>
      )}
      <div className={`${sharedStyles.layout} ${blogStyles.blogIndex}`}>
        <h1>My Notion Blog</h1>
        {posts.length === 0 && (
          <div className={blogStyles.noPosts}>
            <Empty
              description="There are no posts yet"
              image={Empty.PRESENTED_IMAGE_DEFAULT}
            ></Empty>
          </div>
        )}
        <StyledPosts>
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </StyledPosts>
      </div>
    </>
  )
}

export default Index
