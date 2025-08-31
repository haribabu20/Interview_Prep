

1. 
Question:

  console.log(a)
  console.log(b)
  var a=b=5;

Output:

  undefined
  Reference Error


Explanation:

  b is not defined. Hence reference error !




2. 

a)
  let a = 2;
  let a = 5;
  console.log(a)

O/P: Error
    ===> Identifier 'a' has already been declared


b)
  var a = 2;
  var a = 5;
  console.log(a)

O/P:  5





3. Diff between let and var

var:
  - functional scope
  - var declared variables are hoisted with undefined as the initialised value


let:
  - block scope
  - hoisted but they are kept in temporal dead zone.


const: 
  - For const, initialisation of variable is must. but that's not mandatory for let
  - we cannot reassign the values we declared with const 







4. flattenArray handson






5. 

a)
console.log('4' + 6 * 5)  // '430' --> typeof is string

  - Mult has higher presidence than add. So 6*5. then '4' + 30 --> '430'


b)
console.log('4' * 6 + 5)  // 29

  - type coersion happens, which changes string to number. so '4' --> 4
  - 4 * 4 = 24 ---> 24 + 5 ---> 29


c)
console.log('5' - '3' + 6)  // 8

  - type coersion --> 5 and 3 to number







6. 

 console.log(typeof NaN)  // number
 console.log(typeof null)  // object
 console.log(typeof undefined)  // undefined





7. 

Sort this characters without using inbuilt methods:
  const arr = ['z','a','d','b','e'];  

Ans:
  without inbuilt:
    - bubble sorting

  with inbuilt:
    - console.log(arr.sort())
    - console.log(arr.sort((a,b) => a.localeCompare(b)))


    - only sort() is enough. when numbers, then that a,b can come.
    - or a.localeCompare(b) also works here
    --> console.log(arr.sort((a,b) => a.localeCompare(b)))




8. 

SetTimeout

  - HOF
  - has 2 parameter
  - will execute after some delay and that timing is given as 2nd argument
  - clearTimeout to stop the timeout


SetInterval

  - HOF
  - has 2 parameter
  - executed in every regular interval of delay
  - clearInterval to stop the interval





9)

console.log(NaN == NaN) // false
console.log(NaN === NaN) // false


// JS


10) write any sentence and bring the longest word in that.




11) factorial of number




12) map and forEach

forEach:

  - used for iteration
  - cannot return anything

map:

  - used for iteration
  - will return a new array





React:



13) jsx





14) statefull and stateless



stateless:

  - before hooks comes, functional component is called as stateless.
  - does not manage its own state
  - it just receives props and renders UI.

Ex:

  function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
  }

  // Usage
  <Greeting name="Alice" />




statefull:

  - Manages its own state (using useState, useReducer, or class this.state).
  - Can have lifecycle logic (effects, API calls, event handling).

Ex:

  import { useState } from "react";

  function Counter() {
    const [count, setCount] = useState(0); // stateful

    return (
      <div> 
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    );
  }






15) code splitting

Code splitting = breaking your JS bundle into smaller chunks → improves performance by loading code only when needed.

For more details, go to performance section of Question and answers in note





16) role of super keyword in constructor

The super keyword inside a constructor is used to call the parent class’s constructor (and optionally methods), ensuring that the inheritance chain is properly set up.



Example:

  class Person{
      constructor(name){
          this.name = name
      }
      greeting(){
          console.log(`My name is ${this.name}`);
      }
  }


  class Students extends Person{
      constructor(name, grade){
          super(name);
          this.grade = grade;
      }
      greet(){
          super.greeting();
          console.log(`I'm from ${this.grade} grade !`)
      }
  }

  const student = new Students('Alice', 12)
  student.greet();


output:

My name is Alice
I'm from 12 grade !





17) what is React routers

React Router lets you build multi-page experiences inside a single-page React app, controlling what UI shows based on the URL.

What is Router

  - React Router is the standard routing library for React applications.
  - It lets you create single-page applications (SPA) where navigation feels like moving between different pages, but the app doesn’t reload the entire page.

why we need react router ? 

  - By default, a React app is just one HTML page (index.html).
  - If you want multiple “pages” (like /home, /about, /contact), you need routing.
  - React Router handles that by mapping a URL path → to a React component.

How it works ?
  - When you click Home → URL changes to /, React Router shows <Home />.
  - When you click About → URL changes to /about, React Router shows <About />.
  - No full page reload — just the component changes.

Key Features of React Router ? 

  - Dynamic Routing → components rendered based on current URL.
  - Nested Routes → routes inside routes.
  - Route Params → dynamic values in URL (e.g., /user/:id).
  - Programmatic Navigation → navigate using code (useNavigate).
  - Code Splitting → load routes/components only when needed.




18) types of errors

  - syntax error
  - reference error
  - type error
  - range error
  - custom error

More details : --> JS topics and answer notes 





19) what will be the unmounting phase in functional components

  - bascially we'll have to return some function in the callback and that function will take care of all the whatever has to happen when the component is going to be unmounted.





