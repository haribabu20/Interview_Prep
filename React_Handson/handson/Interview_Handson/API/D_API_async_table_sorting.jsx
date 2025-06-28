
// sort one column

import React, {useState, useEffect} from 'react'
import axios from 'axios'


const D_API_async_table_sorting = () => {

  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setError] = useState('');

  const [sortOrder, setSortOrder] = useState('asc');

  const fetchUsers = async() => {
    try{
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(res)
      const userData = await res.data;
      console.log(res.data)
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

  const tableStyle = {
    border: '1px solid',
    padding: '8px',
    textAlign: 'left',
  }

  const styleName = {
    cursor: 'pointer'
  }

  const handleNameClick = () => {
    const sortedUser = [...users].sort((a,b)=>{
      if(sortOrder === 'asc'){
        return a.name.localeCompare(b.name);
      }else{
        return b.name.localeCompare(a.name);
      }
    })

    setUser(sortedUser);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  }

  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={tableStyle}>ID</th>
            <th style={{...tableStyle, ...styleName}} onClick={handleNameClick}>Name {sortOrder === 'asc' ? '🔼' : '🔽'}</th>
            <th style={tableStyle}>Email</th>
            <th style={tableStyle}>City</th>
          </tr>
        </thead>

        <tbody>
          {
            users.map(user=>(
              <tr key={user.id}>
                <td style={tableStyle}>{user.id}</td>
                <td style={tableStyle}>{user.name}</td>
                <td style={tableStyle}>{user.email}</td>
                <td style={tableStyle}>{user.address.city}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default D_API_async_table_sorting



/*

why [...user] instead of user in line 46 ? 

Ans:

  bcz, user is a state and we cannot update that state directly. 
  when using array.map, it actually creates a new array, but that's not possible in Array.sort().
  so here we have to create a new array before performing the sorting.
  so we are doing shallow copy. 

  you might have another doubt that on using the shallow copy, it also modifies the current array. Yes correct, but that's only possible with non primitive datatypes like array and objects. 
  in non primitive, only reference is copied. hence it overrides the existing array/object. That is not possible in primitive datatype.
  here we have primitive datatype. so we can use the shallowcopy.



*/