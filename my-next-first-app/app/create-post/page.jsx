// app/create-post/page.js
'use client'; // Mark this as a Client Component

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [published, setPublished] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/createPost', {
            method: 'POST',
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
            router.push('/blogs');
            const newPost = await response.json();
            console.log('Post created:', newPost);
            // Optionally, you can redirect or update the UI here
        } else {
            console.error('Failed to create post');
        }
    };

    return (
        <div className='flex justify-center items-center pt-10 bg-slate-100'>
            <form onSubmit={handleSubmit}>
                <div className='flex justify-between p-2 font-bold'>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className='flex justify-between p-2 font-bold' >
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div className='flex justify-between p-2 font-bold'>
                    <label>Published:</label>
                    <input
                        type="checkbox"
                        checked={published}
                        onChange={(e) => setPublished(e.target.checked)}
                    />
                </div>
                <button className='p-2 bg-slate-300 rounded-lg border-2 border-black' type="submit">Create Post</button>
            </form>
        </div>
    );
}