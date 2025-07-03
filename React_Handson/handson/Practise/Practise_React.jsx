import React, {useCallback, useState} from 'react'


const ButtonComponent = React.memo(({onClick}) => {
  console.log('child component is rendered');

  return(
    <button onClick={onClick}>Click</button>
  )
})




const Parent = () => {
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

export default Parent