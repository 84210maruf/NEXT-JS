"use client"

import React from 'react'
import { useState } from 'react';
import { signUp } from '../../../lib/auth-client';

function page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form className='flex flex-col items-center gap-y-4 pt-4'>
        <div className='p-2 font-bold'>
          <label>name:</label>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className='border'
          />
        </div>
        <div className='p-2 font-bold'>
          <label>email:</label>
          <input
            type="email"
            placeholder="m@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='border'
          />
        </div>
        <div className=' p-2 font-bold' >
          <label>password:</label>
          <input
            type="password"
            placeholder="password"
            autoComplete="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border'
          />
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          type="submit"
          disabled={false}
          onClick={async () => {
            await signUp.email({
              name,
              email,
              password,
              callbackURL: "/",

            });
          }}
        >
          Signup
        </button>
      </form>
    </div>
  )
}

export default page
