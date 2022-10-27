import { Button, Menu } from 'antd'
import { Layout } from 'antd'
import { SelectInfo } from 'rc-menu/lib/interface'
import { FC, useState } from 'react'

import { useDb } from '../../../hooks/useDb'
import { useNotesContext } from '../../../hooks/useNotesContext'

import styles from './SideBar.module.scss'
import { useSideBar } from './useSideBar'

const { Sider } = Layout

export const SideBar: FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const { createNote } = useDb()
  const menuItems = useSideBar()
  const { setCurrentNoteId } = useNotesContext()

  const onMenuItemSelect = (e: SelectInfo) => {
    setCurrentNoteId(Number(e.key))
  }
  const createButtonText = collapsed ? '+' : 'Create new Note'

  const firstMenuItem =
    menuItems && menuItems.length > 0 ? menuItems[0].key : ''

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className={styles.logo}>
        <Button onClick={() => createNote()}>{createButtonText}</Button>
      </div>
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
