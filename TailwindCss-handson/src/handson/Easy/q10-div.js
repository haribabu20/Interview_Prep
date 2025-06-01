
// 10. Create a div with background color, padding, and fixed height/width.

import React from 'react';

const Question10 = () => {
  return (
    <div className='bg-gray-100 h-screen flex items-center justify-center'>
      <div className='bg-blue-700 text-white p-4 rounded-lg shadow-lg h-64 w-64 flex items-center justify-center'>
        Fixed Box
      </div>
    </div>
  );
};

export default Question10;



/*

    Direction:
        Row: flex-row
        Column: flex-col

        
    flex-row:
        Flex by default will be flex flex-row.
        items-center will center items vertically.[down]
        justify-center will center items horizontally.[across]


    flex-col:
        Flex in column direction with flex-col.
        items-center will center items horizontally.[across]
        justify-center will center items vertically.[down]



*/