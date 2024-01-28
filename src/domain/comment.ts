import { User } from './user'
import { WarningType } from './warnings'

export type Comment = {
  commentId: string
  author: string
  karmaPoints: number
  replies: Comment[]
  likes: User[]
  warnings: WarningType[]
  content: string
}
