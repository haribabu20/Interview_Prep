
/*
Javascript

//1
console.log(1+'1'+1) // 111


//2
console.log(1+1-'1') // 1


//3
let x={}, y={name:'satish'}, z={name:'prathik'};
x[y]={name:'Salman'};
x[z]={name:'shahrukh'};
console.log(x[y]);      // { name: 'shahrukh' }

// Explanation:

In JavaScript: 
* You are using objects (y and z) as keys in another object (x)
* Objects can’t be real keys in {} — they get converted to a string: "[object Object]"

So the code becomes like this inside:
x["[object Object]"] = { name: 'Salman' };   // first line
x["[object Object]"] = { name: 'shahrukh' }; // second line (OVERWRITES first)

console.log(x[y]);  // becomes x["[object Object]"]
{ name: 'shahrukh' }

Tip: In JS, if a object's key is an object, then implicitly JS converts the object as string. 


//4
console.log(NaN===NaN); // false
console.log(NaN==NaN); // false
console.log('a'-1) //NaN


//5
console.log(1>2<3); // true

1 > 2 < 3   →   false < 3   →   0 < 3   →   true
1 < 2 < 1   →   true < 1    →   1 < 1   →   false


//6
Function currying


//7
what is HOF, how you implemented that.


//8
Destructuring


//9
[x,y,...restof] = [10,20,30,40,50]
console.log(restof); // [ 30, 40, 50 ]


//10
Alternate option for ternary operator ?

  - if else
  - logical AND, OR --> [&& and !!]




// 11 ---> interesting qn
(i)
for(var i=0; i<3;i++){
  setTimeout(()=>console.log(i),2000);
}
output: 3 3 3

(ii)
for(let i=0; i<3;i++){
  setTimeout(()=>console.log(i),2000);
}
  output: 0 1 2

Explanation:

var is functional scope and let, const is blocked scope
- when we use var, each value on there iteration will get overriden. so at last we'll be having the value for 1 as 3. now it will print 3 for 3times.
- when let and const is used, on its iteration for 3 times, the values will be changing. hence we get 0 1 2 as output



// 12
let a=4, b=8;
[b,a] = [a,b]
console.log(a, b) // 8 4 --> concept behind this is array destructuring


// 13 
String reversal
  - with and without inbuilt methods
  - what is split, reverse and join methods are used as ?
  - split() - converts from string to array
  - reverse() - used to reverse the array of element
  - join() - converts array to string



// 14
How you'll merge 2 arrays ? 
  - concat()


// 15
what is Babel


// 16
what is undeclare and undefined


// 17
Hoisting


// 18
Promise


// 19
Event capturing, bubbling and delegation.


// 20
lexical scope in javascript

Scope: 
      Scope is the area in your code where a variable can be seen or used.

      Scope = the actual space (area) where a variable exists
Ex:
function myRoom() {
  let pen = "blue pen";  // This variable has function scope

  console.log(pen);  // ✅ This works
}
console.log(pen);  // ❌ Error: pen is not defined (outside the scope)

Lexical Scope:
      Lexical scope is a behavior in JavaScript where an inner function has access to the variables of its outer function.

      Lexical scope = the rule that creates that space based on where things are written in the code
Ex:
function outer() {
  let name = "John";

  function inner() {
    console.log(name); // ✅ Can use 'name' — this is lexical scope
  }

  inner();
}


This lexical scope resembles the concept of closure. have a look at the handson JS in notes.




// 21 Difference between first order and higher order function:



// 22  Array methods you used in your project


// 23 Splice and slice


// 24
 setTimeout and setInterval

 How to stop these 2 items ?

 Ans:

const id = setTimeout(() => console.log("Will not run"), 3000);
clearTimeout(id);

const id = setInterval(() => console.log("Never-ending"), 1000);
clearInterval(id); // Stops it


// 25
If a Promise and a setTimeout are in your code, which one runs first?
Ans:
  Promise has higher priority than setTimeout
  because Promises go to the microtask queue, and
  setTimeout goes to the macrotask queue.


// 26
Event Loop:
  The Event Loop is the system in JavaScript that manages the order in which your code runs — especially asynchronous code like setTimeout, Promises, and event handlers.

  The Event Loop checks:
  Is the call stack empty?
  If yes, pull from the microtask queue first.
  If no microtasks, then pull from the macrotask queue.


// 27
Shallow copy and deep copy

  - shallow copy: 
    - shallow copy is a bitwise copy of an object. 
    - It means that the new object created is a copy of the original object, but it only copies the "reference" to the nested objects.
    - So if you change the nested object in the copied object, it will also change in the original object.

    example:
    const obj1 = { a: 1, b: { c: 2 } }; 
    const obj2 = { ...obj1 }; // shallow copy
    obj2.b.c = 3; // change the nested object in the copied object
    console.log(obj1.b.c); // 3 (original object is also changed)

    - The Object.assign() method is a common way to create a shallow copy of an object in JavaScript.
    - The spread operator (...) is another way to create a shallow copy of an object in JavaScript.


  - deep copy:
    - deep copy is a bitwise copy of an object. 
    - It means that the new object created is a copy of the original object, and it also copies all the nested objects.
    - So if you change the nested object in the copied object, it will not change in the original object.

    exmple:
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = JSON.parse(JSON.stringify(obj1)); // deep copy
    obj2.b.c = 3; // change the nested object in the copied object
    console.log(obj1.b.c); // 2 (original object is not changed)

    - The JSON.parse(JSON.stringify()) method is a common way to create a deep copy of an object in JavaScript.



React JS:

28)
What are all the main files you have in your project ?

ans
  - package.json
  - package-lock.json
  - node_modules
  - public
  - src
  - .gitignore
  - README.md
  - .env
  - .babelrc
  - .eslintrc.js
  - .prettierrc.js
  - .git

  

29)
what is npm and yarn
  - npm is a package manager for JavaScript and Node.js. It allows you to install, share, and manage packages (libraries) that you can use in your projects.
  - yarn is an alternative to npm. It is also a package manager for JavaScript and Node.js. It was created by Facebook to address some of the shortcomings of npm, such as speed and security.



30) Role of app.js file in react

  - The app.js file is the main component of a React application. It is the entry point of the application and is responsible for rendering the main component tree.
  - It is usually located in the src folder of a React application.
  - The app.js file typically contains the main component of the application, which is usually called App. This component is responsible for rendering the other components of the application.
  - The app.js file also contains the main logic of the application, such as routing, state management, and event handling.
  - The app.js file is usually the first file that is loaded when the application is started. It is also the file that is used to render the application in the browser.



31) 
Stateless and Stateful components

  - Stateless components are components that do not have any state. They are also called functional components. They are usually used to render UI elements and do not have any logic.

  - Stateful components are components that have state. They are also called class components. They are usually used to manage the state of the application and have logic to handle events and update the state.


32)
Role of Super keyword in constructors

In a derived class (i.e., a class that uses extends), you must call super() in the constructor before using this.
It calls the constructor of the parent class, allowing the child class to inherit properties and behavior.

  When we create any class component, we actually extend the react component class. Here the "Component" is the parent class and our class is the child class. 
  So, we need to call the constructor of the parent class using super() before using this keyword in the constructor of the child class.
  why this is needed is because the parent class constructor initializes the component and sets up the state and props.




33) 
UseState Hook synchronise or asynchronous ?

  - useState is asynchronous.
  - When you call setState, React schedules a re-render of the component with the new state value.
  - The state update does not happen immediately, but rather at a later point in time when React has finished processing the current render.
  - This is why you cannot rely on the updated state value immediately after calling setState. Instead, you should use the updated state value in the next render or use the functional form of setState to get the latest state value.




34)
What is useEffect and how it works ?

  - useEffect is a React Hook that allows you to perform side effects in your functional components.
  - It is called after the component has rendered and can be used to perform tasks such as data fetching, subscriptions, or manually changing the DOM.
  - useEffect takes two arguments: a function that contains the side effect code and an optional array of dependencies.
  - The function will run after every render by default, but you can control when it runs by providing the dependencies array.
  - If you provide an empty array, the effect will only run once when the component mounts. If you provide an array with values, the effect will run whenever any of those values change.
  - You can also return a cleanup function from the effect function, which will run when the component unmounts or before the effect runs again.




35) 
similarities and differences between useState and useReducer hook

  - similarities:
    - Both are used to manage state in functional components.
    - Both can be used to update the state based on the previous state.
    - Both can be used to manage complex state logic.

  - differences:

    - useState is used for simple state management, while useReducer is used for complex state management.
    - useState is a simpler API, while useReducer is a more powerful API.
    - useState is easier to use, while useReducer is more flexible and can handle more complex state logic.
    - useState is used for local state management, while useReducer is used for global state management.




36) How do you handle input fields in controlled and uncontrolled forms in react ?

  - Controlled forms: 
  
  In controlled forms, the form elements are controlled by React. The value of the form elements is stored in the component's state, and the onChange event is used to update the state. This allows you to have full control over the form elements and their values.

  - Uncontrolled forms:

  In uncontrolled forms, the form elements are not controlled by React. The value of the form elements is stored in the DOM, and you can access the values using refs. This allows you to have less control over the form elements and their values, but it can be easier to work with in some cases.
  - Controlled forms are usually preferred in React because they provide better control over the form elements and their values. However, uncontrolled forms can be useful in some cases where you need to work with third-party libraries or when you want to avoid unnecessary re-renders.




37) How do you implement routing in react ?

  - React Router is a popular library for implementing routing in React applications. It allows you to create single-page applications with multiple views and navigation between them.
  - React Router uses a declarative approach to routing, which means you define the routes in your components using JSX.

  React Router DOM is the library that provides the routing functionality for web applications. It is built on top of React Router and provides additional features for web applications, such as browser history and navigation.


38) Role of index.html page in react

  - The index.html file is the main HTML file of a React application. It is the entry point of the application and is responsible for rendering the React application in the browser.
  - The index.html file usually contains a div element with an id of root, which is where the React application will be rendered.
  - The index.html file also contains the meta tags, title, and links to the CSS and JavaScript files that are needed for the application.
  - The index.html file is usually located in the public folder of a React application.
  - The index.html file is the only HTML file in a React application, and all the other components are rendered inside it.
  - The index.html file is usually the first file that is loaded when the application is started. It is also the file that is used to render the application in the browser.

  "Since we have only one index.html file, we can say that react is a single page application (SPA)."




39) Which file will act as the entry point for your react application ?

  - The index.js file is the entry point of a React application. It is responsible for rendering the main component of the application, which is usually called App.
  - The index.js file is usually located in the src folder of a React application.
  - The index.js file usually contains the ReactDOM.render() method, which is used to render the main component of the application in the index.html file.

  
  
  
40) Then how about index.html file, is it different from index.js file ?

Analogies:

 - index.html is the structure of the house, where you can see the    walls, roof, and windows. It is the skeleton of your application.

 - index.js is the crew that moves in furniture and decorates the house. It is the code that loads your React app into the index.html file and makes it functional.




41) What is the role of package.json and package-lock.json file in react ?

package.json:

  - The package.json file is a JSON file that contains metadata about the project, such as the project name, version, description, author, license, and dependencies.
  - It is used by npm to manage the project's dependencies and scripts.


package-lock.json:

  - The package-lock.json file is a JSON file that contains the exact version of each dependency and its dependencies that were installed when the project was created or last updated.
  - It is used by npm to ensure that the same versions of the dependencies are installed when the project is installed on a different machine or environment.



42) What is the role of node_modules folder in react ?

  - The node_modules folder is a folder that contains all the dependencies and their dependencies that are needed for the project to run.
  - It is created when you run npm install or yarn install command.
  - The node_modules folder is usually located in the root folder of the project.
  - The node_modules folder contains all the packages that are listed in the package.json file, as well as their dependencies.
  - The node_modules folder is not included in the version control system (such as Git) because it can be easily recreated by running npm install or yarn install command.
  - The node_modules folder can be very large, so it is usually ignored in the version control system by adding it to the .gitignore file.
  - The node_modules folder is where all the packages are installed when you run npm install or yarn install command.




43) What is the role of public folder in react ?

  - The public folder is a folder that contains the static files that are needed for the project to run.
  - It is usually located in the root folder of the project.
  - The public folder contains the index.html file, which is the main HTML file of the React application.
  - The public folder can also contain other static files, such as images, fonts, and CSS files.
  - The public folder is used to serve the static files to the browser when the application is running.
  - The public folder is not included in the version control system (such as Git) because it can be easily recreated by running npm run build command.



44) What is the role of .gitignore file in react ?

  - The .gitignore file is a file that contains a list of files and folders that should be ignored by the version control system (such as Git).
  - It is usually located in the root folder of the project.



45) What is the role of .env file in react ?
  - The .env file is a file that contains environment variables that are needed for the project to run.
  - It is usually located in the root folder of the project.
  - The .env file can contain sensitive information, such as API keys, database connection strings, and other configuration settings.
  - The .env file is not included in the version control system (such as Git) because it can contain sensitive information.
  - The .env file is used to store environment variables that are needed for the project to run in different environments (such as development, testing, and production).




46) what do we have inside the .env file and how many env files you have in your project ?

The .env file is used to store environment variables — configuration values that can change based on the environment (development, staging, production).

What’s inside .env?
  Keys like REACT_APP_API_URL, Firebase keys, tokens, feature flags, etc.
How many .env files?
  Usually 2–4: .env, .env.development, .env.production, and optionally .env.test.
Important Rule:
  CRA requires all keys to start with REACT_APP_ or they won’t be exposed to your app.


  File Name	      Purpose
.env	            Default environment variables
.env.development	For local development
.env.production	  For production build (e.g., live site)
.env.test	        For running tests



  
47) What is the role of .babelrc file in react ?

  - The .babelrc file is a configuration file for Babel, which is a JavaScript compiler that is used to convert modern JavaScript code into a version that is compatible with older browsers.
  - It is usually located in the root folder of the project.
  - The .babelrc file is not included in the version control system (such as Git) because it can be easily recreated by running npm install or yarn install command.



48) What is the role of .eslintrc.js file in react ?
  - The .eslintrc.js file is a configuration file for ESLint, which is a JavaScript linter that is used to identify and fix problems in JavaScript code.
  - It is usually located in the root folder of the project.
  - The .eslintrc.js file is not included in the version control system (such as Git) because it can be easily recreated by running npm install or yarn install command.
  - The .eslintrc.js file is used to configure the rules and settings for ESLint, such as the environment, parser, and plugins.




49) what is code splitting and how you implemented that in your project ?

"In my project, I implemented code splitting using React.lazy() and Suspense to load heavy components like the dashboard or admin pages only when the user navigates to them. This reduced the initial bundle size and improved load times, especially for first-time visitors."

Concept	            Explanation
Code Splitting	    Breaking JS into smaller chunks
Benefits	          Faster initial load, better performance
Tools Used	        React.lazy(), Suspense, Webpack
Real Usage	        Lazy load routes, modals, or big components

Ex:
// 👇 Lazy-loaded component
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}


NOTE: If we use lazy loading, then webpack by default will splits the code into smaller chunks.




50) What are the ways to optimize the performance of your react application ?


  - Code Splitting: Use React.lazy() and Suspense to load components only when needed.
  - Memoization: Use React.memo() and useMemo() to prevent unnecessary re-renders of components.
  - Virtualization: Use libraries like react-window or react-virtualized to render only the visible portion of large lists.
  - Image Optimization: Use responsive images and lazy loading for images to reduce load times.
  - Bundle Size: Use tools like "Webpack Bundle Analyzer" to identify and reduce the size of your bundles.
  - Avoid Inline Functions: Use useCallback() to memoize functions passed as props to prevent re-renders.
  - Use PureComponent: Use React.PureComponent for class components to prevent unnecessary re-renders.
  - Optimize Context: Use React's Context API wisely to avoid unnecessary re-renders of components that consume context.
  - Use Production Build: Always use the production build of React for better performance.
  - Avoid Unnecessary State: Keep the state as minimal as possible to reduce re-renders.



51) Fetch and Axios

  - Fetch is a built-in JavaScript API for making network requests. It returns a Promise and is more modern than XMLHttpRequest.

  - Axios is a third-party library for making HTTP requests. It has a simpler API, supports older browsers, and has built-in features like interceptors and automatic JSON parsing.




52) What is API and server ?

  - API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other. It defines the methods and data formats that applications can use to request and exchange information.

  - Server is a computer or system that provides resources, data, services, or programs to other computers, known as clients, over a network. It processes requests from clients and sends back the requested data or services.

  - Example:
    - API: A restaurant menu is like an API. It lists the dishes you can order and how to order them.
    - Server: The kitchen is like a server. It prepares the food you ordered based on the menu (API) and serves it to you.


  - Analogy:
    - The API is the interface or door.
    - The server is the building behind the door that gives you what you asked for.



  53) What is the difference between REST and GraphQL ?

  - REST (Representational State Transfer) is an architectural style for designing networked applications. It uses standard HTTP methods (GET, POST, PUT, DELETE) and is based on resources (URLs). Each resource has its own endpoint, and the server defines the structure of the response.

  - GraphQL is a query language for APIs and a runtime for executing those queries. It allows clients to request only the data they need, and the server responds with exactly that data. It uses a single endpoint and allows clients to define the structure of the response.




54) Virtual Dom and React DOM

  - Virtual DOM is a lightweight copy of the actual DOM. It is a JavaScript representation of the UI that React uses to optimize rendering. When the state of a component changes, React updates the Virtual DOM first, then compares it with the actual DOM (a process called reconciliation) to determine the minimal set of changes needed to update the UI.

  - React DOM is the actual DOM that is rendered in the browser. It is the bridge between React and the browser's DOM. React DOM updates the actual DOM based on the changes made to the Virtual DOM.

  - Analogy:  
    - Virtual DOM is like a blueprint of a house. You can make changes to the blueprint without affecting the actual house.
    - React DOM is the actual house that you live in. When you make changes to the blueprint (Virtual DOM), you only change the parts of the house (React DOM) that need to be updated.

  1. Reconciliation

      Reconciliation is the process React uses to update the DOM when something changes in your app.
      React compares the new Virtual DOM with the previous one, figures out the difference, and efficiently updates only the changed parts.

      🧠 Think of it like:
      “What’s changed? Only update that part.”


  2. Diffing Algorithm

      Diffing is the algorithm React uses during reconciliation to compare the old and new Virtual DOM trees and find the differences.

    🧠 Think of it like:
    “Spot the difference between two versions of the UI.”




55) How can you dynamically load CSS files using code splitting in react ?

When you build a React app, all your JavaScript and CSS files are bundled together into a few large files.

But in a big app, loading everything at once is slow.
So we use code splitting, which means:

"Only load the part of the app (code and styles) that is needed right now."
React does this mainly for JavaScript, but it can also apply to CSS — if done correctly.


🧠 How Does React Load CSS Dynamically?
React itself doesn’t directly manage CSS splitting. Instead, the build tool you're using (like Webpack, Vite, or Create React App) helps with this.

Here’s how it works under the hood:
You use React.lazy() to load a component only when needed.
Inside that component, you import './ComponentStyle.css'.
Webpack sees that the CSS is only used by that component.
So Webpack creates a separate CSS file just for that component.
When the component is shown (rendered), its CSS file is automatically loaded too.












HTML and CSS



56) Multipart/form-data in html ?

multipart/form-data is a special enctype (encoding type) used in HTML forms when you need to upload files (like images, PDFs, etc.) from the browser to the server.

It allows you to send files and data together in a single request.
You use multipart/form-data when:
  You're sending binary data, like images or videos.
  You're submitting a form with <input type="file">.
If you don’t set this enctype, file uploads will not work properly.

Ex:
<form action="/upload" method="POST" enctype="multipart/form-data">
  <input type="text" name="username" />
  <input type="file" name="profileImage" />
  <button type="submit">Upload</button>
</form>





57) cellpadding and cellspacing in html

space between the cell content and cell border is cell padding
space between the cells is cell spacing

Detailed explanation is given in notes




58) What is the difference between HTML and XHTML ?

  - HTML (HyperText Markup Language) is the standard markup language for creating web pages. It is less strict in terms of syntax and allows for some flexibility in how elements are written.  

  - XHTML (eXtensible HyperText Markup Language) is a stricter version of HTML that follows XML syntax rules. It requires all elements to be properly nested, closed, and in lowercase. XHTML is more strict about syntax and requires a DOCTYPE declaration.




  
59) Microstorage in html [local and session storage]

  - Microstorage is a way to store small amounts of data in the browser using the Web Storage API. It includes two main types:

    - localStorage: Stores data with no expiration time. Data persists even after the browser is closed.
    - sessionStorage: Stores data for the duration of the page session. Data is cleared when the page session ends (e.g., when the tab is closed).
    - Both localStorage and sessionStorage store data as key-value pairs and can be accessed using JavaScript.

  - Example:
    // Store data
    localStorage.setItem('username', 'JohnDoe');
    sessionStorage.setItem('sessionID', '12345');

    // Retrieve data
    const username = localStorage.getItem('username');
    const sessionID = sessionStorage.getItem('sessionID');

    // Remove data
    localStorage.removeItem('username');
    sessionStorage.removeItem('sessionID');





60) what are web workers and how they are used in html ?

A Web Worker is a feature in HTML5 that allows you to run JavaScript in a background thread, separate from the main UI thread.

✅ This means: heavy JavaScript tasks (like data processing, API parsing, etc.) won’t freeze or slow down the user interface.

Normally, JavaScript runs on a single thread — so if a task takes too long:

  The UI becomes unresponsive.
  Buttons don't click.
  Animations freeze.

🔧 Web Workers fix this by doing work in the background.




61) How can we merge 2 or more columns or rows in a table in html ?

  - To merge two or more columns in a table, you can use the colspan attribute in the <td> or <th> element.

  - To merge two or more rows in a table, you can use the rowspan attribute in the <td> or <th> element.




62) Use of head and body tag in HTML

  - The <head> tag contains meta-information about the document, such as the title, character set, stylesheets, and scripts. It is not displayed in the browser.

  - The <body> tag contains the content of the document, such as text, images, and other elements. It is displayed in the browser.




63) Nesting of web pages in HTML ? --> <iframe>

  - Nesting of web pages in HTML refers to the practice of embedding one HTML document within another using the <iframe> tag. This allows you to display content from another page or website within your own page.

  - Example:

<iframe src="https://www.example.com" width="600" height="400"></iframe>




64) In how many ways you can display html elements in a web page ?

  - Block elements: These elements take up the full width available and start on a new line. Examples include <div>, <p>, <h1> to <h6>, <ul>, and <ol>.

  - Inline elements: These elements take up only as much width as necessary and do not start on a new line. Examples include <span>, <a>, <img>, and <strong>.  

  - Inline-block elements: These elements are similar to inline elements but can have width and height set. Examples include <img> and <button>.  

  - Flexbox: A layout model that allows you to create flexible and responsive layouts using the CSS flex property.  

  - Grid: A layout model that allows you to create complex layouts using rows and columns. It uses the CSS grid property. 

  - CSS positioning: You can use CSS properties like position: absolute, position: relative, and position: fixed to control the placement of elements on the page.  followup question for this positioning is:
  In how many ways you can position an element in a web page ?




65) What is Marquee tag in HTML ?

  - The <marquee> tag is an HTML element that creates a scrolling text or image effect on a web page. It allows you to display content that moves horizontally or vertically across the screen.

  - Example:
<marquee behavior="scroll" direction="left">This is a scrolling text!</marquee>

  - Note: The <marquee> tag is deprecated in HTML5 and is not recommended for use in modern web development. Instead, you can achieve similar effects using CSS animations or JavaScript.



66) What are empty elements in HTML ?

  - Empty elements (or void elements) are HTML elements that do not have any content or closing tags. They are self-closing and do not require a separate closing tag.

  - Examples of empty elements include <br>, <img>, <hr>, <input>, and <meta>.



67) Explain the Layout of HTML page

  - The layout of an HTML page typically consists of the following sections:

  DOCTYPE: Declares the document type and version of HTML being used.
  - Head: Contains meta-information about the document, such as the title, character set, and links to stylesheets and scripts.
  - Body: Contains the main content of the page, such as text, images, and other elements.



  - Header: Contains the title, logo, and navigation links.
  - Main Content: Contains the main content of the page, such as text, images, and other elements.
  - Sidebar: Contains additional information or links related to the main content.
  - Footer: Contains copyright information, links to privacy policy, and other important links.


68) Different Techniques to create multicolumn layout in HTML

  - CSS Flexbox: Use the display: flex property to create a flexible layout that can adapt to different screen sizes.

  - CSS Grid: Use the display: grid property to create a grid layout with rows and columns.

  - CSS Float: Use the float property to create a multi-column layout by floating elements to the left or right.  

  - CSS Table: Use the display: table property to create a table-like layout with rows and columns.



69) What is the difference between flex and grid layout in HTML ?

  - Flexbox is a one-dimensional layout model that allows you to create flexible layouts in a single direction (row or column). It is best suited for simple layouts and aligning items within a container.

  - Grid is a two-dimensional layout model that allows you to create complex layouts with rows and columns. It is best suited for more complex layouts and allows for greater control over the placement of items within a grid.




CSS




70) Specificity in CSS

  - Specificity is a way to determine which CSS rule will be applied when multiple rules match the same element. It is calculated based on the types of selectors used in the rule.

  - The specificity hierarchy is as follows:

  - Inline styles (e.g., style="color: red;") have the highest specificity.

  - ID selectors (e.g., #myId) have a higher specificity than class selectors.

  - Class selectors (e.g., .myClass) have a higher specificity than attribute selectors (e.g., [type="text"]).

  - Attribute selectors (e.g., [type="text"]) have a higher specificity than element selectors (e.g., div, p).

  - Element selectors (e.g., div, p) have the lowest specificity.

  - The more specific the selector, the higher its specificity. If two rules have the same specificity, the one that appears last in the CSS file will be applied.




71) What are attribute selectors in CSS ?

  - Attribute selectors are CSS selectors that allow you to select elements based on the presence or value of their attributes. They are used to apply styles to elements that have specific attributes or attribute values.

  - Examples of attribute selectors include:

      input[type="text"] 
      {
        background-color: lightyellow;
      }



72) How can we format a text in CSS ?

  - You can format text in CSS using various properties, such as:

  - font-family: Sets the font of the text.
  - font-size: Sets the size of the text.
  - font-weight: Sets the weight (boldness) of the text.
  - font-style: Sets the style of the text (normal, italic, oblique).
  - text-align: Sets the alignment of the text (left, right, center, justify).
  - text-decoration: Sets the decoration of the text (underline, overline, line-through).
  - text-transform: Sets the case of the text (uppercase, lowercase, capitalize).



  73) CSS border and CSS outline

  The border is part of the element's box model — it takes space and affects layout.

  The outline appears outside the element — it does not shift or size the box.



  74) Gradients in CSS

  - Gradients are smooth transitions between two or more colors. They can be used as backgrounds, borders, or other visual effects in CSS.
  - There are two main types of gradients in CSS:
  - Linear gradients: Transition colors in a straight line (horizontal, vertical, or diagonal).
  - Radial gradients: Transition colors in a circular or elliptical shape.
  - Example of a linear gradient:
    background: linear-gradient(to right, red, yellow);
  - Example of a radial gradient:
    background: radial-gradient(circle, red, yellow);


75) CSS pseudo classes and pseudo elements

  - Pseudo-classes are used to style elements based on their state or position in the document tree. They are defined with a colon (:) before the class name.
  - Examples of pseudo-classes include :hover, :active, :focus, :nth-child(), and :first-child.

  - Pseudo-elements are used to style specific parts of an element. They are defined with a double colon (::) before the element name.
  - Examples of pseudo-elements include ::before, ::after, ::first-letter, and ::first-line.  




76) How can we overlap elements in CSS ?

  - You can overlap elements in CSS using the position property. By setting the position of an element to absolute, relative, or fixed, you can control its placement on the page and overlap it with other elements.



77) what is z-index in CSS ?

  - The z-index property in CSS controls the stacking order of overlapping elements. It determines which element appears on top when elements overlap.
  - Elements with a higher z-index value will appear on top of elements with a lower z-index value.
  - The z-index property only works on positioned elements (elements with position: absolute, relative, or fixed).



  78)what does the CSS box sizing property does ?

  - The box-sizing property in CSS controls how the width and height of an element are calculated. It determines whether padding and borders are included in the element's total width and height.

  - The two main values for the box-sizing property are:

  - content-box: The default value. The width and height of the element are calculated based on the content only, excluding padding and borders.
  - border-box: The width and height of the element are calculated based on the content, padding, and borders. This makes it easier to size elements without worrying about padding and borders affecting the total size.




  79) How can you calculate the width and height of an element in CSS ?

  - You can calculate the width and height of an element in CSS using the calc() function. The calc() function allows you to perform calculations to determine the size of an element.
  - Example:
    width: calc(100% - 20px);
    height: calc(50vh - 10px);
  - This example sets the width to 100% of the parent element minus 20 pixels and the height to 50% of the viewport height minus 10 pixels.
  - You can also use the box-sizing property to control how the width and height are calculated, as mentioned in the previous question.



  80) CSS counter

  - CSS counters are a way to keep track of how many times an element appears in the document. They can be used to create numbered lists, headings, or any other type of content that requires numbering.


  81) What are keyframes in CSS ?

  - Keyframes are a way to create animations in CSS. They define the start and end points of an animation, as well as any intermediate points.
  - Keyframes are defined using the @keyframes rule, and they allow you to specify the styles at different points in the animation.



  















*/





