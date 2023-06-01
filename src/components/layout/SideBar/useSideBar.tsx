import { FileTextOutlined } from '@ant-design/icons'

import { useNotesDispatch } from '../../../context/notes-context'
import { useDb } from '../../../hooks/useDb'
import { useNotes } from '../../../hooks/useNotes'

interface ISelectMenu {
  key: string
}

export const useSideBar = () => {
  const { createNoteDb } = useDb()
  const notes = useNotes()
  const dispatch = useNotesDispatch()

  const menuItems = notes?.map((note) => ({
    label: note.title,
    key: note.id!.toString(),
    icon: <FileTextOutlined />,
  }))

  const createNewNote = async () => {
    const newNoteIndex = await createNoteDb()
    dispatch({ type: 'updateNoteId', payload: +newNoteIndex })
    dispatch({ type: 'updateSearchTerm', payload: '' })
  }

  const selectMenuItem = (selectMenu: ISelectMenu) => {
    dispatch({ type: 'updateNoteId', payload: +selectMenu.key })
  }

  return { createNewNote, menuItems, selectMenuItem }
}
