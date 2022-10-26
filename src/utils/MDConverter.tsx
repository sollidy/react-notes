import { marked } from 'marked'
import { FC } from 'react'
interface IMDConverter {
  md?: string
}

export const MDConverter: FC<IMDConverter> = ({ md = '# New note' }) => {
  const getMarkdownText = (mdText: string) => {
    const rawMarkup = marked(mdText, { sanitize: true })
    return { __html: rawMarkup }
  }

  return <div dangerouslySetInnerHTML={getMarkdownText(md)} />
}
