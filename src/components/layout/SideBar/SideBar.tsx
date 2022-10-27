import { Menu } from 'antd'
import { Layout } from 'antd'
import { SelectInfo } from 'rc-menu/lib/interface'
import { FC, useState } from 'react'

import styles from './SideBar.module.scss'
import { useSideBar } from './useSideBar'

const { Sider } = Layout

export const SideBar: FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const { menuItems, setCurrentNoteId } = useSideBar()

  const onMenuItemSelect = (e: SelectInfo) => {
    setCurrentNoteId(Number(e.key))
  }
  if (!menuItems || menuItems.length < 1) return null
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
        onSelect={onMenuItemSelect}
      />
    </Sider>
  )
}
