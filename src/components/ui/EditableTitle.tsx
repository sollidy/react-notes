import { Typography } from 'antd'
import { FC } from 'react'

import { useDb } from '../../hooks/useDb'
import { useNotesContext } from '../../hooks/useNotesContext'

export const EditableTitle: FC = () => {
  const { getCurrentNote } = useNotesContext()
  const currentNote = getCurrentNote()
  const { editNote } = useDb()

  if (!currentNote) return null

  const editTitle = (title: string) => {
    editNote(currentNote.id!, currentNote.text, title)
  }

  return (
    <Typography.Title
      editable={{ maxLength: 28, onChange: editTitle }}
      level={1}
    >
      {currentNote.title}
    </Typography.Title>
  )
}
