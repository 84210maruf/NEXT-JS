import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'


const Protected = async() => {
  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
if(!session?.session){
  redirect("/signin")
}
  return (
    <div>
      protected
    </div>
  )
}

export default Protected
