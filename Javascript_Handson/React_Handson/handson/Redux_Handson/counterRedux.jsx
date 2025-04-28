
import { Provider, useDispatch, useSelector } from 'react-redux';
import * as redux from 'redux'
import { createStore } from 'redux'


//state
let initialState = {
  numOfCakes: 10
}


// Action Types
const ORDER_CAKE = 'ORDER_CAKE';
const RESTOKE_CAKE = 'RESTOKE_CAKE';


// Action Creators
function orderCake(num) {
  return {
    type: ORDER_CAKE,
    payload: num
  }
}
function restockCake(num){
  return{
    type: RESTOKE_CAKE,
    payload: num
  }
}


// Reducer
const reducer = (state = initialState, action) => {
  switch(action.type){
    case ORDER_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - (action.payload || 1)
      }

    case RESTOKE_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + (action.payload || 1)
      }

    default:
      return state;
  }
}


// Store
const store = createStore(reducer);


// UI Component
const CakeCounter = () => {

  const numOfCakes = useSelector(state=>state.numOfCakes);  
  const dispatch = useDispatch();

  return (
    <div style={{padding: '5rem'}}>
      <h2>Number of Cakes: {numOfCakes}</h2>
      <button onClick={()=>dispatch(orderCake(1))}>Order Cake</button>
      <button onClick={()=>dispatch(restockCake(1))}>Restock Cake</button> 
    </div>
  )
}


// This provider comes from react-redux. But the one which we studied prev was from context API. But both are same
const Counter = () => {
  return (
    <Provider store={store}>
      <CakeCounter/>
    </Provider>
  )
}

export default Counter;


