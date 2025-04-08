'use client'

async function loadPostById(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}

const PostDetails = async ({ params }) => {
    const {id} = params
    const post = await loadPostById(id)
  return (
    <>
        <h1>{id}</h1>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{post.title}</h3>
        <p className="text-gray-700 text-base">{post.body}</p>
    </>

  )
}

export default PostDetails