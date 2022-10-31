import { Empty, Layout } from 'antd'
import { FC, useEffect, useState } from 'react'

import { useNotesState } from '../../../../context/notes-context'

import { TextContainer } from './TextContainer/TextContainer'
import { TitleEdit } from './TitleEdit'
import styles from './WorkspaceContent.module.scss'

const { Content } = Layout
interface IWorkspaceContent {
  isEdit: boolean
}

export const WorkspaceContent: FC<IWorkspaceContent> = ({ isEdit }) => {
  const { allNotes } = useNotesState()

  //stop blinking Empty content on first loading
  const [isFirstLoading, setIsFirstLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsFirstLoading(false)
    }, 120)
  }, [])

  return (
    <Content className={styles.content}>
      <div className={styles.contentContainer}>
        {!allNotes && !isFirstLoading ? (
          <Empty
            className={styles.empty}
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        ) : (
          <>
            <TitleEdit />
            <TextContainer isEdit={isEdit} />
          </>
        )}
      </div>
    </Content>
  )
}
