import postsData from '../../fakeKarmaAPI/fakePosts.json'
import { Post } from '../../domain/post'

let posts: Post[] = postsData.posts

const createPost = (newPost: Post): void => {
  posts = [...posts, newPost]
}

const getPosts = (): Post[] => posts

const getPostById = (postId: string): Post | undefined => {
  return posts.find((post) => post.postId === postId)
}

const updatePost = (postId: string, updatedPost: Post): void => {
  posts = posts.map((post) =>
    post.postId === postId ? { ...post, ...updatedPost } : post
  )
}

const deletePost = (postId: string): void => {
  posts = posts.filter((post) => post.postId !== postId)
}

export const PostService = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost
}
