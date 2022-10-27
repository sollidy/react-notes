import { marked } from 'marked'
import { SimpleMDEReactProps } from 'react-simplemde-editor'

export const customRendererOptions = {
  previewRender(text: string) {
    return marked(text)
  },
} as SimpleMDEReactProps
