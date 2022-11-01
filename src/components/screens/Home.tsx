import { FC } from 'react'

import { NotesProvider } from '../../context/notes-context'
import { MainLayout } from '../layout/MainLayout'

export const Home: FC = () => {
  return (
    <NotesProvider>
      <MainLayout />
    </NotesProvider>
  )
}
