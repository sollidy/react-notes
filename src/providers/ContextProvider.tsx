import { FC, ReactNode } from 'react'
import { createContext } from 'react'

import { useDataForContext } from '../hooks/useDataForContext'

import { INotesContext } from './context.interface'

export const NotesContext = createContext<INotesContext>({} as INotesContext)

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const {
    currentNoteId,
    setCurrentNoteId,
    allNotes,
    getCurrentNote,
    setFirstNote,
    setSearch,
  } = useDataForContext()
  return (
    <NotesContext.Provider
      value={{
        currentNoteId,
        setCurrentNoteId,
        allNotes,
        getCurrentNote,
        setFirstNote,
        setSearch,
      }}
    >
      {children}
    </NotesContext.Provider>
  )
}
