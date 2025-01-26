import React from 'react'
import SignUp from '@/app/(auth)/signup/page'
import SignIn from '@/app/(auth)/signin/page'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

const page = async() => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session?.session) {
        redirect('/signup')
    }
    // else {
    //     redirect("/signup")
    // }
    return (
        <div>Profile page</div>
    ); // Return null to avoid rendering components when redirecting
}

export default page
