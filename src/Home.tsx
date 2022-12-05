import React, { useEffect, useState } from 'react'

type Post = {
  userId: number;
  id: number;
  body: string;
  title: string;
}

type Props = {}

const Home = (props: Props) => {
  const [data, setData] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    (async function fetchData(): Promise<void> {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data: Post[] = await response.json()
      setData(data)
      setLoading(false)
    })()
  }, [])

  return loading ? <div style={{
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}>Loading...</div> : (
    <div style={{
      padding: "2rem"
    }}>
      <h2>Recent posts</h2>
      <ul>
        {
          data.map((post: Post, index: number) => <li style={{
            marginBottom: "10px"
          }} key={index}>{post.title}</li>)
        }
      </ul>
    </div>
  )
}

export default Home