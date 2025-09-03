


handson to practise:

1. 

'let str='This is simple string' 

output: 
  This 
  is
  simple 
  string'


2. ['a', 'b', 'c', 'd', 'e', 'a',]
Find the max occuring character in the string and print the character and its count.






1. Difference between null, undefined and NaN






1. What is the output of the following code?

let x = {name: 'John', age: 30, city: 'New York'};
let y = {name: 'John', age: 30, city: 'New York'};
console.log(x === y); // false



2. ways to compare the two objects

// 1. JSON.stringify --> proficient way to compare objects

let x = { name: 'John', age: 30, city: 'New York' };
let y = { name: 'John', age: 30, city: 'New York' };
const areEqual = JSON.stringify(x) === JSON.stringify(y);
console.log(areEqual); // true

"JSON.stringify() converts the object into a JSON string, which can be compared directly. However, this method has limitations, such as not handling functions or undefined values."



3. Hoisting


4. promise or setInterval and setTimeout which execute first ?


5. what is this in JS?

    Interview point of view:

      this keyword —> The value of this in javascript relies on how the function is called.

    1. if a function is called without object, then value of this will be a ‘global object’ in non strict mode and ‘undefined’ in strict mode.
    2. If a function is called inside object then this value refers to object.
    3. Arrow function won’t have there own this. instead, they inherit the value of this from its lexical scope.
    4. In constructor, this refers to the new object created. That is, when funciton is called using new keyword, then this value will be the newly created object. basically we are refering to the constructor function.
    5. this in event handler for normal function refers to the element which is declared.
    6. this in event handler defined using arrow function is undefined.
    7. explicitly we can provde the value for this by using the keyword called call, apply and bind.


    exmaple for call, apply, bind:

      - call() --> values are passed normally as parameter
      - apply() -> values are passed as array in parameter
      - bind() ->  we can allocate it into another variable for later use


    // Example for call, apply, bind


        function greet(message){
            console.log(message, this.name);
        }

        let obj = {name: 'hari'};

        greet.call(obj, 'hello');     // hello hari
        greet.apply(obj, ['hi']);     // hi hari

        const binding = greet.bind(obj, 'vanakam');
        binding();                     // vanakam hari 


        in call, apply, bind, only if we are passing 2 or more parameters, then we need to use [] in apply. else we dont need the [] in apply if we are passing only one parameter, i.e obj. The values after obj shld be passed in as [] in apply. But in call, we can pass the values normally.
      


6. Output of the following code:

    var x;
    x++

    console.log(x);   // NaN
    x=12;
    console.log(x)    // 12

    Explanation:
    - In the first console, x is undefined. So when we do x++, it will be NaN.
    - In the second console, we are assigning x=12. So the output will be 12.
    - If we dont have x++, then output will be undefined in first console.

nan means not a number. It is a special value in javascript which is used to represent a value that is not a legal number.



7. Shalllow and deep copy:



8. output of the following code:

for(let i=0; i<5; i++){
    setTimeout(()=>{
        console.log(i)
    }, 1000)
}

// output: 0 1 2 3 4

for(var i=0; i<5; i++){
    setTimeout(()=>{
        console.log(i)
    }, 1000)
}

// output: 5 5 5 5 5


Explanation:

In the first loop, let is block-scoped, while in the second loop, var is function-scoped. This difference affects how i is captured inside the setTimeout callbacks.

If it is block scope, then for each iteration, "a new instance of i is created. So when the timeout executes after 1 second", it prints the value of i at that time. so it prints 0, 1, 2, 3, 4.

In the second loop, var is function-scoped, meaning that there is "only one instance of i shared across all iterations". By the time the setTimeout callbacks execute after 1 second, the loop has already completed, and i is now 5. So it prints 5 five times.

   - on start of the loop, var i = 0 → JS declares i in function/global scope
   - First iteration, i=0, setTimeout(...) is scheduled to run in 1 second.
   - further iterations, i=1,2,3,4 → setTimeout(...) is scheduled to run in 1 second.
    - After 1 second, Now i = 5, because the loop stops when i < 5 becomes false.
    - so at this time, loop si done and i=5. where it got failed.
    - Now 5 timers are waiting to run in 1 second.
    - i is now 5 — and there's only one i in memory (because var is      function-scoped).

    Each of those 5 scheduled setTimeout() callbacks now runs:
      console.log(i);  // What is i now? 5!
    And they all print 5 because:
    All 5 functions share the same i variable, and by the time they run, i = 5.