20) How to pass the data from child to parent

  - using callback
  - for more details:  refer handson -> react




21) Context API and redux differences. when to use which

👉 “Use Context API for simple global state and avoiding prop drilling. Use Redux when the app grows complex, state updates are frequent, and you need middleware, dev tools, and fine-grained performance optimizations.”

  Simi:

  - both are used for managing the state
  - Redux and context APIs are introduced to avoid the prblm of props drilling
  
  Diff:

  - context API is used in react whereas redux is used for all javascript libraries.
  - has no middleware and debugger in context api. But redux has those





22) why we use the Custom hooks and what custom hooks that you introduced !

  - 👉 “We use custom hooks in React to reuse stateful logic, keep components clean, separate concerns, and avoid duplication. They allow us to share functionality between components without relying on HOCs or render props.”

  - useDebounce, useFetch, etc..

  - For more details, go to handson - react





23) useCallback and useMemo:


useCallback:

  - used to memoize the function instance


useMemo:

  - used to cache the result that is provided by a function.






24) Features of Redux

  - managing state through store.
  - For entire application we have only one store, which helps other component for accesing the state and avoids the props drilling.
  - Mutating state is possible only with reducers [pure function], where we pass the action and initial state.

👉 “Redux provides a predictable, centralized, and debuggable way to manage state with features like a single store, unidirectional data flow, middleware for async logic, immutability, and DevTools support. It’s especially useful for large-scale applications with complex state.”


- refer Q and A important notes 






25) Parts of Redux

👉 “Redux is built around 3 core parts: Actions, Reducers, and the Store. Actions describe what happened, reducers decide how state changes, and the store holds the global state. In practice, we also use dispatch to send actions, subscribers (or React bindings like useSelector) to update the UI, and sometimes middleware to handle async operations.”



Main parts of redux:

- actions —> describe what happens
- reducer —> to update the state
- store —> to store the state


Other parts of redux:

- dispatch —> send actions
- subscribers —> a way for the UI to listen to store changes.
- Middleware —> For handling async logic

refer Q and A important notes 







26) what are middlewares

👉 “Middleware in Redux is a function that sits between dispatching an action and the reducer. It’s used for logging, handling async operations, authentication, or modifying actions before they reach reducers. Common examples include Redux Thunk for async functions, Redux Saga for complex async workflows, and custom middleware like logging or auth checks.”

refer Q and A important notes 





27) How to cancel an action ?

👉 “Middleware sits between dispatch and the reducer. If I want to cancel an action, I just don’t call next(action) inside my middleware. That way, the action never reaches the reducer and gets blocked.”

refer Q and A important notes 







// html

28) html and xhtml

xhtml:
  - stricter form of html
  - it is mandatory to have closing tag

html:
  - non stricter form of html
  - it is not mandatory to have closing tag, just a forward slash in open tag is ok.




29) diff <em> and <i> tag

  - styling wise it 'italize' the font.
  - But <em> tag adds a real meaning to the word for screen reader and SEO
  - whereas the <i> tag is only for styling purpose
  - <em> is semantic and <i> is not semantic
  - semantic tag means it has a specific meaning.





// css



30) what is specificity in css

- Specificity is the priority system CSS uses when multiple rules target the same element.
- 👉 In simple words: It decides which CSS rule wins when there’s a conflict.

Definition:

“Specificity in CSS is the way browsers decide which rule to apply when multiple rules target the same element. Inline styles override IDs, IDs override classes, and classes override tags. If there’s still a tie, the last declared rule wins.”

Rules:

1) !important → overrides everything (but should be avoided in practice)
2) Inline styles (style="color:red;") → highest priority
3) ID selectors (#idName)
4) Class selectors (.className), pseudo-classes (:hover, :nth-child) and attribute selectors ([type="text"])
5) Type selectors (element/tag names like div, p, h1)





31) how can we hide the element in css

display: none 
visibility: hidden

- visibility: none  --> it reserves the space but remove the element
- display: none --> it remove the elemtn and also wont reserve any spaces.






32) can we overlap elements in css ?


“Yes, elements can overlap in CSS using positioning (absolute, relative, fixed) and z-index. By default, later elements in the DOM overlap earlier ones, but z-index lets us control which appears on top.”


Higher "z-index" sits on top of the other "z-index" elements

✅ Rule of thumb:

- Bigger z-index = closer to the user (front).
- Smaller z-index = further away (back).
- If two elements have the same z-index, the one that comes later in the HTML will appear on top.


Example:

.box1 {
  position: absolute;
  top: 50px;
  left: 50px;
  background: blue;
  width: 100px;
  height: 100px;
  z-index: 1; /* Behind */
}

.box2 {
  position: absolute;
  top: 80px;
  left: 80px;
  background: red;
  width: 100px;
  height: 100px;
  z-index: 2; /* In front */
}





33) format text in css

"In CSS, we format text using properties like font-family, font-size, font-weight, color, text-align, text-transform, and text-decoration. We can also adjust spacing (line-height, letter-spacing) and add effects like text-shadow."


















