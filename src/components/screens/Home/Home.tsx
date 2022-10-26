import { FC } from 'react'
import { MainLayout } from '../../layout/MainLayout'
import styles from './Home.module.scss'

export const Home: FC = () => {
  return (
    <div className={styles.home}>
      <MainLayout />
    </div>
  )
}
