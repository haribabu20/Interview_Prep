
// the best of ever made handson !!! cheers

import React, { useContext, useState } from 'react'

// create context
const UserContext = React.createContext();

// create two component where we are going to get the values from the context [UserConext]

const ComponentA = () => {
  const {user,theme} = useContext(UserContext);
  return(
    <>
      <h4>Component A - Original Value</h4>
      <p>User: {user}</p>
      <p>Theme: {theme}</p>
    </>
  )
}

const ComponentB = () =>{
  const {role, updateUser, updateTheme, updateRole} = useContext(UserContext);

  return(
    <>
      <h3>Component B - Updated value</h3>
      <p>Role: {role}</p>
      <button onClick={()=>updateUser('Hari babu')}>Change User</button>
      <button onClick={()=>updateTheme('Dark')}>Change Theme</button>
      <button onClick={()=>updateRole('Frontend Developer')}>Change Dev</button>
    </>
  )

}


// We'll assign the values to the context called UserContext. updateUser,.. these will do the operation of setUser,..

const ContextValue = () => {

  const [user,setUser] = useState('Hari');
  const [theme, setTheme] = useState('Light');
  const [role, setRole] = useState('Dev');

  let userValue = {
    user,
    theme,
    role,
    updateUser: setUser,
    updateTheme: setTheme,
    updateRole: setRole
  }

  return (
    <div>
      <UserContext.Provider value={userValue}>
        <ComponentA/>
        <ComponentB/>
      </UserContext.Provider>
    </div>
  )
}

export default ContextValue
