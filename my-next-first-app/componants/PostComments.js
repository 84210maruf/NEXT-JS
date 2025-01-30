import React from 'react'

export default async function Comments({promise}) {
  const comments = await promise
  return (
    <div>
       <div className='text-xl text-cyan-600 pt-4'>Comments</div>
      <ul>
        {comments.map((comment)=>(
          <li key={comment.id} className='mb-6'>{comment.id} : {comment.body}</li>
        ))}
      </ul>
    </div>
  )
}
