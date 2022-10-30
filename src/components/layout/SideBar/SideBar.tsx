import { Button, Menu } from 'antd'
import { Layout } from 'antd'
import { FC, useState } from 'react'

import { useNoteIdState } from '../../../context/noteId-context'

import styles from './SideBar.module.scss'
import { useSideBar } from './useSideBar'

const { Sider } = Layout

export const SideBar: FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const { menuItems, createNewNote, selectMenuItem } = useSideBar()
  const { currentNoteId } = useNoteIdState()

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
        <Button ghost onClick={createNewNote}>
          {createButtonText}
        </Button>
      </div>
      <Menu
        selectedKeys={[selectedNote]}
        theme="dark"
        mode="inline"
        items={menuItems}
        onSelect={selectMenuItem}
      />
    </Sider>
  )
}
