import React, { useLayoutEffect, useState, useEffect } from 'react'

const UseLayoutEffectHook = () => {

  const [text, setText] = useState('Hello');

  useEffect(()=>{
    setText('useEffect changed this');
    console.log('useEffect called');
  },[]);

  useLayoutEffect(()=>{
    setText('useLayoutEffect changed this');
    console.log('useLayoutEffect called');
  },[]);

  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

export default UseLayoutEffectHook

/*
Output:
    useLayoutEffect called
    useEffect called'
 */





/*

"useLayoutEffect runs after the DOM is updated, but before the browser paints anything.
So, it blocks the paint and is useful for measuring layout or applying styles that must happen before the user sees anything.

useEffect, on the other hand, runs after the browser has painted the UI, so it's better for things like fetching data, timers, or logging — stuff that doesn’t affect what the user immediately sees."


React renders → DOM updates → 
  ├─ useLayoutEffect runs (blocking)
  └─ Browser paints
      ↓
   useEffect runs (non-blocking)




*/