
// 14. Make a login form with labels, inputs, and a submit button styled with Tailwind.

import React from 'react'

const Question14 = () => {
  return (
    <div className='bg-gray-100 h-screen flex justify-center items-center'>
      <form>
        <div className='bg-indigo-400 p-8 rounded-lg shadow-md w-full max-w-md'>

            <h1 className='text-indigo-900 text-2xl font-bold mb-6 text-center'>Login Form</h1>

            <label className='text-white font-bold text-xl mb-2' htmlFor='username'>Username</label>
            <input  
              type='text' 
              id='username'
              placeholder='Enter your username'
              className='focus:outline-none focus:ring-2 p-3 rounded-lg w-full my-5 bg-white shadow-sm'
            />

            <label className='text-white font-bold text-xl mb-2'  htmlFor='password'>Password</label>
            <input  
              type='password' 
              id='password'
              placeholder='Enter your password'
              className='focus:outline-none focus:ring-2 w-full p-3 rounded-lg my-5'
            />

            <div className='flex items-center mb-4'>
              <input
                type='checkbox' 
                id='remember'
                className='focus:outline-none focus:ring-2 rounded-lg my-5'
              />        
              <label className='text-yellow-950  font-bold text-md mx-2 my-2' htmlFor='remember'>Remember Me</label>
            </div>


            <button type='submit' className='bg-pink-400 rounded-xl px-4 py-2 mt-5 hover:bg-pink-500 w-full'>Submit</button>

        </div>
      </form>
    </div>
  )
}

export default Question14


/*

1. htmlFor is for label tag to link with input tag via id.



*/