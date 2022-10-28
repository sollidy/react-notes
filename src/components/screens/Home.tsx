import { FC } from 'react'

import { ContextProvider } from '../../providers/ContextProvider'
import { MainLayout } from '../layout/MainLayout'

export const Home: FC = () => {
  return (
    <ContextProvider>
      <MainLayout />
    </ContextProvider>
  )
}
