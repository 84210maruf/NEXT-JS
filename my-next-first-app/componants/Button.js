"use client"
import React from 'react'

export default function Button() {
  return (
    <button onClick={()=>console.log('Button clicked')} className='py-2 px-6 bg-cyan-500 rounded-full'>
        Click Hare
    </button>
  )
}
