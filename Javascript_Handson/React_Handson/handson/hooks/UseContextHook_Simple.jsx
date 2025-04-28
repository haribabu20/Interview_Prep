import React, {createContext, useContext} from 'react'


const UserContext = createContext();

const DisplayUser = () => {
  const user = useContext(UserContext);
  return <p>User: {user}</p>;
}


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