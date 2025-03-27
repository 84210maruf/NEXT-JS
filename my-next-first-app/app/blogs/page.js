import prisma from '../../lib/prisma';
import Link from 'next/link'
import React from 'react'
import { getPostCached } from '../../lib/postCache';
import { z } from 'zod';

export const metadata = {
    title: "Bloks Layout",
    description: "Generated by create next app",
  };

async function Blogs() {
    // const blogsScema = z.array(z.object({
    //     id: z.number(),
    //     title: z.string(),
    //     content: z.string(),
    //     addTime: z.date().nullable(),
    //     createdAt: z.date(),
    //     updatedAt: z.date(),
    //     published: z.boolean(),
    //     viewCount: z.number()
    // }))
    const blogs = await getPostCached();

    // blogsScema.parse(blogs); 
    
    // const blogs = await prisma.post.findMany(); 
    // console.log(blog[0])
    // const blogs = [{
    //     id: 1,
    //     title: 'Blog 1',
    //     descriptins: "blog 1 description"
    // },
    // {
    //     id: 2,
    //     title: 'Blog 2',
    //     descriptins: "blog 2 description"
    // },
    // {
    //     id: 3,
    //     title: 'Blog 3',
    //     descriptins: "blog 3 description"
    // }]
    return (
        <main>
            <p className='text-lg font-bold p-2'>Posts From MongoDB</p>
            <ul>
                {blogs.map((blog)=>(
                    <li className='p-4 border my-2' key={blog.id} blog={blog}><Link href={`/blogs/${blog.id}`}>{blog.title} <br/>{blog.content}</Link></li>
                ))}
            </ul>
        </main>
    )
}

export default Blogs
