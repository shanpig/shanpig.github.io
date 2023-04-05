import Link from 'next/link'
import blogStyles from '../../../../styles/blog.module.css'
import { getBlogLink, getDateStr } from '../../../../lib/blog-helpers'
import { textBlock } from '../../../../lib/notion/renderers'
import { StyledAuthor, StyledDate, StyledPost, StyledTitle } from './Post.style'
import { Col, Row } from 'antd'

type PostProps = {
  post: {
    Slug: string
    Published: boolean
    Page: string
    Authors: string[]
    Date: string
    preview: string[][]
  }
}

const Post = ({ post }: PostProps) => {
  return (
    <Link href="/blog/[slug]" as={getBlogLink(post.Slug)}>
      <StyledPost key={post.Slug}>
        <StyledTitle>
          {!post.Published && (
            <span className={blogStyles.draftBadge}>Draft</span>
          )}
          <span>{post.Page}</span>
        </StyledTitle>
        <Row>
          <Col span={12}>
            {post.Authors.length > 0 && (
              <StyledAuthor>{post.Authors.join(' ')}</StyledAuthor>
            )}
          </Col>
          <Col span={12}>
            {post.Date && <StyledDate>{getDateStr(post.Date)}</StyledDate>}
          </Col>
          <Col>
            <p>
              {(post.preview || []).map((block, idx) =>
                textBlock(block, true, `${post.Slug}${idx}`)
              )}
            </p>
          </Col>
        </Row>
      </StyledPost>
    </Link>
  )
}

export default Post
