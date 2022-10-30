import { FC } from 'react'

import { NoteIdProvider } from '../../context/noteId-context'
import { ContextProvider } from '../../providers/ContextProvider'
import { MainLayout } from '../layout/MainLayout'

export const Home: FC = () => {
  return (
    <ContextProvider>
      <NoteIdProvider>
        <MainLayout />
      </NoteIdProvider>
    </ContextProvider>
  )
}
