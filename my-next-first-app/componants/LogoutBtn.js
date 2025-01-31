
"use client"
import React from 'react'
import { authClient,signOut } from '../lib/auth-client'


function LogoutBtn() {
  const logOut = async () => {
    await authClient.signOut()
  }
  return (
    <button onClick={() => logOut()}>useless Logout btn</button>
  )
}

export default LogoutBtn