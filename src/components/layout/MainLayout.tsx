import { Layout } from 'antd'
import { FC } from 'react'

import { Workspace } from '../screens/Workspace/Workspace'

import { SideBar } from './SideBar/SideBar'

export const MainLayout: FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar />
      <Layout>
        <Workspace />
      </Layout>
    </Layout>
  )
}
