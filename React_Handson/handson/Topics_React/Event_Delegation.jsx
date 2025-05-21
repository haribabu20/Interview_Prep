
/*

DOM manipulation in react has to be in useEffect

Code for event delegation in React which i writtened incorrectly. Normal way of writing event delegation in React is not recommended.


      const Practise = ()  => {
        document.getElementById('parent').addEventListener('click',(event)=>{
          if(event.target.tagName === "BUTTON"){
            alert(event.target.innerText);
          }
        })

        return(
          <>
            <div id="parent">
              <button>Button 1</button>
              <button>Button 2</button>
              <button>Button 3</button>
              <button>Button 4</button>
              <button>Button 5</button>
            </div>

            <div class="output"></div>
          </>
        )
      }

      export default Practise;



  This above code will not work bcz we're attempting to use event delegation with native DOM methods inside a React component, which works in vanilla JS but is problematic in React

  - document.getElementById(...) runs too early
  - When React renders this component, it hasn't added the elements to the DOM yet.
  - So, document.getElementById('parent') this line of code will return null, and the addEventListener will fail.

  ---> we get the error in ui like could not read the properties with of null.


  So, to fix this, we can use the useEffect hook to ensure that the event listener is added after the component has mounted and the DOM elements are available.






  Important Note:

  useEffect on short:

    Code written inside useEffect inshort says that
      -->  "Run this code once the component is visible."

    That is once the React paints the component to the screen, then run this code.
  So, if you want to run some code after the component is mounted, you can use useEffect with an empty dependency array [].

*/

import React, {useEffect, useState} from 'react'


const Practise = () => {

  const [name, setName] = useState('');

  useEffect(()=>{
    const parent = document.getElementById('parent');

    const handleClick = (event)=>{
      if(event.target.tagName === "BUTTON"){
        setName(event.target.innerHTML);
      }
    }

    parent.addEventListener('click', handleClick)

    return () => {
      parent.removeEventListener('click', handleClick)
    }

  },[]);

  
  return(
    <>
      <div id="parent">
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
        <button>Button 4</button>
        <button>Button 5</button>
      </div>

      <div id='output'>{name}</div>

    </>
  )
}


export default Practise

