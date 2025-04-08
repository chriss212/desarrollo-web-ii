'use client'

import { Post } from "../components/Post"

async function loadPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
}

const PostsPage = async () => {
    const posts = await loadPosts()
  return (
    <>
        <h1 className="text-4xl text-center text-gray-800 mb-8">Lista de publicaciones</h1>
        {posts.map((post) => (
            <Post key = {post.id} post = {post}/>
        ))}
    </>

  )
}

export default PostsPage