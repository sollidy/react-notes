import { Divider, Typography } from 'antd'
import { FC } from 'react'

import { useCurrentNote } from '../../../../hooks/useCurrentNote'
import { useDb } from '../../../../hooks/useDb'
import { timeAgo } from '../../../../utils/timeAgo'

import styles from './WorkspaceContent.module.scss'

export const TitleEdit: FC = () => {
  const { editNoteDb } = useDb()
  const currentNote = useCurrentNote()

  if (!currentNote) return null

  const handleTitleEdit = async (title: string) => {
    await editNoteDb(currentNote.id!, { title })
  }

  return (
    <>
      <div className={styles.titleEdit}>
        <Typography.Title
          editable={{ maxLength: 28, onChange: handleTitleEdit }}
          level={2}
        >
          {currentNote.title}
        </Typography.Title>
        <div className={styles.timestamp}>{timeAgo(currentNote.createdAt)}</div>
      </div>
      <Divider style={{ marginTop: '5px' }} />
    </>
  )
}