9. Scope chain:

The scope chain is how JavaScript looks up variables when you try to access them.
When a variable is used, JavaScript tries to find it in the current scope, and if it doesn't find it, it goes up one level — this process continues until it either finds the variable or reaches the global scope.

Ex:

let a = 'Global';

function outer() {
  let b = 'Outer';

  function inner() {
    let c = 'Inner';
    console.log(a); // 🡲 Looks up to Global → prints "Global"
    console.log(b); // 🡲 Found in outer → prints "Outer"
    console.log(c); // 🡲 Found in inner → prints "Inner"
  }

  inner();
}

outer();

Explanation:

In inner():
    a not found → go to outer → not there → go to global → found → ✅
    b not found → go to outer → found → ✅
    c found in inner → ✅




10 What is recursion?

You break a big problem into smaller versions of the same problem, until you reach a base case (stopping point).

ex: 

// Factorial of a number using recursion

const factorial2 = (n) => {
  if(n===1) return 1;   // Base Case
  return n * factorial2(n-1);
}



11. Different ways to construct an object in JS

    1. Object Literal
    2. Constructor Function
    3. Object.create()
    4. Object.assign()

    Example for Object Literal:

      let person = {
        name: 'John',
        age: 30,
      }

    Example for Constructor Function:

      let userDetails = new Object();
      userDetails.name = 'John';
      userDetails.age = 30;


    Example for Object.create():

      let animal = {
        name: 'Animal name',
      }
      let dog = Object.create(animal);


    Example for Object.assign():
    
      let obj1 = { name: 'John' };
      let obj2 = { age: 30 };
      let mergedObj = Object.assign({}, obj1, obj2);
      console.log(mergedObj); // { name: 'John', age: 30 }

    // Object.assign() is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.



12. 
  console.log(3+2+'7') // 57 --> note it is a number and not in string
  console.log(3+2-'7') // -2 --> note it is a number and not in string



13. 
let str='This is simple string' 

output: 
  This 
  is
  simple 
  string



14)
Using reduce method, mult the value
let arr = [1,2,3,4,5];

let arr = [1,2,3,4,5];
let result = arr.reduce((acc,curr) => acc*curr);
console.log(result) // 120


15) how can you do object and array destructuring in function parameter

Object destructuring in function parameter:

  let obj = {
    name: 'John',
    age: 30,
  }
  const {name, age} = obj;
  console.log(name, age); // John 30


Array destructuring in function parameter:

  const arr = [1, 2, 3];
  [a,b,c] = arr;
  console.log(a, b, c); // 1 2 3



16) push, pop, unshift and shift methiod in array

  - pop() removes the last element from an array and returns that element. This method changes the length of the array.

  - shift() removes the first element from an array and returns that element. This method changes the length of the array.

  - push() adds one or more elements to the end of an array and returns the new length of the array.

  - unshift() adds one or more elements to the beginning of an array and returns the new length of the array.



17) purpose of timers in js

JavaScript timers let you schedule code to run later, either once or repeatedly after a delay.

  - setTimeout() - Executes a function after a specified number of milliseconds.
  - setInterval() - Repeatedly executes a function at specified intervals (in milliseconds).



18) what are the types of pop up boxes available in javascript

  - alert() - Displays a message and an OK button.
  - confirm() - Displays a message and OK and Cancel buttons. Returns true if OK is clicked, false if Cancel is clicked.
  - prompt() - Displays a message and an input field for the user to enter a value.



19) Difference between function declaration and function expression 

  - Function Declaration: A function that is defined using the function keyword followed by the function name. It can be called before it is defined due to hoisting.
  - Normal function declaration is hoisted to the top of the scope, meaning you can call it before it's defined in the code.

  Example:
  function greet() {
    console.log('Hello!');
  }
  greet(); // Hello!

  - Function Expression: A function that is defined as part of a larger expression, such as an assignment to a variable. It cannot be called before it is defined due to hoisting.
  - Function is stored in a variable and is not hoisted, meaning you cannot call it before it's defined in the code.

  Example:
  const greet = function() {
    console.log('Hello!');
  }
  greet(); // Hello!



