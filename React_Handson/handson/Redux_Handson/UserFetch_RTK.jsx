
/*
1. addCase name i wrote as addcase
2. fetchUser return value. here we are not using any .then

Important
3. In ExtraReducer, make sure the immutable values are has state value entered prefix to that. 
i.e, state.loading
     state.error, etc.
Make sure that we are not giving as a key value pair bcz this is not a object.
4. first parameter of createAsyncThunk should be in String format.
5. missed to add the useEffect Hook
*/


import {configureStore, createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import { useEffect } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'

const initialState = {
  loading: false,
  users: [],
  error: ''
}


// Async thunk for fetching users
const fetchUser = createAsyncThunk('users/fetchUser', async()=>{
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  return response.data;
  
})


// Slice with reducers & extraReducers for async states
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchUser.pending, (state, action)=>{
      state.loading = true;
      state.error = '';
    })
    .addCase(fetchUser.fulfilled, (state, action)=>{
      state.loading = false;
      state.users = action.payload;
    })
    .addCase(fetchUser.rejected, (state, action)=>{
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  }
});


//store
const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
})


const UserList = () => {

  const {loading, users, error} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchUser())
  },[dispatch])

  return(
    <>
      <h2>User details are:</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {
          users.map((user)=>(
            <li key={user.id}>{user.name}</li>
          ))
        }
      </ul>
    </>
  )
}


// Wrapper component
const UserFetchRTK = () => {
  return (
    <Provider store={store}>
      <UserList />
    </Provider>
  );
};

export default UserFetchRTK;
