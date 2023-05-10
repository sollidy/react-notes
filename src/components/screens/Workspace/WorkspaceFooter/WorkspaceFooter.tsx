import { GithubOutlined } from '@ant-design/icons'

import styles from './WorkspaceFooter.module.scss'

export const WorkspaceFooter = () => {
  return (
    <div className={styles.workspaceFooter}>
      <span>created by Mark Pavlov (@sollidy)</span>
      <a
        href="https://github.com/sollidy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubOutlined />
      </a>
    </div>
  )
}
