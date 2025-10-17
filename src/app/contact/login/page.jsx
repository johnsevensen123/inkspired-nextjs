
'use client'
import React from 'react'
import from 'next/link'
const page = () => {
  return (
    <div className='h-screen overflow-hidden w-full flex items-center justify-center'>
      <div className='flex h-[600px] w-[900px] shadow-md bg-white'>
       
        <div className='w-1/2 p-8'>
        <Image
        src="/login/image/couple.jpg"
        
        
        />
          <h2 className='text-2xl font-semibold mb-6'>Login to Your Account</h2>
          <form className='space-y-4'>
            <div>
              <label className='block text-sm font-medium mb-1' htmlFor='email'>Email</label>
              <input type='email' id='email' className='w-full border border-gray-300 p-2 rounded' />
            </div>
            <div>
              <label className='block text-sm font-medium mb-1' htmlFor='password'>Password</label>
              <input type='password' id='password' className='w-full border border-gray-300 p-2 rounded' />
            </div>
            <button type='submit' className='w-full bg-emerald-800 text-white p-2 rounded hover:bg-emerald-700 transition'>Login</button>
          </form>
        </div>
         <div className='w-1/2 bg-emerald-800 flex items-center justify-center'>
          <h1 className='text-white text-3xl font-bold'>Welcome Back!</h1>
        </div>
       </div>
    </div>
  )
}

export default page;