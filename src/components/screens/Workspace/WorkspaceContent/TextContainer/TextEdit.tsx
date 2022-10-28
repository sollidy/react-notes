import 'easymde/dist/easymde.min.css'
import { FC, useCallback, useEffect, useState } from 'react'
import { SimpleMdeReact } from 'react-simplemde-editor'

import { customRendererOptions } from '../../../../../config/simplemde.config'
import { useAutoSaveText } from '../../../../../hooks/useAutoSaveText'
import { useNotesContext } from '../../../../../hooks/useNotesContext'

export const TextEdit: FC = () => {
  const [value, setValue] = useState('')
  const { currentNote } = useNotesContext()

  useEffect(() => {
    if (currentNote) setValue(currentNote.text)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useAutoSaveText(value)

  const onChange = useCallback((value: string) => {
    setValue(value)
  }, [])

  if (!currentNote) return null

  return (
    <SimpleMdeReact
      value={value}
      onChange={onChange}
      options={customRendererOptions}
    />
  )
}
