import { FC } from 'react'

import { NoteIdProvider } from '../../context/noteId-context'
import { MainLayout } from '../layout/MainLayout'

export const Home: FC = () => {
  return (
    <NoteIdProvider>
      <MainLayout />
    </NoteIdProvider>
  )
}
