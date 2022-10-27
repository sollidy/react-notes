import { marked } from 'marked'
import { FC } from 'react'

interface ITextView {
  md?: string
}

export const TextView: FC<ITextView> = ({ md = '' }) => {
  const getMarkdownText = (mdText: string) => {
    const rawMarkup = marked(mdText)
    return { __html: rawMarkup }
  }

  return <div dangerouslySetInnerHTML={getMarkdownText(md)} />
}
