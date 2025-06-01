
// 13. Design a responsive 3-column grid of cards that stack on mobile.

import React from 'react';

const Question13 = () => {
  return (
    <div className='bg-gray-100 p-6 h-screen flex justify-center items-center'>
      <div className='bg-gray-400 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 rounded-lg shadow-lg w-full max-w-6xl'>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Card 1</h2>
          <p className="text-gray-600">This card is Number 1</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Card 2</h2>
          <p className="text-gray-600">This card is Number 2</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Card 2</h2>
          <p className="text-gray-600">This card is Number 3</p>
        </div>
      </div>    
    </div>
  );
};

export default Question13;



/*

1st div --> full page
2nd div --> gray clor grid container with 3 columns on large screens, 2 columns on medium screens, and 1 column on small screens
3rd div --> white card with title and description
4th div --> white card with title and description
5th div --> white card with title and description

*/