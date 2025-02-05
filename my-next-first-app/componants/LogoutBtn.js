"use client"

import React from 'react'
import { useSession, signOut } from '../lib/auth-client'


function LogoutBtn() {
  const data = useSession() // Changed to avoid destructuring
  return (
    <div>
      <p>User After login :{data?.user?.name}</p>
      <button className='p-2 bg-orange-400 rounded-lg' onClick={() => signOut()}>Logout</button>
    </div>
  )
}

export default LogoutBtn