import React from 'react'
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';



// Button Component

export const ButtonComponent = () => {
  return (
    <div>
      <Button 
        variant='contained' 
        startIcon={<SendIcon/>}
        endIcon={<SendIcon/>}
        style={{backgroundColor: "red"}}
        disableElevation
        disableRipple
      >Send</Button>
    </div>
  )
}













const MUI = () => {
  return (
    <div>
      
    </div>
  )
}

export default MUI


