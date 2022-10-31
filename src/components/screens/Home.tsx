import { FC } from 'react'

import { NoteIdProvider } from '../../context/noteId-context'
import { SearchProvider } from '../../context/search-context'
import { MainLayout } from '../layout/MainLayout'

export const Home: FC = () => {
  return (
    <NoteIdProvider>
      <SearchProvider>
        <MainLayout />
      </SearchProvider>
    </NoteIdProvider>
  )
}
