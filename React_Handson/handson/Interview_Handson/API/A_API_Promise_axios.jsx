import React, { useState, useEffect } from 'react'
import axios from 'axios'

const a_API_Promise = () => {

  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchUser = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
      setUsers(response.data);
      setLoading(false)
    })
    .catch(err=>{
      setErrors(err.message);
      setLoading(false)
    })
  }

  useEffect(() => {
    fetchUser();
  },[])

  if(loading) return <p>Loading Users....</p>;
  if(errors)  return <p>Error: {errors}</p>;

  return (
    <div>
      <ul>
        {
          users.map(user=>(
            <li key={user.id}>{user.name} {user.email}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default a_API_Promise


/*

1. in map method, make sure to have ( ) instead of { }

*/