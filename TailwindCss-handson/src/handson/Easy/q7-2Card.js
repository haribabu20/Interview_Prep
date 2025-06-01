
// 7. Build a two-column layout using Flexbox with equal-width boxes.


import React from 'react'

const Question7 = () => {
  return (
    <div className='h-screen bg-gray-300 flex items-center justify-center'>
      <div className='flex w-lg gap-6'>
        <div className='flex-1 bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-xl font-bold mb-2'>Column 1</h2>
          <p>This is the content for the first column.</p>
        </div>
        <div className='flex-1 bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-xl font-bold mb-2'>Column 2</h2>
          <p>This is the content for the second column.</p>
        </div>
      </div>
    </div>
  )
}

export default Question7
