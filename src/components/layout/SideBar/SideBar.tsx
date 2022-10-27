import { FileTextOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { Layout } from 'antd'
import { FC, useState } from 'react'

import { useDb } from '../../../hooks/useDb'
import { getMenuItem } from '../../../utils/getMenuItem'

import styles from './SideBar.module.scss'

const { Sider } = Layout

export const SideBar: FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  const { getAllNotes } = useDb()

  const notesList = getAllNotes?.map((note) => {
    return getMenuItem(note.title, note.id!, <FileTextOutlined />)
  })

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className={styles.logo} />
      <Menu
        theme="dark"
        defaultSelectedKeys={['1']}
        mode="inline"
        items={notesList}
      />
    </Sider>
  )
}
