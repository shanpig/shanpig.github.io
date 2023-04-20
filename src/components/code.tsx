import hljs from 'highlight.js/lib/common'
import 'highlight.js/styles/github.css'
import { useMemo } from 'react'

const Code = ({ children, language = 'javascript' }) => {
  const htmlText = useMemo(() => {
    try {
      return hljs.highlight(children, {
        language: language.toLowerCase() || 'javascript',
      }).value
    } catch {
      return children
    }
  }, [children, language])

  return (
    <>
      <pre>
        <code
          dangerouslySetInnerHTML={{
            __html: htmlText,
          }}
        />
      </pre>

      <style jsx>{`
        pre {
          tab-size: 2;
        }

        code {
          overflow: auto;
          display: block;
          padding: 0.8rem;
          line-height: 1.5;
          background: #f5f5f5;
          font-size: 0.75rem;
          border-radius: var(--radius);
        }
      `}</style>
    </>
  )
}

export default Code
