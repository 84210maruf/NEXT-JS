import getPost from '@/lib/getPost';
import getPostComments from '@/lib/getPostComments';
import React, { Suspense } from 'react'
import Comments from '@/app/componants/PostComments'

export async function generateMetadata({params}) {
  const {id}=params;
  const post = await getPost(id)
  return {
    title:post. title,
    description: post.body
  }
}

export default async function page({params}) {

    const {id} = params;
    //1by1
    // const post = await getPost(id)
    // const postComments = await getPostComments(id)

    // parallal req.
    const postPromise = getPost(id)
    const postCommentsPromise = getPostComments(id)

    const [post] = await Promise.all([postPromise])
    
    
  return (
    <div className='p-4'>
      Post ID : <span className='bg-yellow-400 w-20 px-4 rounded inline-block text-center'>{post.id}</span>
      <ul>
        <li>Title : {post.title}</li>
        <hr/>
        <li>Description : {post.body}</li>
      </ul>

      <Suspense  fallback='Loading comments...'>
        <Comments promise={postCommentsPromise}/>
      </Suspense>
     
    </div>
  )
}
