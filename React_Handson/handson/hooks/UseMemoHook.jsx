import React, {useCallback, useMemo, useState} from 'react'

const Example = () => {

  const [count, setCount] = useState(0);

  const arr = [1,2,3,4,5];

  const evenNumbers = useMemo(() => {
    console.log('Recalculating...')
    return arr.filter((ele)=>ele%2===0);
  },[]);    // Make sure to give here as empty dependency array as it won't support if we give arr.

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={()=>setCount(prev=>prev+1)}>Increment</button><br/>
      <p>Even Number: {evenNumbers}</p>
    </div>
  )
}

export default Example
