import getAllPosts from '../../lib/getAllPosts'
import Link from 'next/link'
import React from 'react'
import { getCachedPostAPI } from '../../lib/getAllPosts'

export default async function page() {
    const deta = await getCachedPostAPI()
  return (
    <div className='p-4'>
      All posts
    
        <ul className='p-2'>
            {deta.map((post)=>(
                <li className='border-b-2 text-cyan-500' key={post.id}><Link href={`posts/${post.id}`}>Click to view post {post.id}</Link></li>
            ))}
        </ul>
    </div>
  )
}
