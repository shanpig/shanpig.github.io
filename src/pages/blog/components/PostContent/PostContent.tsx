import ReactJSXParser from '@zeit/react-jsx-parser'
import blogStyles from '../../../../styles/blog.module.css'
import React, { CSSProperties } from 'react'
import components from '../../../../components/dynamic'
import { textBlock } from '../../../../lib/notion/renderers'
import Heading from '../../../../components/heading'
const listTypes = new Set(['bulleted_list', 'numbered_list'])

let listTagName: string | null = null
let listLastId: string | null = null
let listMap: {
  [id: string]: {
    key: string
    isNested?: boolean
    nested: string[]
    children: React.ReactFragment
  }
} = {}

const PostContent = ({ post }) => {
  return (post.content || []).map((block, blockIdx) => {
    const { value } = block
    const { type, properties, id, parent_id } = value
    const isLast = blockIdx === post.content.length - 1
    const isList = listTypes.has(type)
    const toRender = []

    if (isList) {
      listTagName = components[type === 'bulleted_list' ? 'ul' : 'ol']
      listLastId = `list${id}`

      listMap[id] = {
        key: id,
        nested: [],
        children: textBlock(properties.title, true, id),
      }

      if (listMap[parent_id]) {
        listMap[id].isNested = true
        listMap[parent_id].nested.push(id)
      }
    }

    if (listTagName && (isLast || !isList)) {
      toRender.push(
        React.createElement(
          listTagName,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          { key: listLastId! },
          Object.keys(listMap).map((itemId) => {
            if (listMap[itemId].isNested) return null

            const createEl = (item) =>
              React.createElement(
                components.li || 'ul',
                { key: item.key },
                item.children,
                item.nested.length > 0
                  ? React.createElement(
                      components.ul || 'ul',
                      { key: item + 'sub-list' },
                      item.nested.map((nestedId) => createEl(listMap[nestedId]))
                    )
                  : null
              )
            return createEl(listMap[itemId])
          })
        )
      )
      listMap = {}
      listLastId = null
      listTagName = null
    }

    const renderHeading = (Type: string | React.ComponentType) => {
      toRender.push(
        <Heading key={id}>
          <Type key={id}>{textBlock(properties.title, true, id)}</Type>
        </Heading>
      )
    }

    const renderBookmark = ({ link, title, description, format }) => {
      const { bookmark_icon: icon, bookmark_cover: cover } = format
      toRender.push(
        <div className={blogStyles.bookmark}>
          <div>
            <div style={{ display: 'flex' }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={blogStyles.bookmarkContentsWrapper}
                href={link}
              >
                <div role="button" className={blogStyles.bookmarkContents}>
                  <div className={blogStyles.bookmarkInfo}>
                    <div className={blogStyles.bookmarkTitle}>{title}</div>
                    <div className={blogStyles.bookmarkDescription}>
                      {description}
                    </div>
                    <div className={blogStyles.bookmarkLinkWrapper}>
                      <img src={icon} className={blogStyles.bookmarkLinkIcon} />
                      <div className={blogStyles.bookmarkLink}>{link}</div>
                    </div>
                  </div>
                  <div className={blogStyles.bookmarkCoverWrapper1}>
                    <div className={blogStyles.bookmarkCoverWrapper2}>
                      <div className={blogStyles.bookmarkCoverWrapper3}>
                        <img src={cover} className={blogStyles.bookmarkCover} />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )
    }

    switch (type) {
      case 'page':
      case 'divider':
        break
      case 'text':
        if (properties) {
          toRender.push(textBlock(properties.title, false, id))
        }
        break
      case 'image':
      case 'video':
      case 'embed': {
        const { format = {} } = value
        const {
          block_width,
          block_height,
          display_source,
          block_aspect_ratio,
        } = format
        const baseBlockWidth = 768
        const roundFactor = Math.pow(10, 2)
        // calculate percentages
        const width = block_width
          ? `${
              Math.round((block_width / baseBlockWidth) * 100 * roundFactor) /
              roundFactor
            }%`
          : block_height || '100%'

        const isImage = type === 'image'
        const Comp = isImage ? 'img' : 'video'
        const useWrapper = block_aspect_ratio && !block_height
        const childStyle: CSSProperties = useWrapper
          ? {
              width: '100%',
              height: '100%',
              border: 'none',
              position: 'absolute',
              top: 0,
            }
          : {
              width,
              border: 'none',
              height: block_height,
              display: 'block',
              maxWidth: '100%',
            }

        let child = null

        if (!isImage && !value.file_ids) {
          // external resource use iframe
          child = (
            <iframe
              style={childStyle}
              src={display_source}
              key={!useWrapper ? id : undefined}
              className={!useWrapper ? 'asset-wrapper' : undefined}
            />
          )
        } else {
          // notion resource
          child = (
            <Comp
              key={!useWrapper ? id : undefined}
              src={`/api/asset?assetUrl=${encodeURIComponent(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                display_source as any
              )}&blockId=${id}`}
              controls={!isImage}
              alt={`An ${isImage ? 'image' : 'video'} from Notion`}
              loop={!isImage}
              muted={!isImage}
              autoPlay={!isImage}
              style={childStyle}
            />
          )
        }

        toRender.push(
          useWrapper ? (
            <div
              style={{
                paddingTop: `${Math.round(block_aspect_ratio * 100)}%`,
                position: 'relative',
              }}
              className="asset-wrapper"
              key={id}
            >
              {child}
            </div>
          ) : (
            child
          )
        )
        break
      }
      case 'header':
        renderHeading('h1')
        break
      case 'sub_header':
        renderHeading('h2')
        break
      case 'sub_sub_header':
        renderHeading('h3')
        break
      case 'bookmark': {
        const { link, title, description } = properties
        const { format = {} } = value
        renderBookmark({ link, title, description, format })
        break
      }
      case 'code': {
        if (properties.title) {
          const content = properties.title[0][0]
          const language = properties.language[0][0]

          if (language === 'LiveScript') {
            // this requires the DOM for now
            toRender.push(
              <ReactJSXParser
                key={id}
                jsx={content}
                components={components}
                componentsOnly={false}
                renderInpost={false}
                allowUnknownElements={true}
                blacklistedTags={['script', 'style']}
              />
            )
          } else {
            toRender.push(
              // FIXME: 應該把這個處理掉
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore: this error is not yet understood
              <components.Code key={id} language={language || ''}>
                {content}
              </components.Code>
            )
          }
        }
        break
      }
      case 'quote': {
        if (properties.title) {
          toRender.push(
            React.createElement(
              components.blockquote,
              { key: id },
              properties.title
            )
          )
        }
        break
      }
      case 'callout': {
        toRender.push(
          <div className="callout" key={id}>
            {value.format?.page_icon && <div>{value.format?.page_icon}</div>}
            <div className="text">{textBlock(properties.title, true, id)}</div>
          </div>
        )
        break
      }
      case 'tweet': {
        if (properties.html) {
          toRender.push(
            <div
              dangerouslySetInnerHTML={{ __html: properties.html }}
              key={id}
            />
          )
        }
        break
      }
      case 'equation': {
        if (properties && properties.title) {
          const content = properties.title[0][0]
          toRender.push(
            // FIXME: 應該把這個處理掉
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore: this error is not yet understood
            <components.Equation key={id} displayMode={true}>
              {content}
            </components.Equation>
          )
        }
        break
      }
      default:
        if (process.env.NODE_ENV !== 'production' && !listTypes.has(type)) {
          // eslint-disable-next-line no-console
          console.log('unknown type', type)
        }
        break
    }
    return toRender
  })
}

export default PostContent
