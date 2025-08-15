

/*
  Fetch user title for the entered number in text box
*/


import { useState, useEffect } from 'react'


const App = () => {

    const [users, setUsers] = useState([]);
    const [number,setNumber] = useState();

    const fetchUsers =  () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>response.json())
            .then((data)=>setUsers(data))
            .catch((error)=>error.message);
        
    }

    const handleClick = () => {
        fetchUsers();
    }

    let enhancedUser = users.slice(0,number);
    
    return(
        <>

            <input
                placeholder='search...'
                onChange={ (e)=>setNumber(e.target.value) }
                value = {number}
                />
            <button onClick={handleClick}>
                Enter
            </button>
            
            <h1>User details as below</h1>
            
            <ul>
                {
                    enhancedUser.map(user=>(
                        <li key={user.id}>{user.title}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default App


