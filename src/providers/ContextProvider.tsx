import { FC, ReactNode } from 'react'
import { createContext } from 'react'

import { useNoteText } from '../hooks/useNoteText'

import { INotesContext } from './context.interface'

export const NotesContext = createContext<INotesContext>({} as INotesContext)

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { noteText, setNoteText } = useNoteText()
  return (
    <NotesContext.Provider value={{ noteText, setNoteText }}>
      {children}
    </NotesContext.Provider>
  )
}
