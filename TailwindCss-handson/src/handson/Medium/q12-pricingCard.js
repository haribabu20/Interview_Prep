// // 12. Create a pricing card with a title, price, features list, and CTA button.


import React from 'react';

const Question12 = () => {
  return (
    <div className="flex gap-8 justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Pro Plan</h2>
        <p className="text-4xl font-extrabold text-blue-600 mb-4">$49/mo</p>

        <ul className="text-gray-700 mb-6 space-y-2">
          <li>✔ 10 Projects</li>
          <li>✔ 5 GB Storage</li>
          <li>✔ Email Support</li>
        </ul>

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500">
          Get Started
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Pro Plan</h2>
        <p className="text-4xl font-extrabold text-blue-600 mb-4">$49/mo</p>

        <ul className="text-gray-700 space-y-2 mb-6">
          <li>✔ 10 Projects</li>
          <li>✔ 5 GB Storage</li>
          <li>✔ Email Support</li>
        </ul>

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500">
          Get Started
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Pro Plan</h2>
        <p className="text-4xl font-extrabold text-blue-600 mb-4">$49/mo</p>

        <ul className="text-gray-700 space-y-2 mb-6">
          <li>✔ 10 Projects</li>
          <li>✔ 5 GB Storage</li>
          <li>✔ Email Support</li>
        </ul>

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Question12;



/*

<ul className="text-gray-700 mb-6 space-y-2">

    space-y-2 is used to add space inside the list
    mb-2 is used to add space outside the list



| Class                     | Purpose                                |
| ------------------------- | -------------------------------------- |
| `max-w-sm w-full`         | Sets fixed max width and full inside   |
| `shadow-lg rounded-xl`    | Adds shadow and rounded corners        |
| `space-y-2`               | Adds vertical space between list items |
| `text-4xl font-extrabold` | Makes the price bold and large         |
| `hover:bg-blue-500`       | Adds hover effect on CTA button        |




*/