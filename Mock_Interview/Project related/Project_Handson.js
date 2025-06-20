
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









6. Error Handling

  "In your Customer Compliance Management System project, how did you handle API errors?
  For example, what happened if fetching customer details failed?
  Did you show any error messages or fallback UIs to the user? Explain your approach."


Ans:

Interview answer:
  ✔️ "We used try-catch in Axios calls inside useEffect. In case of failure, we updated an error state and displayed a fallback UI or retry option, so the app didn’t break and the user was informed properly."


Detailed Answer:
  "Yes, we handled API errors carefully to make sure the user had a good experience even when the API failed. For example, in the Dashboard page, when we fetched the customer list using Axios, there was always a possibility of failure (like network error or server issue). To handle this, we wrapped the Axios call in a try-catch block inside useEffect. If the API call failed, we set an error state, and based on that, we showed a fallback message like: 'Something went wrong. Please try again later.' This prevented the UI from breaking and kept the app stable. In some cases, if required, we also provided a Retry button which would trigger the API call again."


Code:

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState(null);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('/api/customers');
      setCustomers(response.data);
      setError(null); // reset error if success
    } catch (err) {
      setError('Failed to load customers. Please try again.');
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={fetchCustomers}>Retry</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Customer List</h2>
      {customers.map((cust) => (
        <p key={cust.id}>{cust.name}</p>
      ))}
    </div>
  );
};

export default Dashboard;









7. Optimizations



Questions for Optimizations:

  1. how you'll come to know that you're application was re rendered when you build your component
  2. How you'll check the performance of your application. and there improvements
  3. Did you use any tools for performace tracking.
  4. In Customer detail page, You'll have more customers. Approximately how many customers you think you may have in your application lists. 
  5. I'm more interested in asking how did you manage rendering the huge sets of customers in a table with correct performace optimization and what challenges did you face here.
  6. How did you handle unnecessary re-rendering in your dashboard or customer details page?
  7. You mentioned memoization (React.memo/useMemo/useCallback). Can you explain a real scenario from your project where you used this? Why did you need it there?
  8. What performance impact did you see when you added lazy loading in your application? How did you measure it?
  9. When handling large lists of customers, did you consider infinite scrolling, pagination, or virtualization? Why did you choose the method you used?
  10. Did you ever experience slowness in any particular page or feature in your app? How did you identify and fix it?
  11. How did you reduce the initial bundle size of your React application? Did you use any code-splitting strategies?
  12. Have you ever used React DevTools or browser Performance tab to detect rendering issues? What did you check there?
  13. Can you explain what impact an inline function or anonymous arrow function in JSX has on performance? How did you solve it?
  14. Did you ever face a memory leak or warning (like "Can't perform a React state update on an unmounted component")? How did you handle that?
  15. In forms (like KYC refresh), did you optimize form rendering or validation performance? How?
  16. How do you decide whether to store data in local state (useState), Context API, or Redux — especially for performance reasons?
  17. In customer dashboard, suppose thousands of customer records came from backend — how would you optimize rendering without freezing the UI?
  18. Did you handle large JSON responses or big data payloads from the backend? How did you process or limit them in frontend for performance?
  19. Have you worked with Webpack or Babel configurations to improve production build performance? What changes did you make?
  20. How did you ensure responsiveness and smooth scrolling or transitions in your UI components (like customer lists or tables)?


  Chrome dev tool:  --> to analyse the code
  - chrome devtool --> source --> search for file and then will put the breakpoint and will analyse
  - This will be same like visual studio debugging --> continue, step over, step into, etc. On clicking the prev debugged line code, it'll show its value !

  React dev tool:  --> to analyse the performace
  - component tab ->  shows root react component that render on the page and their sub component
  - proiler tab -> used to track the performance -> this provides the timing in ms and with this we can optimize
  - Lighthouse


  Answers:



  1. how you'll come to know that you're application was re rendered when you build your component

  "So mainly, I check unnecessary re-renders by using console logs, React Profiler in DevTools, and carefully monitoring Hook dependencies. Wherever needed, I used memoization techniques like React.memo to optimize rendering."

    - At first, during development, I simply put a console.log inside the component function body to see when and how many times it renders.
    - I also use React Developer Tools Profiler, which shows how many times a component re-rendered and how much time it took.
    - Sometimes re-renders happen because dependencies in hooks are not controlled properly. So, I always check dependency arrays of useEffect, useMemo, useCallback to prevent accidental re-renders.
    - After detecting unnecessary re-renders, I wrapped reusable components like CustomerCard in React.memo() to avoid re-rendering unless props actually change.




  
  2. How you'll check the performance of your application. and there improvements

    ✅ 1. Using React Developer Tools – Profiler:

        I use the React Developer Tools Profiler tab in Chrome. It shows which components rendered, how many times, and how much time each render took.
        For example:
        In our Dashboard or Customer List, I used Profiler to check if unnecessary components were re-rendering when the parent state changed — like if the whole customer table was re-rendering when only a filter value changed.


    ✅ 2. Google Chrome DevTools – Performance Tab:

        If the application feels slow (like during scrolling or loading), I record a Performance profile in Chrome DevTools.
        This shows things like:
        Long tasks
        JS execution time
        Rendering and painting times
        This helped in finding bottlenecks — like slow API processing or rendering large lists.


    ✅ 3. Checking Bundle Size:

        For bundle size, I used webpack-bundle-analyzer in the build process to see if any unwanted libraries or large chunks increased the app size unnecessarily. This helped us optimize by lazy-loading routes and splitting code.


    ✅ 4. Lighthouse Audit:

        For overall performance (First Load Time, TTI, CLS, etc.), I sometimes ran Lighthouse audit in Chrome DevTools. It gave suggestions like reducing unused JavaScript, optimizing images, and so on.


    ✅ 5. Observing User Behavior:

        During manual testing, especially since I have a testing background, I also checked for UI lags, slow form validation (in KYC forms), and unresponsive clicks — and raised these issues to the team to optimize accordingly.







