import { FileTextOutlined } from '@ant-design/icons'
import { SelectInfo } from 'rc-menu/lib/interface'

import { useNotesDispatch, useNotesState } from '../../../context/notes-context'
import { useDb } from '../../../hooks/useDb'

export const useSideBar = () => {
  const { createNoteDb } = useDb()
  const { allNotes } = useNotesState()
  const dispatch = useNotesDispatch()

  const menuItems = allNotes?.map((note) => ({
    label: note.title,
    key: note.id!.toString(),
    icon: <FileTextOutlined />,
  }))

  const createNewNote = async () => {
    const newNoteIndex = await createNoteDb()
    dispatch({ type: 'updateNoteId', payload: Number(newNoteIndex) })
    dispatch({ type: 'updateSearchTerm', payload: '' })
  }

  const selectMenuItem = (selectMenu: SelectInfo) => {
    dispatch({ type: 'updateNoteId', payload: +selectMenu.key })
  }

  return { createNewNote, menuItems, selectMenuItem }
}
