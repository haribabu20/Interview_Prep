

// 17. Implement dark mode styles for a simple UI component.



import React from 'react';

const Question17 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-2">Dark Mode Card</h2>
        <p className="mb-4">This card supports both light and dark themes using Tailwind's dark mode classes.</p>
        <button className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white dark:bg-blue-500 dark:hover:bg-blue-400">
          Action
        </button>
      </div>
    </div>
  );
};

export default Question17;