3. Table Optimization

Qn:

  I'm more interested in asking how did you manage rendering the huge sets of customers in a table with correct performace optimization and what challenges did you face here.

Ans:

"To optimize the rendering of large customer lists, we mainly used pagination, proper keying, and memoization techniques like React.memo. Lazy loading was used for detailed modals. Our main challenge was backend APIs sending huge unpaginated data, which we solved through team discussions by implementing server-side pagination."


✅ 1. Pagination Instead of Rendering Everything:
We did not render all customers at once.
Instead, we used server-side pagination — fetching a limited set of customers (say 10 or 25) per page. When the user clicked "Next", we fetched the next set of customers from the backend.
✔️ This reduced the DOM size and made rendering faster.

✅ 2. Conditional Rendering & Key Prop:
Each row in the table was uniquely identified using the key prop in React. This allowed React to track elements correctly and avoid unnecessary re-renders.

✅ 3. Memoization for Table Rows (if required):
Wherever required (like in reusable CustomerRow components), we used React.memo() to prevent re-rendering unless the customer data changed.

✅ 4. Lazy Loading for Modals or Details:
If an admin clicked to view detailed KYC data for a customer, the detailed view (or modal) was lazy-loaded using React.lazy() and Suspense.
This ensured such details were loaded only when needed, not during the initial page load.


✅ Challenges Faced:

1. Initial Slowness When Large Data Came:
Once, the backend returned hundreds of records at once without pagination. The page became slow and unresponsive.
✔️ We discussed with the backend team and enforced server-side pagination.

2. Re-renders in Table Rows:
When filters or parent states changed, all table rows re-rendered unnecessarily.
✔️ We solved this by using React.memo for row components and useCallback for functions passed as props.





4. How Pagination concept in table work on a whole !

"In our Customer Compliance project, we handled large customer lists using Server-Side Pagination (SSP). On the frontend (React), we sent API requests with page & limit values. The backend responded with only the required set of records per page along with total count. We maintained page state in React, and on page change, sent fresh requests to get new records. This kept the DOM light and performance high, especially when dealing with hundreds or thousands of customer records. We also faced challenges like backend sending all records initially — which we solved by enforcing SSP. Overall this made the table scalable and efficient."

