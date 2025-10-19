'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center bg-gray-100 p-4'>
      <div className='flex flex-col md:flex-row h-auto md:h-[600px] w-full max-w-[900px] shadow-md bg-white rounded-lg overflow-hidden'>
        
        {/* Partie Formulaire */}
        <div className='w-full md:w-1/2 p-8 flex flex-col justify-center'>
          <h2 className='text-2xl font-semibold mb-6'>Login to Your Account</h2>
          <form className='space-y-4'>
            <div>
              <label className='block text-sm font-medium mb-1' htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                className='w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500'
              />
            </div>
            <div>
              <label className='block text-sm font-medium mb-1' htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                className='w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500'
              />
            </div>
            <button
              type='submit'
              className='w-full bg-emerald-800 text-white p-2 rounded hover:bg-emerald-700 transition'
            >
              Login
            </button>
          </form>
        </div>

        {/* Partie Image */}
        <div className='w-full md:w-1/2 relative h-64 md:h-auto'>
          <Image
            src="/login/image/couple.jpg"
            alt="Couple illustration"
            fill
            className="object-cover"
          />
          <div className='absolute inset-0 bg-emerald-800/60 flex items-center justify-center'>
            <h1 className='text-white text-3xl font-bold text-center'>Welcome Back!</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
