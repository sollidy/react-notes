import { Button, Layout } from 'antd'
import { FC } from 'react'

import { useDb } from '../../../hooks/useDb'
import { useNotesContext } from '../../../hooks/useNotesContext'

import styles from './Workspace.module.scss'

const { Header } = Layout

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
  const { deleteNote } = useDb()

  const handleDeleteNote = () => {
    if (currentNoteId) {
      deleteNote(currentNoteId)
    }
  }

  const handleCreateNote = () => {
    stopEdit()
  }

  return (
    <Header className={styles.header}>
      <div className={styles.workspaceHeader}>
        <Button onClick={startEdit} disabled={isEdit || !currentNoteId}>
          Edit Note
        </Button>
        <Button
          onClick={handleCreateNote}
          disabled={!isEdit || !currentNoteId}
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
    </Header>
  )
}
