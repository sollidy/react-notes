import { FileTextOutlined } from '@ant-design/icons'
import { SelectInfo } from 'rc-menu/lib/interface'

import { useDb } from '../../../hooks/useDb'
import { useNotesContext } from '../../../hooks/useNotesContext'

export const useSideBar = () => {
  const { allNotes, setSearch, setCurrentNoteId } = useNotesContext()
  const { createNoteDb } = useDb()

  const menuItems = allNotes?.map((note) => ({
    label: note.title,
    key: note.id!.toString(),
    icon: <FileTextOutlined />,
  }))

  const createNewNote = () => {
    createNoteDb()
    setCurrentNoteId(undefined) //to avoid blinking menu select bg
    setSearch('')
  }

  const selectMenuItem = (selectMenu: SelectInfo) => {
    setCurrentNoteId(Number(selectMenu.key))
  }

  return { createNewNote, menuItems, selectMenuItem }
}
