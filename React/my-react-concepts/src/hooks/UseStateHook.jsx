
import React, { useState } from 'react'

const UseStateHook = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev)=>prev+1);
  }

  return(
    <>
      <h4>1. useState for number</h4>
      <p>Count = {count}</p>
      <button onClick={handleIncrement}>Increment</button>

    </>
  )

}

export default UseStateHook