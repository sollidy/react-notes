import { Layout } from 'antd'
import { FC } from 'react'

import { WorkspaceContent } from './WorkspaceContent/WorkspaceContent'
import { WorkspaceHeader } from './WorkspaceHeader/WorkspaceHeader'
import { useWorkspace } from './useWorkspace'

const { Footer } = Layout

export const Workspace: FC = () => {
  const { isEdit, startEdit, stopEdit } = useWorkspace()

  return (
    <>
      <WorkspaceHeader
        isEdit={isEdit}
        startEdit={startEdit}
        stopEdit={stopEdit}
      />
      <WorkspaceContent isEdit={isEdit} />
      {/* <Footer style={{ textAlign: 'center' }}>©2018 Created by</Footer> */}
    </>
  )
}
