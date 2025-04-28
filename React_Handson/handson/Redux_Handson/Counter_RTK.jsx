
/*

1. In configure store, i missed the reducer part.
2. exporting the actions

*/


import { createSlice, configureStore } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";


// slice for cakes --> actions and reducer will be retrieved from createSlice
const cakeSlice = createSlice({
  name: 'cake',
  initialState: {
    numOfCake: 10
  },
  reducers: {
    ordered: (state = initialState, actions) => {
      state.numOfCake += actions.payload || 1;
    },
    restocked: (state = initialState, actions) => {
      state.numOfCake -= actions.payload || 1;
    }
  }
})

// exporting cakes actions
const {ordered, restocked} = cakeSlice.actions;

// store
const store = configureStore({
  reducer: {
    cake: cakeSlice.reducer
  }
});

const CakeCount = () => {
  const numOfCake = useSelector(state => state.cake.numOfCake);
  const dispatch = useDispatch();

  return(
    <>
      <h2>{numOfCake}</h2>
      <button onClick={()=>dispatch(ordered(1))}>Increment</button>
      <button onClick={()=>dispatch(restocked(1))}>Decrement</button>
    </>
  )
}


const Counter_RTK = () => {
  return(
    <Provider store={store}>
      <CakeCount/>
    </Provider>
  )
}

export default Counter_RTK





