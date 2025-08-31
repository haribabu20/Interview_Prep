
1) javascript question

how to change the salary in dev from 11000 t0 12000 in JS ?
  ==> [{ "Test":{ "salary": 10000, }, "Dev":{ "salary": 11000, } }]


Ans: 

data = [{
    "Test": {
        "salary": 10000,
    },
    "Dev": {
        "salary": 11000,
    }
}]

# Update Dev's salary
data[0]["Dev"]["salary"] = 12000

print(data)






2) Types of Error in JS


  1) Syntax Error
  2) Reference Error
  3) Type Error
  4) Range Error
  5) URI Error
  6) Eval Error
  7) Aggregate Error
  8) Internal Error
  9) Network Error
  10) Security Error




3) which are all the scope chain available in JS

  1) Global scope
  2) Function scope
  3) Block scope
  4) Lexical scope





4) differnent ways to create an object in JS


1) object literal

ex:
    const obj = {
      name: "John",
      age: 30,
    };


2) constructor function

ex:
    function Mail(value){
        this.value = value
    }
    const a = new Mail(2);
    console.log(a.value) // 2


3) using new keyword

ex:
    const obj = new Object();
    obj.name = "John";
    obj.age = 30;
    console.log(obj); // { name: "John", age: 30 }


4) using ES6 class

ex:
    class Mail {
      constructor(value){
        this.value = value
      }
    }

    const ob = new Mail('hello');
    console.log(ob.value) // hello


5) using Object.create()

ex:
    let obj = {name: "John"};
    let newObj = Object.create(obj);
    console.log(newObj.name); // John






React JS


1) Folders in react js project

  1) public
  2) src
  3) node_modules
  4) package.json
  5) package-lock.json
  6) .gitignore
  7) README.md
  8) .env



2) what is npm and yarn

  npm (Node Package Manager) is a package manager for JavaScript, primarily used for managing packages and dependencies in Node.js applications. It allows developers to install, update, and manage libraries and tools needed for their projects.

  yarn is an alternative package manager to npm. It was developed by Facebook to address some of the shortcomings of npm, such as speed and reliability. Yarn caches every package it downloads, so it never needs to download the same package again. It also has a lock file that ensures consistent installs across different environments.




3) React is a single way data binding. Why ?

  React is a single-way data binding framework, meaning that data flows in one direction, from parent components to child components. This unidirectional flow makes it easier to understand how data changes in the application and helps maintain a predictable state. When data changes in a parent component, it can pass the updated data down to its children through props, ensuring that the UI reflects the current state of the application. This approach simplifies debugging and enhances performance by minimizing unnecessary re-renders.



4) CSR and SSR

  CSR (Client-Side Rendering) and SSR (Server-Side Rendering) are two different approaches to rendering web applications.

  CSR (Client-Side Rendering):
  - In CSR, the rendering of web pages is done on the client side (browser) using JavaScript.

  SSR (Server-Side Rendering):
  - In SSR, the rendering of web pages is done on the server side before sending the HTML to the client.




5) What is the difference between undeclared and undefined variables


  - Undeclared variables are those that have not been declared in the current scope. If you try to access an undeclared variable, JavaScript will throw a ReferenceError.
  Ex;
      console.log(a); // ❌ ReferenceError: a is not defined


  - Undefined variables are those that have been declared but have not been assigned a value. If you access an undefined variable, it will return undefined without throwing an error.    
  Ex;
      let b;
      console.log(b); // ✅ undefined




6) Functional components came in which version of react

  16.8  (with the introduction of Hooks)
  
  Functional components were already available in earlier versions of React, but the introduction of Hooks in version 16.8 allowed functional components to manage state and side effects, making them more powerful and capable of handling complex logic previously reserved for class components.


Note: 
  1. ES6 and react versions are different things. ES6 is a version of JavaScript. 
  2. React has the version 16.8 where the most of the features were introduced.



7) Es6 features

  1) let and const
  2) Arrow functions
  3) Template literals
  4) Destructuring assignment
  5) Default parameters
  6) Rest and spread operators
  7) Classes
  8) Modules
  9) Promises
  10) Async/await
  11) Enhanced object literals
  12) Map, Set, WeakMap, WeakSet
  13) for...of loop



8) Stateless and Stateful components and why do they cal l stateless and stateful

  - Stateless components are components that do not manage or hold any state. They are typically functional components that receive data through props and render UI based on that data. They are called "stateless" because they do not have their own internal state.

  - Stateful components are components that manage their own state. They can be class components or functional components with hooks (like useState). They are called "stateful" because they have the ability to hold and manage data that can change over time, affecting the component's rendering and behavior.



9) In functional component, how you'll unmount the component

In a functional component, you handle component unmounting using the useEffect hook by returning a cleanup function.

Ex:
useEffect(() => {
  const timer = setInterval(() => console.log("Running..."), 1000);

  return () => {            // unmounting the component
    clearInterval(timer);   // Cleanup function to clear the timer
    console.log("Component unmounted / Timer cleared");
  };
}, []);



10) similarities between useReducer and useState


11) Code splitting in React


Code splitting is an optimization technique in React used to improve application performance by reducing the size of the JavaScript bundle loaded initially. Instead of loading the entire app's code at once (e.g., via a single bundle.js file created by Webpack), the code is split into smaller chunks, which are loaded on demand.

This is typically achieved using React’s lazy() function and Suspense component, which allow you to load components only when they're needed (also known as lazy loading).

This approach improves performance, especially for large applications, by reducing the initial load time and improving perceived speed.





HTML:


1) various formatting tags in HTML

  1) <b> - Bold text
  2) <i> - Italic text
  3) <u> - Underlined text
  4) <strong> - Important text (bold)
  5) <em> - Emphasized text (italic)
  6) <mark> - Highlighted text
  7) <small> - Smaller text


2) Different CSS Styling methods and their priority

  1) Inline CSS
  2) Internal CSS
  3) External CSS
  4) CSS Modules

  priority:
  1) Inline CSS (highest priority)
  2) Internal CSS
  3) External CSS


3) span and div difference
  - <span> is an inline element used to group inline elements and apply styles without breaking the flow of text.
  - <div> is a block-level element used to group block elements and create sections in a document, typically causing a line break before and after it.
  - <span> is used for small sections of text, while <div> is used for larger sections or containers.
  - <span> does not create a new line, while <div> does.



4) What is the difference between HTML and XHTML
  - HTML (HyperText Markup Language) is the standard markup language for creating web pages. It is more lenient with syntax rules and allows for some flexibility in how elements are structured.
  - XHTML (eXtensible HyperText Markup Language) is a stricter version of HTML that follows XML syntax rules. It requires all elements to be properly nested, closed, and lowercase. XHTML is designed to be more consistent and compatible with XML-based applications.
  - In summary, XHTML is a stricter and more standardized version of HTML, while HTML is more flexible and forgiving in terms of syntax.


  


















