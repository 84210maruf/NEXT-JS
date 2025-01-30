import NotFound from '../../../app/not-found';
import prisma from '../../../prisma/prisma';
import Link from 'next/link';
import React from 'react'

export default async function blogDetails({ params }) {
    const { id } = await params;

    if (id === '4') {
        NotFound(); // Redirects to the 404 page
    }

    const post = await prisma.post.findUnique({
        where: {
            id: id,
        }
    })


    return (

        <div>
            <div className='p-4'>Blog post ID is : <span className="rounded-lg bg-yellow-500 px-2 text-center inline-block">
                {post.id}</span></div>
            <div className='pl-4'>Title : <span className="p-2 text-center inline-block">
                {post.title}</span></div>
            <div className='pl-4'>Content : <span className="p-2 text-center inline-block">
                {post.content}</span></div>

                <div className='p-10 flex space-x-10'>
                    <button className='p-2 bg-orange-400 rounded-lg'><Link href={`/edite-post/${id}`}>Edite post</Link></button>
                    <button className='p-2 bg-red-400 rounded-lg'><Link href={`/delete-post/${id}`}>Delete post</Link></button>
                    <button className='p-2 bg-green-400 rounded-lg'><Link href={`/create-post`}>Create post</Link></button>
                </div>
        </div>

    )
}
