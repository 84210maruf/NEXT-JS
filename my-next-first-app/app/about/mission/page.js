import React from 'react'
import Image from 'next/image'
import nikolire from '@/public/images/nikolire.jpeg'
import family from '@/public/images/family.jpeg'

function mission() {
    return (
        <main>
            <div className='pt-6'>
               Our Mission
            </div>
            <Image src={nikolire} alt='Nikolire Image' quality={50}/>
            <Image src={family} alt='Nikolire Image' quality={100} placeholder='blur'/>
        </main>
    )
}

export default mission
