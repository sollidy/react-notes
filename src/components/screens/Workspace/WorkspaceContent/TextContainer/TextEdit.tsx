import 'easymde/dist/easymde.min.css'
import { FC, useCallback, useEffect, useState } from 'react'
import { SimpleMdeReact } from 'react-simplemde-editor'

import { customRendererOptions } from '../../../../../config/simplemde.config'
import { useAutoSaveText } from '../../../../../hooks/useAutoSaveText'
import { useCurrentNote } from '../../../../../hooks/useCurrentNote'

export const TextEdit: FC = () => {
  const [value, setValue] = useState('')
  const currentNote = useCurrentNote()
  console.log(currentNote)

  useEffect(() => {
    if (currentNote) setValue(currentNote.text)
  }, [currentNote])

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
