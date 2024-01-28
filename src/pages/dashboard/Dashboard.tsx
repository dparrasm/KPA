import { useEffect, useState } from 'react'
import KarmaAdjusmentPanel from '../../components/karmaAdjustmentPanel/KarmaAdjustmentPanel'
import { PostService } from '../../adapters/karma/postService'
import { CommentService } from '../../adapters/karma/commentService'
import { Post } from '../../domain/post'
import { Comment } from '../../domain/comment'
import './Dashboard.css'

type DataItem = Post | Comment

export default function Dashboard() {
  const [data, setData] = useState<DataItem[]>([])

  useEffect(() => {
    const posts: Post[] = PostService.getPosts()
    const comments: Comment[] = CommentService.getComments()

    setData([...posts, ...comments])
  }, [])

  return (
    <main className="dashboard">
      <section className="dashboard__karma-adjustment-panel--list">
        {data.map((item, index) => (
          <KarmaAdjusmentPanel key={index} data={item} />
        ))}
      </section>
    </main>
  )
}
