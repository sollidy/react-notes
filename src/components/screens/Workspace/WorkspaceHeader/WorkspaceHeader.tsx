import { Button } from 'antd'
import { FC } from 'react'

import { useDb } from '../../../../hooks/useDb'
import { useNotesContext } from '../../../../hooks/useNotesContext'

import styles from './WorkspaceHeader.module.scss'

interface IWorkHeader {
  startEdit: () => void
  stopEdit: () => void
  isEdit: boolean
}

export const WorkspaceHeader: FC<IWorkHeader> = ({
  isEdit,
  startEdit,
  stopEdit,
}) => {
  const { currentNoteId } = useNotesContext()
  const { deleteNote, createNote } = useDb()

  const handleDeleteNote = () => {
    if (currentNoteId) {
      deleteNote(currentNoteId)
    }
  }

  const handleCreateNote = () => {
    stopEdit()
    createNote()
  }

  return (
    <div className={styles.workspaceHeader}>
      <Button onClick={startEdit} disabled={isEdit && !currentNoteId}>
        Edit Note
      </Button>
      <Button
        onClick={handleCreateNote}
        disabled={!isEdit && !currentNoteId}
        type="primary"
      >
        Save
      </Button>
      <Button
        type="primary"
        onClick={handleDeleteNote}
        danger
        disabled={!currentNoteId}
      >
        Delete
      </Button>
    </div>
  )
}
