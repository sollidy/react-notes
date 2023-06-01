import { marked } from 'marked'

interface ITextView {
  md?: string
}

marked.use({
  mangle: false,
  headerIds: false,
})

export const TextView = ({ md = '' }: ITextView) => {
  const getMarkdownText = (mdText: string) => {
    const rawMarkup = marked(mdText)
    return { __html: rawMarkup }
  }

  return <div dangerouslySetInnerHTML={getMarkdownText(md)} />
}
