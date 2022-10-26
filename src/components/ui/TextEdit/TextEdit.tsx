import { FC, useCallback, useMemo, useState } from 'react'
// import styles from './TextEdit.module.scss'
import { SimpleMdeReact, SimpleMDEReactProps } from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import { marked } from 'marked'

export const TextEdit: FC = () => {
  const [value, setValue] = useState('Initial value')

  const customRendererOptions = useMemo(() => {
    return {
      previewRender(text: string) {
        return marked(text, { sanitize: true })
      },
    } as SimpleMDEReactProps
  }, [])

  const onChange = useCallback((value: string) => {
    setValue(value)
  }, [])

  return (
    <SimpleMdeReact
      id="demo"
      value={value}
      onChange={onChange}
      options={customRendererOptions}
    />
  )
}
