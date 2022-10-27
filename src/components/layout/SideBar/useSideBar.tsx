import { FileTextOutlined } from '@ant-design/icons'

import { useNotesContext } from '../../../hooks/useNotesContext'

export const useSideBar = () => {
  const { allNotes } = useNotesContext()

  const menuItems = allNotes?.map((note) => ({
    label: note.title,
    key: note.id!.toString(),
    icon: <FileTextOutlined />,
  }))
  return menuItems
}