20) How can you turn a object into an array

  - Object.entries() - Converts an object into an array of key-value pairs.
  - Object.keys() - Converts an object into an array of keys.
  - Object.values() - Converts an object into an array of values.
  
  Example:

    let obj = {
        name: 'hari',
        age: 22,
        place: 'chennai'
    }

    let entrie = Object.entries(obj)
    let key = Object.keys(obj)
    let value = Object.values(obj)

    console.log(entrie); //[ [ 'name', 'hari' ], [ 'age', 22 ], [ 'place', 'chennai' ] ]
    console.log(key); // [ 'name', 'age', 'place' ]
    console.log(value); // [ 'hari', 22, 'chennai' ]



21) How can you turn a array into an object

  - Using Object.assign() - Converts an array into an object with numeric keys.
  - Using spread operator (...) - Converts an array into an object with numeric keys.

  Example:

    let arr = [10,20,30];

    let obj1 = Object.assign({}, arr);
    let obj2 = {...arr};

    console.log(obj1) // { '0': 10, '1': 20, '2': 30 }
    console.log(obj2) // { '0': 10, '1': 20, '2': 30 }




22) Local storage and session storage

  - Local Storage: Stores data with no expiration date. Data is not deleted when the browser is closed, and it can be accessed even after the browser is closed and reopened.

  - Session Storage: Stores data for one session. Data is deleted when the browser tab is closed. It is specific to the tab and not shared across tabs.

  - Both local storage and session storage are part of the Web Storage API and can be accessed using the same methods: setItem(), getItem(), removeItem(), and clear().

  - Both local storage and session storage are limited to 5-10MB of data, depending on the browser.

  - Both local storage and session storage store data as key-value pairs, where both the key and value are strings.

  - Both local storage and session storage are accessible only from the same origin (protocol, domain, and port) that created them.

  - Both local storage and session storage are synchronous, meaning they block the main thread while reading or writing data. This can lead to performance issues if large amounts of data are being processed.





React JS

1) Stateless and stateful component

  - Stateless Component: A component that does not manage its own state. It receives data and functions as props from its parent component and renders UI based on that data. It is a pure function of props.

  - Stateful Component: A component that manages its own state using the useState hook or class-based state. It can change its own state and re-render itself based on that state.



2) Explain JSX

  - JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It is used in React to describe the UI structure and is transformed into JavaScript function calls by Babel.



3) Optimizing performance in react


4) What is the purpose of keys in react

  - Keys are unique identifiers for elements in a list. They help React identify which items have changed, are added, or are removed. This improves performance by allowing React to update only the necessary components instead of re-rendering the entire list.


5) Difference between framework and library

  - A library is a collection of pre-written code that you can use to perform specific tasks. You call the library when you need it.

  - A framework is a more comprehensive solution that provides a structure for building applications. It dictates the architecture and flow of the application, and you work within its constraints. In a framework, you call the code; in a library, the code calls you.



6) Which of the react ui libraries you have used in your project


7) Similarities between useState and useReducer

  - Both useState and useReducer are hooks used to manage state in functional components.
  - Both can be used to manage complex state logic and can trigger re-renders when the state changes.
  - Both can be used to manage state in a predictable way and can be used to share state between components.



8) How will you implement lifecycle methods in functional component

  - You can implement lifecycle methods in functional components using the useEffect hook. The useEffect hook allows you to perform side effects in function components, such as fetching data, subscribing to events, or manually changing the DOM.
  - The useEffect hook can be used to mimic componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods by specifying the dependencies and cleanup function.
  - The useEffect hook takes two arguments: a function to run and an array of dependencies. The function runs after the component renders, and the dependencies determine when the effect should re-run.
  - If the dependencies array is empty, the effect runs only once after the initial render (similar to componentDidMount).
  - If the dependencies array contains variables, the effect runs whenever those variables change (similar to componentDidUpdate).



