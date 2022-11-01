import 'easymde/dist/easymde.min.css'
import { FC, useCallback, useEffect, useState } from 'react'
import { SimpleMdeReact } from 'react-simplemde-editor'

import { customRendererOptions } from '../../../../../config/simplemde.config'
import { Notes } from '../../../../../db/notes'
import { useAutoSaveText } from '../../../../../hooks/useAutoSaveText'

interface ITextEdit {
  currentNote: Notes
}

export const TextEdit: FC<ITextEdit> = ({ currentNote }) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(currentNote.text)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //TODO saving text debounce
  useAutoSaveText(value)

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
