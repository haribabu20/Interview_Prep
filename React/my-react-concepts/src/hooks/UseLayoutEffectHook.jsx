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