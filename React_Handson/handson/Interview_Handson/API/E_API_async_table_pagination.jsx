
// sort one column

import React, {useState, useEffect} from 'react'
import axios from 'axios'


const E_API_async_table_pagination = () => {

  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setError] = useState('');

  const [sortOrder, setSortOrder] = useState('asc');

  const [currentPage, setCurrentPage] = useState(1)

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

// Sorting
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

  // Pagination
  let rowsPerPage = 3;
  let indexOfLastPage = currentPage * rowsPerPage;
  let indexOfFirstPage = indexOfLastPage - rowsPerPage;
  let currentUsers = users.slice(indexOfFirstPage, indexOfLastPage);
  let totalPages = Math.ceil(users.length/rowsPerPage);


  const nextPageHandle = () => {
    if(currentPage<totalPages) setCurrentPage(currentPage+1)
  }

  const prevPageHandle = () => {
    if(currentPage>1) setCurrentPage(currentPage-1)
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
            currentUsers.map(user=>(
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
      
      <div style={{margin:'10px' }}>
          <button onClick={prevPageHandle}>Prev</button>
          <span>{currentPage} of {totalPages}</span>
          <button onClick={nextPageHandle}>Next</button>
      </div>

    </div>
  )
}

export default E_API_async_table_pagination


