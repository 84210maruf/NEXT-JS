"use client"

import React from 'react'
import { useSession, signOut } from '../lib/auth-client'


function LogoutBtn() {
  const data = useSession() // Changed to avoid destructuring
  return (
    <div className='py-4'>
      <p>User After login :{data?.user?.name}</p>
      <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => signOut()}>Logout</button>
    </div>
  )
}

export default LogoutBtn