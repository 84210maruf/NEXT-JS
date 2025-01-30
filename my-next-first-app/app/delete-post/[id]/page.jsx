// app/posts/[id]/page.js
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PostDetails({ params }) {
  const { id } = params;
  const router = useRouter();

  const handleDelete = async () => {
    const response = await fetch(`/api/deletePost/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      router.push('/blogs'); // Redirect to the posts list page
    } else {
      console.error('Failed to delete post');
    }
  };

//   const [post, setPost] = useState({})
//   const postHnadle = async () => {
//     const posts = await prisma.post.findUnique(id)
//     setPost(posts)
//   }
//   useEffect(() => {
//     postHnadle();
//     console.log(post);
// }, []);

  return (
    <div className='p-10'>
      {/* <h1>hallow {post.title}</h1> */}
      {/* Display post details here */}
      <button className='p-2 bg-red-500 rounded-lg' onClick={handleDelete}>Delete Post</button>
    </div>
  );
}