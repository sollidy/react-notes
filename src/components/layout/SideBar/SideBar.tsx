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
  const { setCurrentNoteId, currentNoteId, setSearch } = useNotesContext()

  const onMenuItemSelect = (e: SelectInfo) => {
    setCurrentNoteId(Number(e.key))
  }

  const onCreateNote = () => {
    createNote()
    setSearch('')
  }
  const createButtonText = collapsed ? '+' : 'Create new Note'
  const selected = currentNoteId ? currentNoteId.toString() : ''

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className={styles.logo}>
        <Button onClick={onCreateNote}>{createButtonText}</Button>
      </div>
      <Menu
        selectedKeys={[selected]}
        theme="dark"
        mode="inline"
        items={menuItems}
        onSelect={onMenuItemSelect}
      />
    </Sider>
  )
}
