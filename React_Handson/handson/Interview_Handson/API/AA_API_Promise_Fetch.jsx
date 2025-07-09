import {useState, useEffect} from 'react'

const AA_API_Promise_Fetch  =  () => {
    
    const [users, setUsers] = useState([]);

    const fetchUser = () => {
        fetch('https://dummyjson.com/products')
        .then((response) => response.json())
        .then((data)=> setUsers(data.products))
        .catch((error)=>{
            console.log(error.message);
        })
    }

    useEffect(()=>{
        fetchUser();
    },[]);

return (
    <>
            <ul>
                {
                    users.map((user)=>(
                        <li key={user.id}>{user.title}</li>
                    ))
                }
            </ul>
    </>
)
    
    
}

export default AA_API_Promise_Fetch

