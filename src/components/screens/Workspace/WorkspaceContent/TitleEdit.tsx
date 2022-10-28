import { Typography } from 'antd'
import { FC } from 'react'

import { useDb } from '../../../../hooks/useDb'
import { useNotesContext } from '../../../../hooks/useNotesContext'
import { timeAgo } from '../../../../utils/timeAgo'

import styles from './WorkspaceContent.module.scss'

export const TitleEdit: FC = () => {
  const { currentNote } = useNotesContext()
  const { editNoteDb } = useDb()

  if (!currentNote) return null

  const editTitle = (title: string) => {
    editNoteDb(currentNote.id!, currentNote.text, title)
  }

  return (
    <div className={styles.titleEdit}>
      <Typography.Title
        editable={{ maxLength: 28, onChange: editTitle }}
        level={2}
      >
        {currentNote.title}
      </Typography.Title>
      <div className={styles.timestamp}>{timeAgo(currentNote.createdAt)}</div>
    </div>
  )
}
