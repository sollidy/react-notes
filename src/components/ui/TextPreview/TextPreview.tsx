import { FC } from 'react'

import { MDConverter } from '../../../utils/MDConverter'

import styles from './TextPreview.module.scss'

export const TextPreview: FC = () => {
  return (
    <div className={styles.textPreview}>
      <MDConverter />
    </div>
  )
}
