import { Empty, Layout } from 'antd'
import { FC } from 'react'

import { useNoteText } from '../../../hooks/useNoteText'
import { useNotesContext } from '../../../hooks/useNotesContext'
import { MDConverter } from '../../../utils/MDConverter'
import { TextEdit } from '../../ui/TextEdit/TextEdit'

import styles from './Workspace.module.scss'

const { Content } = Layout
interface IWorkspaceContent {
  isEdit: boolean
}

export const WorkspaceContent: FC<IWorkspaceContent> = ({ isEdit }) => {
  const { allNotes, currentNoteId } = useNotesContext()
  const { noteText, setNoteText } = useNoteText()

  const currentNote = allNotes?.filter((note) => note.id === currentNoteId)
  const currentNoteText =
    currentNote && currentNote?.length > 0 ? currentNote[0].text : ''
  return (
    <Content className={styles.content}>
      <div className={styles.contentContainer}>
        {!allNotes || !currentNoteId ? (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        ) : isEdit ? (
          <TextEdit setNoteText={setNoteText} />
        ) : (
          <MDConverter md={currentNoteText} />
        )}
      </div>
    </Content>
  )
}
