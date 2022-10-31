import { useEffect, useMemo, useState } from 'react'

import { useNoteIdDispatch, useNoteIdState } from '../context/noteId-context'

import { useDb } from './useDb'

function useNotes() {
  // const [searchTerm, setSearchTerm] = useState('')
  const { currentNoteId } = useNoteIdState()
  const setNoteId = useNoteIdDispatch()
  const { getAllNotesDb } = useDb()

  // const allNotes = useMemo(() => {
  //   if (!getAllNotesDb?.length) return
  //   return getAllNotesDb
  //   // if (!searchTerm) return getAllNotesDb
  //   // const filteredNotes = getAllNotesDb.filter((note) =>
  //   //   note.text.includes(searchTerm)
  //   // )
  //   // if (!filteredNotes.length) return
  //   // return filteredNotes
  // }, [getAllNotesDb])

  useEffect(() => {
    if (!getAllNotesDb?.length) {
      setNoteId({ type: 'reset' })
    } else {
      if (currentNoteId === undefined)
        setNoteId({ type: 'update', payload: getAllNotesDb[0].id })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getAllNotesDb?.length])
  console.log(getAllNotesDb)

  return getAllNotesDb
}

export { useNotes }
