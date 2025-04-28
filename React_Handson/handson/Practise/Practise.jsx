import {useState, useEffect} from 'redux'



const APIFetching = ({userId}) => {
    const [user, setUser] = useState('');
    const [error, setError] = useState('');
    
    useEffect(()=>{
        const fetchUser = async () => {
            try{
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/1/${userId}`);

                if(!response.ok){
                    throw new Error('Network fails to fetch the details')
                }

                const users = await response.json();
                setUser(users);
            }catch(error){
                console.log('Error logged : ', error);
                setError(error);
            }
        }
        fetchUser();
    },[userId]);

    if(error) return <p>{error}</p>
    if(!user) return <p>Loading...</p>


    return(
      <>
        <h5>User Details are </h5>
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user)=>(
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </>
    )
}

export default APIFetching