
/*

action   ->    object   ->  {type:"increment"}


*/



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
      <button onClick={()=>dispatch({type: "increment", payload: 5})}>Increment</button>
      <button onClick={()=>dispatch({type: "decrement"})}>Decrement</button>
      <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default Example


/*

| Feature          | `useState`                        | `useReducer`                                   |
| ---------------- | --------------------------------- | ---------------------------------------------- |
| **Purpose**      | Manage **simple state**           | Manage **complex state logic**                 |
| **Syntax**       | Simple: `const [state, setState]` | More structured: `const [state, dispatch]`     |
| **State Update** | Direct update via `setState`      | Dispatch an **action** to a **reducer**        |
| **Best for**     | Primitive types or simple objects | Multiple sub-values, or based on `action.type` |
| **Scalability**  | Less scalable                     | More scalable for growing logic                |



| Dispatch Sends                         | Reducer Reads                   | Result                        |
| -------------------------------------- | ------------------------------- | ----------------------------- |
| `{ type: "increment" }`                | `action.type`                   | Updates `count` by +1         |
| `{ type: "decrement" }`                | `action.type`                   | Updates `count` by -1         |
| `{ type: "reset" }`                    | `action.type`                   | Resets `count` to 0           |
| `{ type: "increment_by", payload: 5 }` | `action.type`, `action.payload` | Adds `payload` value to count |




*/