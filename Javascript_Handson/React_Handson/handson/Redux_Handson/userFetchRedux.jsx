
/*
Issues made:

1. all the import lines.
2. in fetchUser() --> make sure to return a function as this fetchUser is a thunk and not a normal function. hence it should return a function which will have a parameter called dispatch.
3. in fetchUser() for success, just you get the response.data and then store that in users. do not map it. we can map that at the end in JSX
4. useEffetc
5. error command in JSX
6. map declaration in JSX
7. Provider in Wrapping component


*/




import axios from 'axios'
import { applyMiddleware, createStore } from 'redux'
import { useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import {thunk} from 'redux-thunk'

// state
let initialState = {
  loading: false,
  users: [],
  error: ''
}

// action type
const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED';
const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS';
const USER_FETCH_FAILURE = 'USER_FETCH_FAILURE';

//action creater
function userFetchRequested(){
  return {
    type: USER_FETCH_REQUESTED,
    payload: true
  }
}

function userFetchSuccess(users){
  return{
    type: USER_FETCH_SUCCESS,
    payload: users
  }
}

function userFetchFailure(error){
  return{
    type: USER_FETCH_FAILURE,
    payload: error
  }
}

// reducer
const reducer = (state = initialState, action) => {
  switch(action.type){
    case USER_FETCH_REQUESTED:
      return {
        ...state,
        loading: action.payload
      }
    case USER_FETCH_SUCCESS:
      return{
        loading: false,
        users: action.payload,
        error: ''
      }
    case USER_FETCH_FAILURE:
      return{
        loading: false,
        users: [],
        error: action.payload
      }
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk));


const fetchUser = () => {
  return (dispatch) => {
    dispatch(userFetchRequested())
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
      const users = response.data;
      dispatch(userFetchSuccess(users))
    })
    .catch((error)=>{
      dispatch(userFetchFailure(error.message));
    })
  }
}

const UserList = () => {

  const {loading, users, error} = useSelector(state=>state)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchUser());
  },[dispatch])

  return(
    <>
      <h2>User details are:</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {
        <ul>
          {users.map((user)=>(
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      }
    </>
  )
}

const UserFetchRedux = () => {
  return(
    <Provider store={store}>
      <UserList/>
    </Provider>
  )
}

export default UserFetchRedux

