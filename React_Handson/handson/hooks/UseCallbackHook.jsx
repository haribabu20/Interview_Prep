
/*
UseCallback hook prevents the unncessary re renders only if the child component is memoized, as it avoids re passing the new function reference.

When we try to use the useCallback function without memoizing the component, then it will not work

we've to pass the useCallback function to a memoized component.
*/


import React, {useCallback, useState} from 'react'

const ButtonComponent = React.memo(({onClick}) => {
  console.log('child component is rendered');

  return(
    <button onClick={onClick}>Click</button>
  )
})

const Example = () => {
  console.log('Parent component is rendered');

  const [count, setCount] = useState(0);

  const handleFunction = useCallback(() => {
    console.log('Button clicked');
  },[]);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={()=>setCount(prev=>prev+1)}>Increase</button> <br/>
      <ButtonComponent onClick={handleFunction}/>
    </div>
  )
}

export default Example


/*



*/
