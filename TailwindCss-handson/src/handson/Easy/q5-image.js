
// 5. Make a responsive image with rounded corners and border.


import React from 'react'

const Question5 = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <img
          src='https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60'

          alt='Beautiful Landscape'

          className='max-w-xs rounded-lg shadow-lg hover:scale-105 transition-transform duration-1000'
      />
    </div>
  )
}

export default Question5



/*

Image:

    className='max-w-xs rounded-lg shadow-lg hover:scale-105 transition-transform duration-1000'

  1. max-w-xs: Sets the maximum width of the image to a small size.
  2. rounded-lg: Applies large rounded corners to the image.
  3. shadow-lg: Adds a large shadow effect to the image.
  4. hover:scale-105: Scales the image to 105% of its size on hover.
  5. transition-transform: Enables smooth transitions for transform properties.

  These 5 are the most important styling concepts for the image component in Tailwind CSS.

    "max-w-xs"  ---> sets the maximum width of the image to a small size, ensuring it doesn't exceed a certain width while remaining responsive.

    "w-full"  ---> sets the width of the image to 100% of its parent container, making it responsive and filling available space.

*/