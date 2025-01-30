// app/editePost/[id]/edit/page.js
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EditPost({ params }) {
  const { id } = params;
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [published, setPublished] = useState(false);

  // Fetch the post data
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/editePost/${id}`);
      if (response.ok) {
        const post = await response.json();
        setTitle(post.title);
        setContent(post.content);
        setPublished(post.published);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/editePost/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
        published,
      }),
    });

    if (response.ok) {
      router.push(`/blogs/${id}`); // Redirect to the post details page
    } else {
      console.error('Failed to update post');
    }
  };

  return (
    <div className='pt-10 flex justify-center'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <label>Published:</label>
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
          />
        </div>
        <button className='p-2 bg-orange-500 rounded-lg' type="submit">Update Post</button>
      </form>
    </div>
  );
}