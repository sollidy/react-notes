import { useMemo, useState } from 'react'

export const useNoteText = () => {
  const [text, setText] = useState('New note')
  const setNoteText = useMemo(
    () => (noteText: string) => {
      setText(noteText)
    },
    []
  )

  return useMemo(
    () => ({
      noteText: text,
      setNoteText,
    }),
    [text, setNoteText]
  )
}
