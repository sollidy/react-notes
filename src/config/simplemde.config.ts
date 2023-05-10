import { marked } from 'marked'
import { SimpleMDEReactProps } from 'react-simplemde-editor'

marked.use({
  mangle: false,
  headerIds: false,
})

export const customRendererOptions = {
  previewRender(text: string) {
    return marked(text)
  },
} as SimpleMDEReactProps
