

//8. Show a 'Login' or 'Logout' button conditionally based on the user's authentication state.
// Login and Logout Button transision using useState hook ---> 1st click Login, 2nd click Logout, 3rd click Login again and so on.



import {useState} from 'react'


const AuthButton = () => {

  const [isLogged, setIsLogged] = useState(false)

  const handleButton = () => {
    setIsLogged(!isLogged)
  }

  return(
    <div>
      <button onClick={handleButton}>
        {isLogged ? 'Logout':'Login'}
      </button>
    </div>
  )
}

export default AuthButton




// Wrong approach !


// import {useState} from 'react'
// const AuthButton = () => {

//   const [isLogged, setIsLogged] = useState('Login')

//   const handleButton = () => {
//     setIsLogged('Logout')
//   }

//   return(
//     <div>
//       <button onClick={handleButton}>
//         {isLogged}
//       </button>
//     </div>
//   )
// }

// export default AuthButton

