import { Divider, Empty, Layout } from 'antd'
import { FC } from 'react'

import { useNotesContext } from '../../../../hooks/useNotesContext'

import { TextContainer } from './TextContainer/TextContainer'
import { TitleEdit } from './TitleEdit'
import styles from './WorkspaceContent.module.scss'

const { Content } = Layout
interface IWorkspaceContent {
  isEdit: boolean
}

export const WorkspaceContent: FC<IWorkspaceContent> = ({ isEdit }) => {
  const { allNotes, currentNoteId } = useNotesContext()

  return (
    <Content className={styles.content}>
      <div className={styles.contentContainer}>
        {!allNotes || !currentNoteId ? (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        ) : (
          <>
            <TitleEdit />
            <Divider />
            <TextContainer isEdit={isEdit} />
          </>
        )}
      </div>
    </Content>
  )
}
