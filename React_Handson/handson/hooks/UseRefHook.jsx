

/*


UseRef lets you directly access DOM elements without triggering a re-render, unlike state.

*/


import React, { useRef } from 'react'

const Exmaple = () => {

  let inputRef = useRef();

  const handleRef = () => {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleRef}>click</button>
    </div>
  )
}

export default Exmaple
