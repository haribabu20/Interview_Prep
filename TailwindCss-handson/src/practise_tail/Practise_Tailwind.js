// 16. Build a hover-animated profile card with shadow transition.

import React from 'react';

const Question16 = () => {
  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-md transform transition duration-300 hover:shadow-xl hover:scale-105 w-80 text-center">
        <img
          className="w-24 h-24 rounded-full mx-auto mb-4"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
        <p className="text-gray-500">Frontend Developer</p>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-300">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default Question16;
