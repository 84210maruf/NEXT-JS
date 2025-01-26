import NotFound from '@/app/not-found';
import React from 'react'

export default async function blogDetails({ params }) {
    const { id } = await params;
    if (id === '4') {
        NotFound(); // Redirects to the 404 page
    }

    return (

        <div className='p-4'>Blog ID is : <span className="rounded-full bg-yellow-500 w-10 text-center inline-block">
            {id}</span></div>

    )
}
