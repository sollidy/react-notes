import { ConfigProvider, Layout } from 'antd'
import { FC } from 'react'

import { antdConfig } from '../../config/antd.theme.config'
import { Workspace } from '../screens/Workspace/Workspace'

import { SideBar } from './SideBar/SideBar'

export const MainLayout: FC = () => {
  return (
    <ConfigProvider theme={antdConfig}>
      <Layout style={{ minHeight: '100vh' }}>
        <SideBar />
        <Layout>
          <Workspace />
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}
