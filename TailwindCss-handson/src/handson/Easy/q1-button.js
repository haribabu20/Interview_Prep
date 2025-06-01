
// 1. Create a button with a blue background, white text, and hover effect.


import React from 'react';

const Question1 = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <button className='bg-blue-700 text-white px-5 py-3 rounded-lg hover:bg-blue-600'>Click Me</button>
    </div>
  )
}

export default Question1


/*

<div className='flex justify-center items-center h-screen'>

This line does the following:
  - flex: Makes the container a flexbox.
  - justify-center: Horizontally centers its child (<button>) in the container.
  - items-center: Vertically centers its child.
  - h-screen: Makes the <div> take up the full height of the screen —  otherwise,  vertical centering wouldn't work as intended.

h-screen is a utility class in Tailwind:

  h-screen = 100vh (100% of the viewport height)
  Used for full-page layouts, hero sections, or vertical centering
  Without h-screen, the items-center would align based on the actual content height, not the screen




*/