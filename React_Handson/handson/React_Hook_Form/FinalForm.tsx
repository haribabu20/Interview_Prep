// disable form if mandatory fields are not provided.

/*
  Two things are mandatory for this aproach.
    1) mode: onChange
    2) isValid condition. Destructre it from formState

*/


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


const FinalForm = () => {

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

  const {register, control, handleSubmit, formState, getValues, reset} = form;
  const {errors, isValid} = formState;

  const submitButton = (data: formValue) => {
    console.log(data);
    let jsonFormat = JSON.stringify(data, null, 2);
    console.log(jsonFormat)     // JSON format
  }

  const handleGetValues = () => {
    console.log(getValues()) // prints all the value given in input box
    console.log(getValues('social')) // {twitter: '', facebook: ''};
    console.log(getValues('social')) // smt [value given in input box]
    console.log(getValues(['username','email'])); // fetches value of username and email
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



        <button disabled={!isValid}>Submit</button> 
        <button onClick={handleGetValues}>Get Value</button>
        <button onClick={()=>reset()}>Get Value</button>
      </form>

      <DevTool control={control}/>
    </div>
    
  )
}

export default FinalForm;


/*
  mode: onChange in useForm
    This is to to keep isValid up to date as users type.

  isValid:
  - will be true only when all required fields are valid.
  - The button will remain disabled until the user fills in all the required fields correctly.
  - Only the fields with validation rules are tracked for isValid.
  - Fields without validation rules are ignored by isValid, meaning users can leave them empty and isValid may still be true.


   <button disabled={!isValid}>Submit</button> 

    When we fill all the field, we get isValid as true. using same value in disabled attribute will disable it. so we give comment as (!isValid)





    Any rule that helps validate user input is called a validation rule.
    In register(), there are multiple types of validation rules. Here's how they break down:




    | Rule Type                | Description                                    | Example                                                    |   |                         |
| ------------------------ | ---------------------------------------------- | ---------------------------------------------------------- | - | ----------------------- |
| `required`               | Makes the field mandatory                      | `{ required: 'This field is required' }`                   |   |                         |
| `pattern`                | Validates against a regular expression (RegEx) | `{ pattern: { value: /abc/, message: 'Must match abc' } }` |   |                         |
| `min`, `max`             | Numeric or date limits                         | `{ min: 18, message: 'Minimum is 18' }`                    |   |                         |
| `minLength`, `maxLength` | Limits the number of characters                | `{ minLength: 5, message: 'At least 5 characters' }`       |   |                         |
| `validate`               | Custom function to validate the value          | \`{ validate: (value) => value !== 'admin'                 |   | 'Admin not allowed' }\` |



 */