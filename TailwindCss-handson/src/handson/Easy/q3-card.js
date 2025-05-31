
import React from 'react'

const Question3 = () => {
  return (
    <div className='bg-gray-400 h-screen flex justify-center items-center'>
      <div className='bg-white shadow-lg rounded-lg p-6 max-w-sm'>
        <h1 className='text-2xl font-bold mb-5'>Card Title</h1>
        <p className='text-gray-700'>This is a simple card with padding</p>
      </div>
    </div>
  )
}

export default Question3


/*

.

📦 Why Use max-w-sm?

Without it, your card could stretch across the whole page (especially on large screens). max-w-sm prevents that and keeps the card at a reasonable width, making it:
  Easier to read
  Visually balanced
  Mobile-friendly

  Ex:
    <div className='bg-white p-6 rounded-xl shadow-lg max-w-sm'>

    This means,
      The card will never exceed 384px(max-w-sms) in width.
      It will still be responsive — it can shrink on smaller screens, but won’t stretch too wide.



*/