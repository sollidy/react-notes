import 'easymde/dist/easymde.min.css'
import { FC, useCallback, useEffect, useState } from 'react'
import { SimpleMdeReact } from 'react-simplemde-editor'

import { customRendererOptions } from '../../../config/simplemde.config'
import { useDebounce } from '../../../hooks/useDebounce'
import { useNoteText } from '../../../hooks/useNoteText'

// import styles from './TextEdit.module.scss'

export const TextEdit: FC = () => {
  const [value, setValue] = useState('Initial value')
  const { setNoteText } = useNoteText()
  const savedText = useDebounce(value, 800)

  useEffect(() => {
    setNoteText(savedText)
  }, [savedText, setNoteText])

  const onChange = useCallback((value: string) => {
    setValue(value)
  }, [])

  return (
    <SimpleMdeReact
      value={value}
      onChange={onChange}
      options={customRendererOptions}
    />
  )
}