| **Challenge**                                  | **Solution**                                                     |
| ---------------------------------------------- | ---------------------------------------------------------------- |
| Backend initially returned all records (1000+) | Discussed with backend, applied **Server-Side Pagination (SSP)** |
| Page flickering or re-renders on data change   | Used proper `key` props, minimized unnecessary state updates     |
| Handling total pages calculation               | Used `totalCount` from backend to dynamically set total pages    |



In real projects like the Customer Compliance Management System, we display customer lists which may contain hundreds or thousands of records.

  But rendering all records at once will:
  Slow down the browser
  Make DOM very heavy
  Lead to memory issues
  Cause bad user experience (lagging, freezing)
  So, we used Pagination.

Backend:
✔️ The backend (API) is responsible for sending only a limited set of records per request.
Example api request  ----->>>   GET /customers?page=1&limit=25

Returns only 25 customers for that request.






5. Server side pagination, Infinte Scrolling, Virtualisation Differences !

High level understanding :

ssp                 --> first backend send 25 data, then on clicking next, it again sends another 25 data.
infinite scrolling  --> initially 25 data, then on coming to end, it shows another 25 data and so on. but the above rec will be available. hence leading to more memeory usage.
virtualisation      --> using react.windows and react.virtualized, here all 1000 rec will be loaded and stored in state. no backend interaction. on coming to end of page, it shows another 25 sets and will erase the prev rec from DOM. this is how it increases the optimization and hence the loading time will also reduced


Detail:

"All three are different optimizations to handle large datasets:
- Server-Side Pagination limits data via the backend — best when dealing with huge records in dashboards.
- Infinite Scrolling offers a modern smooth scroll but keeps adding records in memory — best for feeds.
- Virtualization keeps DOM light by rendering only visible rows — best when you load all data upfront or need smooth local scroll performance.





| **Approach**        | **Backend Load**             | **Frontend Load**               | **User Experience** | **Best For**                         |
| ------------------- | ---------------------------- | ------------------------------- | ------------------- | ------------------------------------ |
| **SSP Pagination**  | Low (server handles slicing) | Low (only 25 records)           | Page-based          | Enterprise dashboards, banking admin |
| **Infinite Scroll** | Medium (many small API hits) | Medium (growing list in memory) | Seamless scroll     | Social media, chat apps, Gmail       |
| **Virtualization**  | High (full data fetched)     | Very Low (tiny DOM)             | Very smooth scroll  | Large local datasets, reports, logs  |


1️⃣ Server-Side Pagination (SSP)
    Backend gives only 25 or 50 records per API call.
    User clicks "Next" or "Previous".
    Browser only holds those 25 records — lightweight.
    Very safe and efficient for huge data sets (1000 to 1 million rows).
    But user has to manually switch pages.
✔️Best when:
    Data set is very large.
    User expects to manually paginate (banking admin dashboards, KYC apps).


2️⃣ Infinite Scrolling:
    No page numbers or "Next" buttons.
    When user scrolls down — frontend automatically sends "next page" API call and loads more records.
    Adds new data below the existing data — gives a "seamless" scroll experience.
    More modern feel (like Facebook, Instagram, Gmail).
✔️ Best when:
    User doesn’t expect page numbers.
    Continuous feed experience (social media, feed apps)


3️⃣ Virtualization:
    ALL data (say 1000 records) is already in memory or state.
    But only visible rows are rendered to the DOM.
    Example: React renders only 20 visible rows out of 1000 — rest are not created in the DOM until needed.
    Uses libraries like "react-window, react-virtualized"
    Works for both paginated and infinite data.
    Excellent frontend rendering optimization — saves memory, avoids React re-render slowness.
✔️ Best when:
    You have fetched 1000+ records already.
    No server-side pagination — or data is small enough to load once.
    You need fastest scroll, less DOM weight.



------------------------------___>>>>>>>>>>>>>>                  Impportant:          <<<<<<<<<<<<<<<______------------------------------------------------



