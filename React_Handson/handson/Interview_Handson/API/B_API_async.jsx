import React, { useEffect, useState } from 'react'
import axios from 'axios';

const B_API_async = () => {

  const [users, setUsers] = useState([]);
  const [errors, setError] = useState('');
  const [loading, setLoading] = useState(true)

  const fetchUser = async() => {
    try{
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(await res.data);
      setLoading(false);
    }catch(err){
      setError(err.message);
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchUser();
  },[])

  if(errors) return <p>Error: {errors}</p>
  if(loading) return <p>Loading...</p>

  return (
    <div>
      <ul>
        {
          users.map(user=>(
            <li key={user.id}>{user.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default B_API_async


/*

Mistake:
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      users = await res.data;
      setUsers(users);
      setLoading(false);

Correction:
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(await res.data);
      setLoading(false);


We should not assign the value directly. instead we have to change the state only using its setter function

*/