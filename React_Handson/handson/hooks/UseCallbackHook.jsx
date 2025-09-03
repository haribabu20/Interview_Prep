
/*


✅ useCallback

What it does: Memoizes a function reference, so the function is not recreated on every render unless its dependencies change.
Why: Useful when passing functions as props to child components to prevent unnecessary re-renders.
Simple definition (interview-friendly):
👉 "useCallback returns a memoized function reference."



"useCallback is a React Hook that memoizes a function.
It returns the same function reference across renders unless the dependencies change.
It's mainly used to prevent unnecessary re-renders of child components that rely on function props."



"In React, functions are recreated on every render. So if we pass a function as a prop to a memoized child (React.memo), that child may re-render even if nothing has changed — just because the function reference changed.
useCallback solves that by returning the same function reference unless its dependencies actually change."




My Explanation:

I have a parent and child component. I pass a function from the parent to the child as a prop.
Normally, when the parent re-renders, the child also re-renders.
To prevent the child from re-rendering unnecessarily, we can wrap the child component with React.memo.
React.memo does a shallow comparison of props, and only re-renders the child if props actually change.
But here's the catch:
When we pass a function as a prop, that function gets recreated on every render of the parent, which means its reference changes — even if the logic inside the function is the same.
So React.memo sees the prop as "changed" (because the function reference changed), and the child still re-renders.
To fix this, we use the useCallback hook in the parent to memoize the function, so the function reference stays the same unless its dependencies change.

✅ This way:

  useCallback ensures the function prop doesn’t change every render.
  React.memo ensures the child only re-renders if any prop truly changes.




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

UseCallback hook prevents the unncessary re renders only if the child component is memoized, as it avoids re passing the new function reference.

When we try to use the useCallback function without memoizing the component, then it will not work

we've to pass the useCallback function to a memoized component.



*/
