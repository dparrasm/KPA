import { User } from './user'
import { WarningType } from './warnings'

export type Post = {
  postId: string
  author: string
  karmaPoints: number
  replies: Comment[]
  likes: User[]
  warnings: WarningType[]
  content: string
}
