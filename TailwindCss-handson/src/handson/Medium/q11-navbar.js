import React from 'react';

const Question11 = () =>{
  return (
    <nav className="bg-white shadow-xl px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="text-2xl font-bold text-blue-600">
          MyLogo
        </div>

        
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">About</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Question11;



/*

1. container
    - It is a utility class that applies preset max-widths based on screen size breakpoints.
    - Adds max-widths like max-width: 640px on sm, 768px on md, etc.

| Use `container` when...                   | Avoid it when...                       |
| ----------------------------------------- | -------------------------------------- |
| You want a **centered, max-width** layout | You want a **full-width** design       |
| You want Tailwind to handle breakpoints   | You need full control via custom sizes |


2. mx-auto

- This can work independently if the content has defined a width size.
- Since we haven't defined a width size, it will not work.

- It order to make the margin auto work, we need to define a width size for the container.
// - For example, we can use `w-full` to make the container take the full width of its parent.




import React from 'react';

const Question11 = () => {
  return (
    <nav className="bg-white shadow-xl px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="text-2xl font-bold text-blue-600">
          MyLogo
        </div>

        
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">About</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Question11;



*/
