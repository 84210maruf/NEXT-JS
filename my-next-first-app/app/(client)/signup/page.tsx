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
      <form>
        <div className='flex justify-between p-2 font-bold'>
          <label>name:</label>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='flex justify-between p-2 font-bold'>
          <label>email:</label>
          <input
            type="email"
            placeholder="m@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='flex justify-between p-2 font-bold' >
          <label>password:</label>
          <input
            type="password"
            placeholder="password"
            autoComplete="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='p-2 bg-slate-300 rounded-lg border-2 border-black'
          type="submit"
          disabled={false}
          onClick={async () => {
            await signUp.email({
              email,
              password,
              name,
              callbackURL: "/",

            });
          }}
        >
          Create Post
        </button>
      </form>
    </div>
  )
}

export default page
