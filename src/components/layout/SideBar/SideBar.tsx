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
  const { createNoteDb } = useDb()
  const menuItems = useSideBar()
  const { setCurrentNoteId, currentNoteId, setSearch } = useNotesContext()

  const onMenuItemSelect = (selectMenu: SelectInfo) => {
    setCurrentNoteId(Number(selectMenu.key))
  }

  const onCreateNote = () => {
    createNoteDb()
    setSearch('')
  }
  const createButtonText = collapsed ? '+' : 'Create new Note'
  const selectedNote = currentNoteId ? currentNoteId.toString() : ''

  return (
    <Sider
      collapsedWidth="60px"
      breakpoint="md"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className={styles.logo}>
        <Button onClick={onCreateNote}>{createButtonText}</Button>
      </div>
      <Menu
        selectedKeys={[selectedNote]}
        theme="dark"
        mode="inline"
        items={menuItems}
        onSelect={onMenuItemSelect}
      />
    </Sider>
  )
}
