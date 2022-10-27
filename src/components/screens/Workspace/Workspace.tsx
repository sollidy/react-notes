import { Layout } from 'antd'
import { FC } from 'react'

import { useDb } from '../../../hooks/useDb'
import { useNoteText } from '../../../hooks/useNoteText'
import { MDConverter } from '../../../utils/MDConverter'
import { TextEdit } from '../../ui/TextEdit/TextEdit'

import styles from './Workspace.module.scss'
import { WorkspaceHeader } from './WorkspaceHeader/WorkspaceHeader'
import { useWorkspace } from './useWorkspace'

const { Header, Content, Footer } = Layout

export const Workspace: FC = () => {
  const { isEdit, beginEdit, stopEdit } = useWorkspace()
  const { noteText, setNoteText } = useNoteText()
  const { createNote, getAllNotes } = useDb()

  const tempClick = () => {
    createNote('ttt', '222')
  }
  // resetDatabase()
  console.log('NoteText', noteText)
  console.log('DbNotes', getAllNotes)
  return (
    <>
      <Header className={styles.header}>
        <WorkspaceHeader
          isEdit={isEdit}
          beginEdit={beginEdit}
          stopEdit={stopEdit}
        />
      </Header>
      <Content className={styles.content}>
        <div className={styles.contentContainer}>
          {isEdit ? <TextEdit setNoteText={setNoteText} /> : <MDConverter />}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }} onClick={tempClick}>
        ©2018 Created by
      </Footer>
    </>
  )
}
