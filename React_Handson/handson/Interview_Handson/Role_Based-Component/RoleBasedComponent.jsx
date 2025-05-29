
// 7. Implement a component that displays different content based on a user’s role (e.g., Admin or User).

import React from "react"

const user = {
  name: 'Hari Babu',
  role: 'User'
}


const RoleBasedComponent = () => {

  return (
    <div>
      <h1>Welcome {user.name}</h1>
      {
        user.role === 'Admin' ? (
          <div>
            <p>You have Admin Access</p>
          </div>
        ) : (
          <div>
            <p>You have limited access</p>
          </div>
        )
      }
    </div>
  ) 
}

export default RoleBasedComponent