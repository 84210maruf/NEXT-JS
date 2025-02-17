import React from 'react'
import prisma from '../../lib/prisma'
import addTestData from '../../componants/addTestData'

async function page() {

    const test = await prisma.test.findMany()
    // console.log(test)

    return (
        <div>
            <h1 className='text-xl font-bold text-center py-10'>Add Test Data</h1>
            <ul className='flex flex-wrap justify-center gap-2 py-4'>
                {test?.map((test)=>(
                    <li key={test.id} className={`border p-2 bg-${test.color}-500`}>{test.title}<br/>Color: {test.color}</li>
                ))}
            </ul>

            <form action={addTestData} className='flex justify-center gap-2'>
                <input
                    type='text'
                    name='title'
                    placeholder='add test data'
                    className='border p-2'
                />
                <input
                    type='text'
                    name='color'
                    placeholder='add color'
                    className='border p-2'
                />
                <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                type='submit'
                >
                    add data
                </button>
            </form>
        </div>
    )
}

export default page
