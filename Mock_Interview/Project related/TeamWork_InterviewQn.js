/*

1. "What was your individual contribution in the project?"

2. "Did you face any challenges while working with cross-functional teams (backend, QA, BA)? How did you handle that?"

3. "Tell me a situation where a production bug occurred. How did you approach it?"

4. "How do you ensure smooth communication with backend or QA when an issue arises?"

5. "How do you prioritize tasks when multiple issues or requirements come at the same time?"

8. "How do you make sure your code is delivered on time during sprint cycles?"

9. "What ReactJS or frontend concepts have you recently learned or improved?"

10 "What would you like to improve in your technical skill set in the coming months?"

11. Name some libraries that you used in your projects

12. Explain how you'll interact with you backend team. What are all the things that you'll discuss among yourself before starting any feature to work

13. What kind of work you've done when you're in nodeJS team



Answers:

1. "What was your individual contribution in the project?"

ans:

"In my Customer Compliance Management System (CCM) project, I was mainly responsible for building reusable, responsive UI components using ReactJS and TailwindCSS. My key contribution was to develop various screens and pages for banking admin users — such as KYC refresh forms, customer details pages, and dashboard components.
I ensured the components were fully reusable and easily configurable across different modules. I also took care of API integration using Axios — fetching and displaying customer details, handling form submissions, and displaying error/success messages properly.

Besides the UI work, I optimized rendering performance using techniques like memoization, lazy loading, and conditional rendering to reduce unnecessary re-renders and improve user experience.
I was also actively involved in resolving production bugs, improving code maintainability, writing clean and readable code, and reviewing pull requests from peers. In addition, I participated regularly in Agile ceremonies like daily stand-ups and sprint planning, where I provided updates and gave technical suggestions where necessary."

✅ You can also add (if you want more weight):
"Additionally, I collaborated closely with the backend and QA teams to understand API responses, report integration issues early, and ensure end-to-end feature quality by doing manual functional testing on my components."

Important Tips for Interview (if they dig deeper):

1. If they ask "What part of the dashboard did you build?" — you can say:
    "I worked on building forms for KYC refresh, reusable input components, and customer detail pages where data was fetched and displayed dynamically using Axios."

2. If they ask "Did you handle state management?" — say:
    "Yes, I handled local state using useState and useReducer, and shared state using Redux and Context API depending on the requirement."






2. "Did you face any challenges while working with cross-functional teams (backend, QA, BA)? How did you handle that?"


"Yes, I did face some challenges while working with cross-functional teams like Backend Developers, QA (Testers), and BAs (Business Analysts).
One of the common challenges was API mismatches or delays from the backend team — sometimes the API response structure or status codes differed from what was initially shared in the contract. This caused confusion or integration errors in the frontend.
To handle this, I maintained regular and clear communication with the backend team via stand-up meetings, JIRA tickets, or direct calls. I used tools like Postman to independently test the APIs so that I could confirm the response format early — even before integrating into the UI. This reduced last-minute surprises and saved time.
Another challenge was with QA when bugs were reported in the frontend. Sometimes the issue was not on the frontend but due to backend API or missing data. In such cases, I collaborated closely with QA and Backend to find the exact root cause by checking API payloads, error logs, or browser console.
With BAs, sometimes there were clarity issues on the expected UI behavior — for example, field validations, optional/mandatory fields in forms, etc. Whenever this happened, I raised these queries early in sprint planning or grooming sessions to get proper clarification before development started."

"In all these situations, I made sure to have early communication, clear documentation, and independent testing, which helped in smooth coordination with cross-functional teams and reduced development delays."








3. "Tell me a situation where a production bug occurred. How did you approach it?"

"Yes, I encountered a production bug during our Customer Compliance Management (CCM) system development.
The issue happened on the Customer Detail page, where customer data was not properly displayed after a fresh login. The table showed blank or undefined values, even though the backend APIs were working fine. This was a high-priority production issue since the banking admin users couldn't view customer details properly.

🔍 How I approached it:

  Reproduced the Issue:
    First, I tried to reproduce the issue in my local and staging environment to confirm under what exact conditions this happened.

  Checked API Calls:
    I inspected the API response using browser DevTools (Network tab) and Postman. The API was actually sending the correct data, so backend was fine.

  Debugged the Frontend Logic:
    On debugging the React code, I found that there was a race condition — the customer data from Redux state or API response was being accessed before it was fully updated (due to asynchronous nature). As a result, the component tried to render before data was actually available.

  Applied the Fix:
    I added conditional rendering checks (like if (data) or optional chaining) to make sure the data existed before rendering the table. After the fix, the issue got resolved.

  Tested Thoroughly:
    I tested the fix across various scenarios (refreshing page, navigating directly via URL, after login) to make sure it worked perfectly.

  Informed QA & Deployed:
    After internal testing, I informed the QA team and got the fix verified before pushing it to production.


"This experience taught me the importance of properly handling asynchronous data in React and ensuring safe rendering, especially when working with dynamic API-driven data."


  Handson:

  Before (Problem code — may cause error if data is undefined):

    // Old way — risky if 'data' is undefined or null
      return (
        <div>
          {renderCustomerDetails(data)}
        </div>
      );



  After (Safe way using conditional rendering):

    // New way — safe conditional rendering
      return (
        <div>
          {data && renderCustomerDetails(data)}
        </div>
      );







4. Name some libraries that you used in your projects


🔍 1. Axios
🔍 2. React Redux
🔍 3. React Hook Form
🔍 4. React Router
🔍 5. Tailwind CSS
🔍 6. Material-UI (MUI)
🔍 7. React Icons (or other icon libraries): For adding icons inside buttons, navigation bars, or status indicators.
🔍 8. Lodash (if applicable):





                                  """""""_____Important____"""""""




5. Explain how you'll interact with you backend team. What are all the things that you'll discuss among yourself before starting any feature to work

Ans:

"Before starting the development of any feature, I make sure to have clear and smooth communication with the backend team to avoid rework or blockers later. Some important points we discuss are:"

🔍 1. API Endpoints:
What APIs will be provided by the backend?
What is the exact endpoint URL, method (GET, POST, etc.)?

🔍 2. Request & Response Structure:
What will be the expected request body or parameters (if any)?
What will the backend return? (The exact JSON response structure — keys, data types, nested objects, etc.)
What happens in error scenarios — how is the error object returned (status codes, error message format)?

🔍 3. Pagination / Filtering / Sorting (if applicable):
If handling large data (like customer lists), we discuss:
Will pagination be provided from backend (limit, offset)?
Will filters or search parameters be handled on server side or client side?

🔍 4. API Readiness & Timelines:
When will the backend team deliver the APIs?
Are there mock APIs or dummy data available for us to start UI development early?

🔍 5. Dependencies or Constraints:
Any authorization or token handling required in API headers?
Any special conditions or business logic I should know before consuming the API?

🔍 6. Error Handling & Status Codes:
What will be the standard HTTP status codes (200, 400, 500, etc.) the backend will follow?
Any special handling for timeout, server failure, or no data cases?

✅ Final confident line:
"By discussing these key points early with the backend team, we avoid confusion, make API integration smoother, and ensure frontend development moves in sync with backend delivery."

✅ Why this is safe?
✔️ Shows you understand API-based development.
✔️ No technical over-claiming — realistic to your project (dashboard, Axios).
✔️ Also shows you care about team communication and project clarity.






6. What kind of work you've done when you're in nodeJS team


Actually, my exposure to Node.js and Express has been very basic. I’ve gone through setting up simple servers, creating basic REST API endpoints, and understanding how routing works. I’ve also learned how to handle simple GET and POST requests and connect to APIs from the frontend. But I haven’t been deeply involved in full-fledged backend development or production-level Node.js tasks yet — my main focus so far has been on frontend development. However, I’m interested in exploring more backend concepts when needed.


Handson:

  const express = require('express');
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON
  app.use(express.json()); // ✅ It allows your Express app to read and handle JSON data from the request body. if not given, then req body will be undefined

  // Basic GET endpoint
  app.get('/', (req, res) => {
    res.send('Hello, this is a basic GET API!');
  });

  // Basic POST endpoint
  app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Received data: ${JSON.stringify(data)}`);
  });

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });




  

  MY WORK:  --> 
  
  - just that for debugging, they had asked me to console log few post methods for there future requirements.
  - used express methods like app.get, app.get, app.post middlewares
  - app.listen --> Start the server








*/