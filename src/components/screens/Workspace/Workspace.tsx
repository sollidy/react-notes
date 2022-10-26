import { Layout } from 'antd'
import { FC } from 'react'

import { MDConverter } from '../../../utils/MDConverter'
import { TextEdit } from '../../ui/TextEdit/TextEdit'

import styles from './Workspace.module.scss'
import { WorkspaceHeader } from './WorkspaceHeader/WorkspaceHeader'
import { useWorkspace } from './useWorkspace'

const { Header, Content, Footer } = Layout

export const Workspace: FC = () => {
  const { isEdit, beginEdit, stopEdit } = useWorkspace()
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
          {isEdit ? <TextEdit /> : <MDConverter />}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2018 Created by</Footer>
    </>
  )
}
