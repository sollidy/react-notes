import { App } from 'antd'

import { NotesProvider } from '../../context/notes-context'
import { MainLayout } from '../layout/MainLayout'

export const Home = () => {
  return (
    <NotesProvider>
      <App>
        <MainLayout />
      </App>
    </NotesProvider>
  )
}
