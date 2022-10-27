import { FileTextOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { Layout } from 'antd'
import { FC, useState } from 'react'

import { useDb } from '../../../hooks/useDb'

import styles from './SideBar.module.scss'

const { Sider } = Layout

export const SideBar: FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  const { getAllNotes } = useDb()

  const menuItems = getAllNotes?.map((note) => ({
    label: note.title,
    key: note.id!.toString(),
    icon: <FileTextOutlined />,
  }))

  if (!menuItems) return null

  const firstMenuItem = menuItems[0].key

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className={styles.logo} />
      <Menu
        theme="dark"
        mode="inline"
        items={menuItems}
        defaultSelectedKeys={[firstMenuItem]}
      />
    </Sider>
  )
}
