import { Button } from 'antd'
import { FC } from 'react'

import styles from './WorkspaceHeader.module.scss'

interface IWorkHeader {
  beginEdit: () => void
  stopEdit: () => void
  isEdit: boolean
}

export const WorkspaceHeader: FC<IWorkHeader> = ({
  isEdit,
  beginEdit,
  stopEdit,
}) => {
  return (
    <div className={styles.workspaceHeader}>
      <Button onClick={beginEdit} disabled={isEdit}>
        Edit Note
      </Button>
      <Button onClick={stopEdit} disabled={!isEdit} type="primary">
        Save
      </Button>
      <Button type="primary" danger>
        Delete
      </Button>
    </div>
  )
}
