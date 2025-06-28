import React, { useEffect, useState } from 'react'
import axios from 'axios';

const C_API_async_table = () => {

  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setError] = useState('');

  const fetchUsers = async() => {
    try{
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      const userData = await res.data;
      setUser(userData);
      setLoading(false);
    }catch(err){
      setError(err.message);
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchUsers();
  },[]);

  if(loading) return <p>Loading</p>
  if(errors) return <p>Error: {errors}</p>

  const cellStyle = {
    border: '1px solid',
    padding: '8px',
    textAlign: 'left'
  }

  return (
    <>
      <table>
        <thead>
            <tr>
              <th style={cellStyle}>ID</th>
              <th style={cellStyle}>Name</th>
              <th style={cellStyle}>Email</th>
              <th style={cellStyle}>City</th>
            </tr>
        </thead>

        <tbody>
          {
            users.map(user=>(
              <tr key={user.id}>
                <td style={cellStyle}>{user.id}</td>
                <td style={cellStyle}>{user.name}</td>
                <td style={cellStyle}>{user.email}</td>
                <td style={cellStyle}>{user.address.city}</td>

              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default C_API_async_table


/*

You can include style, else it will be in normal format

*/