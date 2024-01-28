import commentsData from '../../fakeKarmaAPI/fakeComments.json'
import { Comment } from '../../domain/comment'

export const CommentService = {
  createComment,
  getComments,
  getCommentById,
  updateComment,
  deleteComment
}

let comments: Comment[] = commentsData.comments

function createComment(newComment: Comment): void {
  comments.push(newComment)
}

function getComments(): Comment[] {
  return comments
}

function getCommentById(commentId: string): Comment | undefined {
  return comments.find((comment) => comment.commentId === commentId)
}

function updateComment(commentId: string, updatedComment: Comment): void {
  const commentIndex = comments.findIndex(
    (comment) => comment.commentId === commentId
  )
  if (commentIndex !== -1) {
    comments[commentIndex] = { ...comments[commentIndex], ...updatedComment }
  }
}

function deleteComment(commentId: string): void {
  comments = comments.filter((comment) => comment.commentId !== commentId)
}
