import moment from 'moment'

export const timeAgo = (time: Date) => {
  return moment(time.toString()).fromNow()
}
