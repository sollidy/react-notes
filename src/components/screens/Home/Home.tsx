import { FC } from 'react'

import { ContextProvider } from '../../../providers/ContextProvider'
import { MainLayout } from '../../layout/MainLayout'

import styles from './Home.module.scss'

export const Home: FC = () => {
  return (
    <div className={styles.home}>
      <ContextProvider>
        <MainLayout />
      </ContextProvider>
    </div>
  )
}
