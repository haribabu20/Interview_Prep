import React, {createContext, useContext} from 'react'


const UserContext = createContext();


const Example = () => {

  return (
    <>
      <UserContext.Provider value={'Hari'}>
        <DisplayUser/>
      </UserContext.Provider>
    </>
  )
}

export default Example


// In any component, we can use the user
const DisplayUser = () => {
  const user = useContext(UserContext);
  return <p>User: {user}</p>;
}








// Example 2

const UserContext1 = createContext();


const Example1 = () => {
  return(
    <UserContext1.Provider value={'Babu'}>
      <DisplayAdmin/>
    </UserContext1.Provider>
  )
}

const DisplayAdmin = () => {
  const admin = useContext(UserContext1);
  return <p>{admin}</p>
}