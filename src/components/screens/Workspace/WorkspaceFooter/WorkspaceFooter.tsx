import { GithubOutlined } from '@ant-design/icons'
import { FC } from 'react'

import styles from './WorkspaceFooter.module.scss'

export const WorkspaceFooter: FC = () => {
  return (
    <div className={styles.workspaceFooter}>
      <span>created by Mark Pavlov (@m7mark)</span>
      <a
        href="https://github.com/m7mark"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubOutlined />
      </a>
    </div>
  )
}
