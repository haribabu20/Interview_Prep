
import { DevTool } from '@hookform/devtools'
import { useForm } from 'react-hook-form'

type formValue = {
  username: string,
  email: string,
  channel: string
}

const MediumForm = () => {

  const form = useForm<formValue>({
    defaultValues: {
      username: '',
      email: '',
      channel: ''
    }
  });

  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const submitForm = (data: formValue) => {
    console.log(data);
  }

  return(
    <div>
      <h2>Form Validation</h2>
      
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor='username' >UserName</label><br/>
          <input id='username' type='text' {...register('username',{
            required: {
              value: true,
              message: "username is required"
            }
          })}></input><br/>
          <p>{errors.username?.message}</p>
        </div>

        <div>
          <label htmlFor='email' >Email</label><br/>
          <input id='email'type='email' {...register('email',{
            required: {
              value: true,
              message: 'Email id is required'
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "please enter valid email address"
            },
            validate: {
              notAdmin: (fieldValue: string) => {
                return (
                  fieldValue !== 'admin@example.com' || 'Enter a different email as it is for admin people' 
                );
              },
              notBlackListed: (fieldValue) => {
                return (
                  fieldValue.endsWith("baddomain.com") && "This domain is not allowed"
                )
              }
            }
          })} ></input><br/>
          <p>{errors.email?.message}</p>
        </div>


        <div>
          <label htmlFor='email' >Channel</label><br/>
          <input id='email'type='text' {...register('channel',{
            required: {
              value: true,
              message: "Channel name is required"
            }
          })} ></input><br/>
          <p>{errors.channel?.message}</p><br/><br/>

        </div>


        <button>Submit</button><br/>
      </form>
      <DevTool control={control}/>
    </div>
  )
}

export default MediumForm;



/*

WHY || and not the && operator ?


  If email account ends with yahoo.com, then print the error message as "enter gmail account"

    Approach 1:
      fieldValue.endsWith('yahoo.com') && "Please enter any Gmail account"

    Approach 2:
      !fieldValue.endsWith('yahoo.com') || "Please enter any Gmail Account"

  My way is Approach 1. But we have to use Approach 2 in this scenario

  Reason: 
    - If the input ends with yahoo.com, then the statement one will be (!true) = false
  Since first statement is false, it prints the 2nd statement.
    - If the input doesn't end with yahoo.com, then it prints (!false) = true

    So it will be either true or the error message will be printed if we use OR operator. But if we use && operator, if the statement 1 is false, then it will not print anything. only if the 1st statement is true, it prints the 2md statment
  



1. make sure that the default value is given inside object and default value should be also object. All these should be available inside useForm hook !

2. Inside register
      1st parameter is "name" value.
      2nd parameter is conditions. ---> [required, pattern, validate(custom validation as method)]
        'required' and 'pattern' has 2 properties --> value and message.
        'validation' --> custom validtion described in methods.



Some confusing points:

  2. required. not require

  3. require should come inside the register parameter and not in outside of the register.

  4. errors. not error

  5. && and || operatos explanations.



*/