
// Example 1

import React, {useState, useEffect} from 'react';

const Example = () => {

  const [count, setCount] = useState(0);

  useEffect(()=>{

    let interval = setInterval(()=>{
      setCount(prev=>prev+1);
    },1000);

    return () => clearInterval(interval);
  },[]);


  return(
    <h2>{count}</h2>
  )

}

export default Example


/*

import React, {useState, useEffect} from 'react';

const Example = () => {

  const [count, setCount] = useState(0);
  const [isRunning, setisRunning] = useState(true);


  useEffect(()=>{

    if(isRunning){
      let interval = setInterval(()=>{
        setCount(prev=>prev+1);    
      }
    },1000);

    return () => clearInterval(interval);
  },[isRunning]);


  return(
    <h2>{count}</h2>
  )
  
}

export default Example



*/
