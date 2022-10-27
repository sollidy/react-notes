import { FileTextOutlined } from '@ant-design/icons'
import { useContext } from 'react'

import { NotesContext } from '../../../providers/ContextProvider'

export const useSideBar = () => {
  const { allNotes } = useContext(NotesContext)

  const menuItems = allNotes?.map((note) => ({
    label: note.title,
    key: note.id!.toString(),
    icon: <FileTextOutlined />,
  }))
  return menuItems
}
