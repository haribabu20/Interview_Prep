import React, { useReducer } from 'react'

let initialState = {
  count:0
}

function reducer(state, action){
  switch(action.type){
    case "increment" : return {count: state.count+1};
    case "decrement" : return {count: state.count-1};
    case "reset" : return {count: 0}
    default: return state;
  }
}


const Example = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Count: {state.count}</h3>
      <button onClick={()=>dispatch({type: "increment"})}>Increment</button>
      <button onClick={()=>dispatch({type: "decrement"})}>Decrement</button>
      <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default Example
