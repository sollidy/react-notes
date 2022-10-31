import { FileTextOutlined } from '@ant-design/icons'
import { SelectInfo } from 'rc-menu/lib/interface'

import { useNoteIdDispatch } from '../../../context/noteId-context'
import { useSearchDispatch } from '../../../context/search-context'
import { useDb } from '../../../hooks/useDb'
import { useNotes } from '../../../hooks/useNotes'

export const useSideBar = () => {
  const setNoteId = useNoteIdDispatch()
  const allNotes = useNotes()
  const { createNoteDb } = useDb()
  const setSearch = useSearchDispatch()

  const menuItems = allNotes?.map((note) => ({
    label: note.title,
    key: note.id!.toString(),
    icon: <FileTextOutlined />,
  }))

  const createNewNote = () => {
    createNoteDb()
    setNoteId({ type: 'reset' })
    setSearch({ type: 'reset' })
  }

  const selectMenuItem = (selectMenu: SelectInfo) => {
    setNoteId({ type: 'update', payload: +selectMenu.key })
  }

  return { createNewNote, menuItems, selectMenuItem }
}
