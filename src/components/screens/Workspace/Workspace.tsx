import { Empty, Layout } from 'antd'
import { FC } from 'react'

import styles from './Workspace.module.scss'
import { WorkspaceContent } from './WorkspaceContent'
import { WorkspaceHeader } from './WorkspaceHeader/WorkspaceHeader'
import { useWorkspace } from './useWorkspace'

const { Header, Footer } = Layout

export const Workspace: FC = () => {
  const { isEdit, startEdit, stopEdit, currentNoteId, allNotes } =
    useWorkspace()

  // console.log('NoteText', noteText)
  // console.log('DbNotes', allNotes)
  console.log('currentNoteId', currentNoteId)

  return (
    <>
      <Header className={styles.header}>
        <WorkspaceHeader
          isEdit={isEdit}
          startEdit={startEdit}
          stopEdit={stopEdit}
        />
      </Header>
      <WorkspaceContent isEdit={isEdit} />

      <Footer style={{ textAlign: 'center' }}>©2018 Created by</Footer>
    </>
  )
}
