import {useState} from 'react'

const App = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        number: '',
    })

    const [submittedForm, setSubmittedForm] = useState(null)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedForm(formData)
    }
    
    
    return (
        <>
            <h1>User Details</h1>
            <form onSubmit={handleSubmit}>
                
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        onChange={handleChange}
                        ></input>
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"            
                        onChange={handleChange}                        
                        ></input>
                </div>

                 <div>
                    <label htmlFor="number">Mobile Number</label>
                    <input
                        id="number"
                        type="tel"
                        name="number"     
                        onChange={handleChange}
                        ></input>
                </div>

                <button type="submit">Submit</button>

                {submittedForm && (
                    <div>
                          <h2>Submitted Data:</h2>
                          <p>Username: {submittedForm.username}</p>
                          <p>Password: {submittedForm.password}</p>
                          <p>Mobile: {submittedForm.number}</p>
                    </div>
                )}
                
            </form>
        </>
    )
}

export default App