| **Point**                  | **Infinite Scrolling**                                     | **Virtualization**                                 |
| -------------------------- | ---------------------------------------------------------- | -------------------------------------------------- |
| **Where Data Comes From?** | From **Backend/API** — new data loaded when user scrolls   | From **Frontend only** — all data already loaded   |
| **Backend Role**           | YES — each time you scroll near bottom, API gives next set | NO — full data (Ex: 1000 rows) already in memory   |
| **Frontend Role**          | Renders & keeps adding new data in list (grows in memory)  | Renders only **visible rows**, reuses DOM elements |
| **Memory Usage**           | **Medium/High** — list keeps growing in browser memory     | **Very Low** — only visible rows present in DOM    |
| **User Experience**        | Seamless scroll — feels like endless feed                  | Very fast scroll — even with 1000+ records         |
| **Best Use Cases**         | Social Media Feeds (Facebook, Instagram), Chat apps        | Huge local data tables (logs, reports) in apps     |
| **API/Backend Required?**  | **Yes — backend must support paging API**                  | **No — backend gives all data in one shot**        |








8. How did you reduce the initial bundle size of your React application? Did you use any code-splitting strategies?

Ans:

"Yes, reducing the initial bundle size was one of the important optimization tasks in our Customer Compliance Management System (CCM) project to improve the application's loading time and performance — especially since banking admin panels need to load fast even on slower networks.
We used the following strategies:

"As a result of these below techniques, our initial bundle size reduced, and the dashboard loaded faster, improving the user experience for banking admins."


1️⃣ React Lazy Loading (Code Splitting)
  We used React’s lazy() and Suspense to dynamically load components only when they are needed. 
  This way, big components like Customer Details, KYC forms, etc., are not included in the initial bundle — they load only when the user navigates to that page.

2️⃣ Dynamic Import for Routes
  For different pages (Dashboard, KYC, Customer List), we split the routes to load each page separately:
    const Dashboard = React.lazy(() => import('./Dashboard'));
    const KYCPage = React.lazy(() => import('./KYCPage'));

3️⃣ Tree Shaking
  We ensured that we imported only required functions/components from libraries instead of entire libraries.
    // Good (only what is needed):
      import { Button } from '@mui/material';
    // Bad (imports everything):
      import * as MUI from '@mui/material';

4️⃣ Using Lightweight Libraries
    Instead of using heavy libraries unnecessarily, we used Axios (small and focused) and TailwindCSS (utility-first, no extra CSS files) to keep bundle size small.










9. How did you ensure responsiveness and smooth scrolling or transitions in your UI components (like customer lists or tables)?


Ans:

I ensured a responsive, smooth, and optimized UI using TailwindCSS utilities, Flex/Grid layouts, smooth scroll classes, and transition effects, along with proper testing across devices."


1️⃣ TailwindCSS for Responsive Design:
  I used TailwindCSS breakpoints (sm, md, lg, xl) to ensure our components and pages adjusted well on different screen sizes (desktop, tablet, mobile).

  <div className="p-4 sm:p-6 md:p-8 lg:p-10">
    Customer Details
  </div>


2️⃣ CSS Flexbox and Grid (via Tailwind)
  We used Tailwind’s flex and grid utilities to build adaptive layouts that automatically adjust without breaking on smaller screens.

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Card1 />
    <Card2 />
  </div>

✅ In mobile view — it shows 1 column; in desktop — it switches to 2 columns.


3️⃣ Smooth Scrolling
  Wherever lists or long sections existed (like Customer List), we enabled smooth scrolling using CSS:

  <div className="overflow-y-auto scroll-smooth h-96">
    { customer items here }
  </div>

✅ This gave a smooth scroll effect instead of a jumpy one — improving user experience.


4️⃣ Transition Effects for UI Feedback:
  We applied Tailwind transition classes to buttons, modals, and forms to make UI interactions (like hover, click, open/close) smooth and animated:

  <button className="transition-all duration-300 hover:bg-blue-500">
    Submit
  </button>

✅ This improved user feedback during interactions — especially on forms and dashboard actions.


5️⃣ Testing Responsiveness:
  - To verify this responsiveness, we regularly used:
  - Chrome DevTools Device Mode
  - Manual resizing during local development
  - Cross-browser testing to ensure consistent behavior.











*/