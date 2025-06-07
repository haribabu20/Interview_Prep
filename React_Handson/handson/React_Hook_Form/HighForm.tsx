
// Adding other inputs like object, array, calender, numberic(age)

// JSON.stringify explanation

import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

type formValue = {
  username: string,
  email: string,
  channel: string,
  social: {
    instagram: string,
    twitter: string
  },
  phNumber: string [],
  age: number,
  dob: Date
}


const HighForm = () => {

  const form = useForm<formValue>({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
      social:{
        instagram: "",
        twitter: "",
      },
      phNumber:['',''],
      age:0,
      dob: new Date()
    }
  });
  const {register, control, handleSubmit, formState} = form;
  const {errors} = formState;

  const submitButton = (data: formValue) => {
    console.log(data);
  }

  return(
    <div>
      <h1>Form Validation - Array and Object</h1>

      <form onSubmit={handleSubmit(submitButton)}>

        <div>
          <label htmlFor='username'>Username</label>
          <input type='text' id="username" {...register('username',{
            required: {
              value: true,
              message: "Please enter a username"
            }
          })}></input>
          <p>{errors.username?.message}</p>
        </div>


        <div>
          <label htmlFor='email'>Email</label>
          <input id='email' type='email' {...register('email',{
            pattern:{
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email ID"
            },
            validate:{
              notAdmin: (fieldValue: string) => {
                return(
                  !fieldValue.endsWith('yahoo.com') || "Please enter any Gmail account"
                )
              }
            }
          })}></input>
          <p>{errors.email?.message}</p>
        </div>


        <div>
          <label htmlFor='channel'>Channel</label>
          <input id='channel' type='channel' {...register('channel',{
            required: {
              value: true,
              message: "Channel name is required"
            }
          })}></input>
          <p>{errors.channel?.message}</p>
        </div>


        {/* Object */}
        <div>
          <label htmlFor='twitter' >Twitter</label>
          <input id='twitter' type='text' {...register('social.twitter')} ></input>
        </div>

        <div>
          <label htmlFor='instagram' >Instagram</label>
          <input id='instagram' type='text' {...register('social.instagram')} ></input>
        </div>        


        {/* Array */}
        <div>
          <label>Primary Phone Number</label>
          <input id='primary-phone' type='text' {...register('phNumber.0')}/>
        </div>

        <div>
          <label>Secondary Phone Number</label>
          <input id='secondary-phone' type='text' {...register('phNumber.1')}/>
        </div>          


        {/* Age and DOB */}
        <div>
          <label>Age</label>
          <input type='number' id='age' {...register('age',{
            valueAsNumber: true,
            required: {
              value: true,
              message: 'Enter age'
            }
          })}></input>
          <p>{errors.age?.message}</p>
        </div>



        <div>
          <label>Date of birth</label>
          <input type='date' id='dob' {...register('dob',{
            valueAsDate: true,
            required: {
              value: true,
              message: 'Date of birth is required'
            }
          })}></input>
          <p>{errors.dob?.message}</p>
        </div>     



        <button>Submit</button>
      </form>

      <DevTool control={control}/>
    </div>
    
  )
}

export default HighForm;



/*

output:

  This is javascript object --> original output !

  {
    username: "JohnDoe",
    email: "john@gmail.com",
    channel: "TechTalk",
    social: {
      instagram: "john_insta",
      twitter: "john_twitter"
    },
    phNumber: ["9876543210", "9123456780"]
  }


  JSON format:

  Syntax to convert from JS object to JSON:
        
      --> " JSON.stringify(value, replacer, space) "


  Example:



  


*/