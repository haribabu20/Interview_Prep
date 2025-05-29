
// on click of button "Show content" it will show the content and on click of "Hide Content" it will hide the content.



import {useState} from 'react'

const ToggleDiv = () => {

  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }

  return(
    <div>
      <button onClick={handleClick}>
        {toggle ? 'Hide':'Show'} Content
      </button>
      {toggle && (
          <div>
            <p>Hi</p>
          </div>
        )}
    </div>
  )
}

export default ToggleDiv