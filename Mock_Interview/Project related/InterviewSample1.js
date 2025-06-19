
/*

| Topic                                 | Prepared?                                |
| ------------------------------------- | ---------------------------------------- |
| Reusable Components                   | ✅ (but you can practice speaking)        |
| State Mgmt (useState, Redux, Context) | ✅                                        |
| API Handling with Axios               | ✅                                        |
| Form Handling (React Hook Form)       | ✅                                        |
| Routing with React Router             | ✅                                        |
| Performance Optimization              | 🔸 **(Need to learn this one more)**     |
| Error Handling (Axios)                | 🔸 **(Easy to learn — I'll help!)**      |
| Testing (optional)                    | 🔸 **(Just high-level ready is enough)** |







1. Can you briefly describe the React project you worked on at HCLTech — especially the compliance management system you mentioned in your resume? What was your exact role and contribution?


Ans:

"I worked on a Customer Compliance Management (CCM) system for one of our banking clients at HCLTech. This platform was designed to help business admin users handle customer obligations, particularly focusing on KYC (Know Your Customer) refresh processes. The system allowed them to efficiently view, track, and manage customer details through an intuitive dashboard interface.

Technology-wise, the project was built using ReactJS for the UI layer, Redux for state management, and TailwindCSS for styling and responsive design. My core responsibility was developing reusable, scalable, and responsive React components that formed the backbone of the CCM dashboard. This included tables, filters, modals, and form components used across multiple pages of the application.

One of my key contributions was ensuring that these components were reusable and could handle dynamic data inputs, making the development process faster and maintaining UI consistency throughout the platform. Additionally, I collaborated closely with backend teams to optimize data fetching through AJAX, which significantly improved page load performance and user experience.

Overall, my role was critical in building a user-centric, maintainable UI that helped the admin teams process KYC updates more efficiently, reducing manual effort and improving operational workflows."







2. Can you give an example of a specific React component you built in this project that was reusable across multiple pages or features?
What challenges did you face while making it reusable?

Ans:

    "custom Input Field component"

"Yes, one of the reusable components I built in the Customer Compliance Management system was a custom Input Field component. In many parts of the project, there were forms — like customer information forms or search boxes — where the user needed to enter details such as name, ID, or address. Instead of writing separate input fields again and again, I created a single reusable Input component. This component accepted simple properties (props) like:

- label (to display the field name)
- placeholder (to show example text inside the box)
- value (to hold the text entered)
- onChange (to handle typing changes)
- type (for text, number, etc.)

One small challenge I faced was to show error messages when the user entered wrong or empty values. To solve this, I added a simple 'error' prop to the component. If any error message came (for example, 'This field is required'), the component would show that message just below the input box. This way, the same Input component was used for all the forms — it reduced code writing, kept the design consistent, and made it easier to maintain later if any changes were needed."_


Reusable InputField Component :

import React from 'react';
const InputField = ({ label, placeholder, value, onChange, type = 'text', error }) => {
  return (
    <div className="mb-4">
      {label && <label className="block mb-1 text-gray-700">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
export default InputField;


This can be used in forms like this,

import React, { useState } from 'react';
import InputField from './InputField'; // assuming both files are in the same folder

const SampleForm = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      setError('This field is required');
    } else {
      setError('');
      alert('Form submitted successfully with name: ' + name);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10">
      <InputField
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={error}
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default SampleForm;







3. Form Validation

👉 "Can you explain how you handled form validation in your project?
Did you use any libraries, or did you implement custom validation?
What kind of validations did you perform?"

Ans:

"Yes, in my project experience, I’ve worked with both controlled components and the React Hook Form library for form handling and validation. In my first squad, we used a simple controlled component approach. We built a reusable InputField component that accepted props like value, onChange, and error. All the form states were managed using React’s useState, and validations like ‘required fields’, 'maximum length', or custom validations were handled manually inside the form submit function. This worked well for small forms but as the complexity increased, we noticed that managing state and validation manually became repetitive and slightly impacted performance due to re-renders with every keystroke. Later, in my second squad, we switched to using React Hook Form, which made form handling much simpler and more optimized. The biggest advantage I saw with React Hook Form is that it is uncontrolled by default, meaning it doesn't cause unnecessary re-renders for every input change — this improved performance noticeably, especially in forms with many fields. With React Hook Form, we could also define validation rules easily — such as required, minLength, pattern for email or phone number formats — directly in the field’s registration. The library also provided error handling and easy access to error messages, making the code cleaner and reducing boilerplate. Overall, using React Hook Form helped in building scalable forms, improving performance, and reducing the amount of manual validation code we needed to write."







4. State management !!

👉 "Can you explain how you handled state management in your project? Did you use any tools or libraries like Redux or Context API? Why did you choose that approach?"


Ans:

"In my project, we used a combination of useState, Context API, and Redux based on the need and complexity of the state.

useState:
  For small and local component-level states — such as form inputs, toggle buttons, modals, or tab selection — we used React’s useState hook. This kept the component logic simple and easy to manage without involving any global state.

Context API:
  In my project, we also used Context API to manage the application theme — light or dark mode. The reason we chose Context here is because the theme setting (light/dark) needs to be available in many components — such as the header, sidebar, dashboard, and other pages. If we passed the theme value using props to each component (prop drilling), it would make the code messy and hard to maintain. So instead, we created a simple ThemeContext using Context API, which stored the current theme and a function to toggle between light and dark modes. Any component could then use this context to apply the theme, without worrying about props.

redux:
  The main reason we chose Redux was because the compliance management system had features like dashboards, KYC refresh forms, customer lists, where the same data (like customer details) had to be accessed or modified from multiple parts of the app. Using Redux made this data management consistent and scalable.



Handson:

1. "context api"


Theme management:

  "We used Context API to manage app-wide theme (light/dark mode), avoiding prop drilling.
   Any component could access the theme using useContext hook."



✅ 1. Create ThemeContext.js

import React, { createContext, useState } from 'react';
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


✅ 2. Wrap your App with ThemeProvider (in App.js)

import React from 'react';
import { ThemeProvider } from './ThemeContext';
import HomePage from './HomePage';

const App = () => {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
};

export default App;


✅ 3. Use the ThemeContext in any component (like HomePage.js)

import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const HomePage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'
      }`}
    >
      <h1 className="text-2xl mb-4">Current Theme: {theme}</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Toggle Theme
      </button>
    </div>
  );
};
export default HomePage;




2. Redux:

"In our Customer Compliance Management (CCM) system, we used Redux to handle the global state of customer details.

For example — when the banking admin selects a customer from the customer list, that customer’s details (such as name, ID, KYC status, account type) needed to be shown in multiple parts of the app:

✔️ On the dashboard summary,
✔️ On the KYC refresh form,
✔️ On the customer detail sidebar,
✔️ On the profile view page.

To avoid fetching or passing customer data again and again between components (prop drilling), we used Redux.
We created a customerSlice to store and manage the selected customer’s data.

Any component in the app could read or update this customer state easily via Redux — using useSelector to read and useDispatch to update the customer data.

This helped maintain a single source of truth for customer data across the entire compliance management app — making the system scalable and reducing bugs related to inconsistent data."_


Handson

✅ Simple Redux Slice Example for "Customer Details"

1. customerSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCustomer: null, // will store {id, name, kycStatus, accountType} etc.
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setCustomer: (state, action) => {
      state.selectedCustomer = action.payload; // payload = customer object
    },
    clearCustomer: (state) => {
      state.selectedCustomer = null;
    },
  },
});

export const { setCustomer, clearCustomer } = customerSlice.actions;
export default customerSlice.reducer;


2. ✅ Using in React Component (for example, KYCForm.js)

import React from 'react';
import { useSelector } from 'react-redux';

const KYCForm = () => {
  const customer = useSelector((state) => state.customer.selectedCustomer);

  if (!customer) return <p>Please select a customer</p>;

  return (
    <div>
      <h3>KYC Form for: {customer.name}</h3>
      <p>KYC Status: {customer.kycStatus}</p>
      <p>Account Type: {customer.accountType}</p>
      { KYC form fields here }
    </div>
  );
};

export default KYCForm;







5. API Handling

  "In your Customer Compliance Management System, how did you handle API calls for fetching or updating customer data? Did you use any middleware like Redux Thunk or Redux Toolkit's createAsyncThunk — or did you manage API calls in the component itself? Explain your approach and why you chose it."


Ans:

Interview answer:
  ✔️ "We handled API calls using Axios inside useEffect. Data was stored in local state (useState). To transfer data between pages, we used React Router’s navigation state, not Redux or Context."


Detail:
  For example, on the Dashboard page, we needed to fetch the list of customers from the backend API. We used the useEffect hook to make this API call when the component mounted. The fetched data was stored in the component’s local state using the useState hook. Since the fetched data (like the customer list) was only required in that particular component (Dashboard), we did not use Redux or Context API for this purpose. This made our code simpler, easier to manage, and avoided the overhead of global state management. If we needed to pass customer details to another page (like the KYC page), we used React Router’s navigation and state passing feature — for example, using the navigate function along with route state — to send the required customer data. This approach worked well for our use-case as the data did not need to be shared globally across unrelated components."



  Code:

  import React, { useEffect, useState } from 'react';
  import axios from 'axios';
  import { useNavigate } from 'react-router-dom';

  const Dashboard = () => {
    const [customers, setCustomers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchCustomers = async () => {
        try {
          const response = await axios.get('/api/customers'); // sample API
          setCustomers(response.data);
        } catch (error) {
          console.error('Error fetching customers:', error);
        }
      };

      fetchCustomers();
    }, []);

    const handleCustomerClick = (customer) => {
      navigate('/kyc-form', { state: { customer } }); // passing customer to next page
    };

    return (
      <div>
        <h2>Customer List</h2>
        {customers.map((cust) => (
          <div key={cust.id}>
            <p>{cust.name} - {cust.kycStatus}</p>
            <button onClick={() => handleCustomerClick(cust)}>View KYC</button>
          </div>
        ))}
      </div>
    );
  };

  export default Dashboard;








*/