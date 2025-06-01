
// 25. Create a responsive table with hover states and zebra striping.


import React from 'react';

const Table = () => {
  return (
    <div className="overflow-x-auto p-6 bg-gray-100 min-h-screen">
      <table className="min-w-full divide-y divide-gray-300 text-left bg-white rounded-lg overflow-hidden shadow-md">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="px-6 py-3 text-sm font-medium tracking-wider">Name</th>
            <th className="px-6 py-3 text-sm font-medium tracking-wider">Role</th>
            <th className="px-6 py-3 text-sm font-medium tracking-wider">Email</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-gray-100 even:bg-gray-50">
            <td className="px-6 py-4">Alice Johnson</td>
            <td className="px-6 py-4">Developer</td>
            <td className="px-6 py-4">alice@example.com</td>
          </tr>
          <tr className="hover:bg-gray-100 even:bg-gray-50">
            <td className="px-6 py-4">Bob Smith</td>
            <td className="px-6 py-4">Designer</td>
            <td className="px-6 py-4">bob@example.com</td>
          </tr>
          <tr className="hover:bg-gray-100 even:bg-gray-50">
            <td className="px-6 py-4">Charlie King</td>
            <td className="px-6 py-4">Product Manager</td>
            <td className="px-6 py-4">charlie@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;


/*
tracking-wider: Increases the letter spacing for better readability.

*/