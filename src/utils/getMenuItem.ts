import { MenuProps } from 'rc-menu'

type MenuItem = Required<MenuProps>['items'][number]

export const getMenuItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode
): MenuItem => {
  return {
    key,
    icon,
    label,
  } as MenuItem
}
