import React, { useState } from 'react';

const Question15 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500"
      >
        Open Modal
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 relative max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Modal Title</h2>
            <p className="text-gray-600 mb-6">This is the content inside the modal dialog box.</p>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Question15;


/*

<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">

Explanation:

1. fixed: This means that the element will be positioned relative to the viewport, and it will not move when the page is scrolled.

2. inset-0: This is a shorthand for setting top, right, bottom, and left to 0, which means the element will stretch to cover the entire viewport.

3. bg-black: This sets the background color of the element to black.

4. bg-opacity-50: This sets the opacity of the background color to 50%, making it semi-transparent.

5. flex: This applies Flexbox layout to the element, allowing for easy centering of its children.

6. justify-center: This centers the children horizontally within the flex container.

7. items-center: This centers the children vertically within the flex container.

8. z-50: This sets the z-index of the element to 50, ensuring it appears above other elements on the page.







2. Element which has absolute as position will offset its element from its NON STATIC parent element.
  - For close button, we gave it as absolute. So it'll be offset according to its parent element which is modal box.
  - Our requirement is to add this (x) button at the top right corner of the modal box. so we need to give the modal box as relative.
  - If this model box is not relative, then the close button will be offset according to the body element. [i.e it goes to the top right corner of the full body element].

2. 	when position is fixed, it will not look for non static parent to offset its element. It will offset from document’s top. that is from body unlike absolute

3. 	when position is sticky, it will offset according to the scroll position of the element. It will not offset from its parent element.




Tips about position property in CSS:

1. elements are static by default and we cannot provide any offset to it.
2. If we give position as relative, then we can provide offset to it.
3. If we give position as absolute, then it will offset according to its parent element which is not static.
4. If we give position as fixed, then it will offset according to the body element.
5. If we give position as sticky, then it will offset according to the scroll position of the element.


*/