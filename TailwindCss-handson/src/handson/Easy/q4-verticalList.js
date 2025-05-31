
import React from 'react'

const Question4 = () => {
  return (
    <div className='bg-gray-100 h-screen flex items-center justify-center'>
      <div className='flex space-x-6'>
        <div className='bg-indigo-300 shadow-lg rounded-lg py-7 px-10'>
          <h1 className='text-xl font-bold mb-10'>Card 1</h1>
          <p>This is the details of card 1</p>
        </div>
        <div className='bg-indigo-300 shadow-lg rounded-lg py-7 px-10'>
          <h1 className='text-xl font-bold mb-10'>Card 2</h1>
          <p>This is the details of card 2</p>
        </div>      
        <div className='bg-indigo-300 shadow-lg rounded-lg py-7 px-10'>
          <h1 className='text-xl font-bold mb-10'>Card 3</h1>
          <p>This is the details of card 3</p>
        </div>        
      </div>
    </div>
  )
}

export default Question4

/*

space-x-6 :

- i have given mr-4 to all the cards to give some space between them.
- If we do in that way, then for all the cards, we have to give mr-4
- To make our work easy, we can wrap all the cards in a flex container.
- Then we can provide the space for each cards using the utility class,space-x-6 
- So, we can use space-x-6 to give space between the cards.

*/