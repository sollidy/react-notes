import { FC } from 'react'

import { App } from 'antd'

import { NotesProvider } from '../../context/notes-context'
import { MainLayout } from '../layout/MainLayout'

export const Home: FC = () => {
  return (
    <NotesProvider>
      <App>
        <MainLayout />
      </App>
    </NotesProvider>
  )
}
