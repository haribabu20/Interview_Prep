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
