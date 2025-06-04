
// Basic Form using React Hook form library

// React-Hook-Form is mainly used for performance. It will not re render

import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

type FormValue = {
  username: string
  email: string
  channel: string
}

const BasicForm = () => {
  const form = useForm<FormValue>()
  const { register, control, handleSubmit } = form

  const onSubmit = (data: FormValue) => {
    console.log(data)
  }

  return (
    <div>
      <h2>Form Validation</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='username'>Username</label><br />
        <input id='username' type='text' {...register('username')} /><br />

        <label htmlFor='email'>Email</label><br />
        <input id='email' type='email' {...register('email')} /><br />

        <label htmlFor='channel'>Channel</label><br />
        <input id='channel' type='text' {...register('channel')} /><br /><br />

        <button type='submit'>Submit</button>
      </form>

      <DevTool control={control} />
    </div>
  )
}

export default BasicForm


/*

Mistakes done:

1. placed typescript code inside the component
2. onsubmit attribute should be in form element. I placed that in submit button.
3. have a glance in typescript code. line --> 14 and 17 using the type formValue. 


Notes:

1. Register will intern has the following attributes like --> "name, onChange, onBlur, ref". If we use all these 4, then it takes more space. Hence we use {...register} attrbiute inside label elements.

2. Destructured register, control, handleSubmit from form object of useForm

3. DevTool is a separate library to track the value that is given inside the input box

4. const form = useForm<FormValue>()

  Explanation:

  - useForm<FormValue>()
      This calls the useForm hook from React Hook Form and passes a TypeScript generic (<FormValue>) to it.

  - FormValue
      is a TypeScript interface/type that describes the shape of your form data.

  Ex: 
      if you have like

    type FormValue = {
      username: string
      email: string
      channel: string
    }

    This tells TypeScript:
      Your form has three fields: username, email, and channel
      All are strings



register → connects inputs to React Hook Form

handleSubmit → function to handle form submission

control → used with advanced features like <DevTool /> or custom components










*/

