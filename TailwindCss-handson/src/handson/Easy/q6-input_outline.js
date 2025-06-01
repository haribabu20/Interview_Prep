
// 6. Create a form input with padding, border, and focus outline.


import React from 'react'

const Question6 = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-200'>
      <input
        type='text'
        placeholder='Enter your name'
        className='p-3 border border-gray-400 rounded-md focus:outline-dotted focus:ring-2 focus:ring-blue-800'
      />
    </div>
  )
}

export default Question6



/*
This code creates a simple form input using Tailwind CSS. The input field is styled with padding, border, rounded corners, and focus effects.

| Class                    | What it does                        |
| ------------------------ | ----------------------------------- |
| `p-3`                    | Adds padding inside the input       |
| `border border-gray-400` | Adds a gray border                  |
| `rounded-md`             | Slightly rounds the input corners   |
| `focus:outline-none`     | Removes the default browser outline |
| `focus:ring-2`           | Adds a 2px ring on focus            |
| `focus:ring-blue-500`    | Makes the ring blue when focused    |



// Important Notes:

1. border border-gray-400:
    Always include border when using border-color classes like border-gray-400.

wrong: `border-gray-400` (missing `border` class)
correct : `border border-gray-400` (includes `border` class)


2. focus:outline-none
    Use "focus:outline-none" to remove the default focus outline.
    Use "focus:ring-2" to add a ring around the input when focused.
    Use focus:ring-blue-500 to change the ring color to blue when focused.





*/