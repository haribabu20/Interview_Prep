
// 8. Create a badge component with a colored background and small text.


import React from 'react'

const Question8 = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-100'>
      <span className='bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md'>
        Active
      </span>
    </div>
  )
}

export default Question8



/*
✅ What it Means:

  Badge: 
    A small label or tag — like you see on websites next to "New", "Active", "Sale", etc.
  Colored background: 
    The badge should have a background color (like green, red, blue...).
  Small text: 
    The text inside the badge should be small in size.


✅ You are supposed to create:
    A small UI piece (component) that shows something like:
🟩 "New"
🔴 "Error"
🟦 "Info"

All styled using Tailwind CSS.


*/