9) Code splitting in react

  - Code splitting is a technique used to split your code into smaller chunks that can be loaded on demand. This improves the performance of your application by reducing the initial load time and allowing you to load only the necessary code when needed.
  - Code splitting can be achieved using dynamic imports, React.lazy, and React.Suspense.
  - Dynamic imports allow you to load modules asynchronously using the import() function.




HTML:


1) What are the ways through which you display html elements in a webpage

  - Block Elements: These elements take up the full width available and start on a new line. Examples include <div>, <p>, <h1> to <h6>, <ul>, <ol>, and <li>.
  - Inline Elements: These elements do not start on a new line and only take up as much width as necessary. Examples include <span>, <a>, <strong>, and <em>.
  - Inline-block Elements: These elements are similar to inline elements but can have width and height set. Examples include <img>, <input>, and <button>.



2) What is the difference between link and anchor tag

  - <link> tag: Used to link external resources like stylesheets to the HTML document. It is placed in the <head> section and does not create a clickable link.

  - <a> tag: Used to create hyperlinks that link to other web pages or resources. It can be placed anywhere in the HTML document and creates a clickable link that users can follow.

  - The <link> tag does not have an href attribute, while the <a> tag does.
  - The <link> tag is a self-closing tag, while the <a> tag requires a closing tag.


3) cell padding and cell spacing


4) What is the layout structure of a HTML


5) Empty elements in HTML

  - Empty elements (or void elements) are HTML elements that do not have any content or closing tags. They are self-closing and do not require a separate closing tag. Examples include <br>, <img>, <hr>, <input>, and <meta>.



6) span and div 

  - <span> tag: An inline element used to group inline elements or text for styling purposes. It does not create a new line and only takes up as much width as necessary.

  - <div> tag: A block-level element used to group block elements or sections of a document. It creates a new line and takes up the full width available.

  - <span> is used for styling small sections of text, while <div> is used for larger sections or groups of elements.



7) Relationship Header and h1 tag

  - The <header> tag is a semantic HTML5 element that represents the introductory content or a set of navigational links for a section or page. It can contain headings, logos, navigation menus, and other introductory elements.

  - The <h1> tag is a heading element that represents the most important heading in a section or page. It is typically used for the main title of the document or section.

  - The <header> tag can contain multiple heading elements, including <h1>, <h2>, <h3>, etc. The <h1> tag is usually used within the <header> tag to represent the main title of the page or section.



  CSS


1) What is display: none and visibility: hidden

  - display: none: This property removes the element from the document flow, meaning it will not take up any space on the page. The element is not visible and does not affect the layout of other elements.

  - visibility: hidden: This property hides the element but keeps it in the document flow. The element is not visible, but it still takes up space on the page and affects the layout of other elements.



2) What are the attribute selectors in css

  - Attribute selectors in CSS allow you to select HTML elements based on their attributes or attribute values.

  Syntax:

    selector[attribute] {
      property: value;
    }


  Example:

  input[required] {
  border: 2px solid red;
}



3) How can we animate with CSS

  - CSS animations allow you to animate HTML elements using keyframes and transitions. You can create smooth transitions between different states of an element.

  Transition: For smooth changes between states (like hover or focus)

  keyframes: For more complex animations with multiple steps




4) how can we give a shadow effect to css 


  - Box Shadow 

  - You can give a shadow effect to elements using the box-shadow property in CSS. The box-shadow property allows you to add a shadow effect to the outside of an element's box.

    .box 
    {
    width: 200px;
    height: 100px;
    background: lightblue;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
    }


  - Text Shadow

  - Text Shadow is a CSS property that allows you to add a shadow effect to text. It creates a shadow behind the text, giving it a 3D effect.

    .text 
    {
      font-size: 30px;
      color: navy;
      text-shadow: 2px 2px 5px gray;
    }





5) Different ways to add css to a webpage

  - Inline CSS: Using the style attribute within HTML elements.
  - Internal CSS: Using the <style> tag within the <head> section of the HTML document.
  - External CSS: Linking to an external CSS file using the <link> tag in the <head> section.

  High priority among this is inline css, then internal css and then external css.




6) How can we overlap elements in css

  - You can overlap elements in CSS using the position property. By setting the position of an element to absolute, relative, or fixed, you can control its placement on the page and overlap it with other elements.

  static, relative, absolute, fixed, sticky























