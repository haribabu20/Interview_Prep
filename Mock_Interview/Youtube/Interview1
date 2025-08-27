
//JavaScript coding Questions




//1
console.log('1'+1) // 11 



//2
console.log('1'-1) // 0
console.log('1'-'1') // 0
console.log(1-'1') // 0



  The - operator triggers type coercion in JavaScript
  JavaScript converts '1' to a number → 1



//3 Hoisting
a = 10;
console.log(a); // 10
var a



When JavaScript is executed, all var declarations are hoisted to the top of their scope (but not the assignments).So this code is interpreted like:
    var a;      // declaration is hoisted to the top
    a = 10;     // assignment stays where it is
    console.log(a);  // prints 10
 



// 4
a = 10;
console.log(a); // reference error
// let a      









// React & Javascript theory



1. Is react one way data binding or 2 way data binding ?

  In one-way data binding, data flows in a single direction — from the parent component to the child component via props.


2. What is props drilling


3. State and props


4. Can you pass data from child to parent component ?

  - Yes, you can pass data from child to parent in React — indirectly, using callback functions.
  - Since React follows one-way data flow (Parent ➝ Child), to send data back from Child ➝ Parent, you pass a function from the parent as a prop to the child. The child then calls that function with the data.

  Example 

  Passing the data from child to parent:

      import React, {useState} from 'react'

      const Parent = () => {
      const [name, setName] = useState('Admin');
      let func = (data) =>  {
          setName(data)
      }
      return (
          <>
              <h1>Hello {name}</h1> 
              <Child func = {func}/>
          </>
          )
      }

      const Child = ({func}) => {
          let name = 'Hari';
          return(
              <button onClick={()=>func(name)}>Select user</button>
          )
      }

      export default Parent
       
      

5. What are keys in js

  In React, when you render a list of elements, each item needs a unique key prop.
  This helps React identify which items have changed, been added, or removed.



6. Contemporaries of react js

  Here we are refering to other frontend frameworks or libraries that are commonly used around the same time as react.

  React --> Unidirectional flow maintained by fb
  angular -> multidimention, maintained by google



7. HOC and implementation in your real time project

  A Higher-Order Component is a function that takes a component as an argument and returns a new component with extra capabilities (like added props, logic, or UI).

    const withLogger = (WrappedComponent) => {
    return (props) => {
      console.log("Props:", props);
      return <WrappedComponent {...props} />;
    };
  };



8. Diff between class and functional component



9. Lifecycle methods of functional component

  In class components, we use:

    componentDidMount()

    componentDidUpdate()

    componentWillUnmount()

  In functional components, we handle these using the useEffect hook.



10. what we do in componentWillUnmount method ?

  - Remove addEventListener
  - clearInterval / clearTimeout
  - Cancelling the pending API requests
  - Unsubscribe from observable or data streams (like Redux, RxJS)
  - Avoid memory leaks when component unmounts



11. What are fragments.

  Fragments let you return multiple elements without adding extra DOM nodes like a <div>.

    - Avoid extra nesting in the DOM
    - Helpful in layouts like tables where extra <div>s would break structure



12. Call back function

A callback function is a function passed as an argument to another function — and it's usually called after the outer function finishes its task.



13. Closures

"A closure is when an inner function remembers and accesses variables from its outer function’s scope even after the outer function has finished executing."

A closure is a function + its lexical scope bundled together.



14. SetTimeout and setInterval


15. In react where the virtual dom is stored

  - The Virtual DOM (VDOM) is not stored in the browser — it's maintained in memory (RAM) by React itself.
  - The virtual DOM is built using plain JS objects, which are kept in memory (heap) as long as the component is mounted.

  - When you write JSX in React, React creates a Virtual DOM tree (a lightweight copy of the real DOM).
  - This VDOM is stored in memory (in JavaScript objects).
  - React uses this virtual DOM to compare old and new versions (using a process called diffing).
  - Based on the difference, it updates the real DOM efficiently using reconciliation.



16. Data type in JS


17. API methods

📘 GET:
  fetch('https://api.example.com/users')
    .then(res => res.json())
    .then(data => console.log(data));

📝 POST:
  fetch('https://api.example.com/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Haribabu', role: 'admin' })
  });

✏️ PUT:
  fetch('https://api.example.com/users/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Updated Name', role: 'user' })
  });

🛠 PATCH:
  fetch('https://api.example.com/users/1', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ role: 'developer' })
});

❌ DELETE:
  fetch('https://api.example.com/users/1', {
    method: 'DELETE'
  });




18. HTTP status codes:

200-299 --> success
400-499 --> client errors
500-599 --> server errors

200 --> successfull GET request
201 --> POST request created a resource
204 --> success, but no data returned

400 --> Bad request -- Invalid input sent
401 --> Unauthorised - Not logged in/ invalid token
403 --> Forbidden -- Logged in, but not allowed
404 --> Not found -- Resource doen't exist

500 --> Internal server error -- Unexpected crash on server
502 --> Bad Gateway -- server recevied invalid response
503 --> server down

**************Imp****************

If they ask:
"What happens if you send a request to a wrong URL?"
You say:

"The server will return a 404 Not Found error."




19. Axios

✅ Axios is a JavaScript library used to make HTTP requests (like GET, POST) from the browser or Node.js.

📦 Makes API calls simpler than fetch
📁 Automatically converts JSON data
📌 Allows setting headers easily
🛠 Built-in error handling
🔁 Supports request/response interceptors
🕒 Supports timeout and cancel requests




20. When we pass the condition in map method like filter, what will happen ?

  It prints the exact same element length that the original array has. If the condition is not satisfied, then in that place of the element, "null" value will be displayed and if the condition satisfied for any element, then that will be included in the new array.





21. what is find()

  It returns the "first element of array" that passes the specific condition

  arr = [{id:1, name:'sai'}, {id:2, name:'kishore'}, {id:2, name:'sam'}];
  let data = arr.find((element)=>element.id === 2);
  console.log(data);

    // output: { id: 2, name: 'kishore' }
    // undefined if not found
  
  findIndex(): When it comes to findIndex(), we can implement that in same above program. if so the output will be "1"






// CSS & HTML



1. Selectors in CSS and its priorities

  univeral, type, class, id, group, child, psuedo class, psuedo elements etc.

  Priority list in order wise:

  - "!important"  
  - Inline styling
  - ID
  - class, attribute, pseudo-class
  - universal 




2. Block, Inline and Inline block level element; 

  “Block elements take up full width and start on a new line, inline elements flow with text and can’t have width/height, and inline-block elements stay inline but let you style dimensions.”


Block: 
  - Takes up the full width available (by default).
  - Always starts on a new line.

<div>, <p>, <h1>–<h6>, <section>, <article>, <ul>, <li>, <form>


Inline:
  - Only takes up as much width as its content.
  - Does not start on a new line.
  - Cannot set width/height (margin/padding is limited).

<span>, <a>, <strong>, <em>, <img>


Inline-Block:
- Behave like inline elements (sit inline with text).
- But you can set width, height, margin, and padding like block elements.
- Best of both worlds.

Custom buttons, badges, tags, etc.





3. Diff between bold and strong tag

  Both <b> and <strong> are used to bold text in HTML, but there's a difference in their meaning and usage.

Bold:
  - <b> tag
  - It makes text bold without implying any importance or emphasis.
  - It’s purely visual, used when you just want the text to look bold.
Strong:
  - It also makes text bold, but it tells browsers, screen readers, and search engines that the text is important.
  - It adds semantic weight to the content.
When to use strong:
  - Marking important warnings, alerts, or key phrases
  - Accessibility purposes (screen readers emphasize it more)




4. Media Query

  A media query is a CSS feature that lets you apply styles based on device characteristics, such as:

- max-width	
- min-width
- orientation [portait, landscape]
- max-height
- resolution

    @media (min-width: 768px) and (max-width: 1024px){
      body{
        background-color: yellow;
      }
    }


    @media (orientation: portrait){
      body{
        background-color: yellow;
      }
    }




5. how can we add gradients in CSS ?

  A gradient is a smooth transition between two or more colors. i.e - Gradually shifting from one colour to another colour is gradient

types:

- linear-gradient() - Creates a gradient along a straight line 
- radial-gradient() - Spreads out from the center like a circle or ellipse.

Example: 
- background - linear-gradient(blue, green) 




6. how can we hide the elements ? 

display: none; 
--> The element is completely removed from the layout.
--> It does not take up space on the page.

visibility: hidden; 
--> The element is invisible, but it still takes up space in the layout.

opacity: 0;
--> Makes the element fully transparent.
--> Still visible in layout
--> Stil interactable



7. How can we animate using CSS ?

  We can animate in CSS using two main approaches:

    1) transition 
    
      – for simple animations like hover effects. It lets you smoothly change property values over time.

    Example for simple transition:

    Using transition to change background on hover:

      .btn {
          background: blue;
          transition: background 0.3s;
        }
        .btn:hover {
          background: green;
      }



    2) @keyframes with animation 
    
      – for more complex or continuous animations, like spinning, bouncing, or fading.
   @keyframes defines the stages of the animation (from → to). i.e it defines the animation steps

   Make sure to use position as relative for animation

   Example:

   exmpl.html:
    <div class="box" />    


   exmpl.css:
    .box{
      width: 100px;
      height: 100px;
      background-color: skyblue;
      position: relative;
      animation: moveRight 2s ease in-out infinite; // moveRight--->Name of the keyFrame, 2s --> Duration of one animation cycle, animation timing function[speed curve]--> controls the acceleration of animation and infinite is the "animation-iteration-count"--> here the animation will repeat continously.
    }

    @keyframes moveRight{
      from{
        left:0;
      }
      to{
      left: 200px;
      }
    }


    Namme Action panrathunala oru changes nadakuthuna athu transision. Athuvave oru changes nadakuthuna athu animation.


    Timing Function   	Description
    ease-in	      --->  Starts slow, speeds up at the end
    ease-out	    --->  Starts fast, slows down at the end
    ease-in-out   --->  Starts slow, speeds up, and then slows down




  
  8. Diff between CSS border and CSS outline

🟦 Border 
  – Think of it like a wall inside your house

    A border is a line drawn around the element itself.
    It is part of the element’s size — it takes up space.
    You can style each side separately (top, right, bottom, left).
    You can round the corners using border-radius.


🟥 Outline 
  – Think of it like a glow or highlight around the house

      An outline is a line drawn outside the element.
      It doesn’t take up space — it doesn’t push or resize anything.
      You can’t set different sides or use border-radius.
      Often used to show focus (like when you click into an input box).




  9. How can we vertically center a text.
  
  “I usually use Flexbox or Grid to vertically center text, as they are clean and responsive".

  Flex: ---> Best for modern layout and responsiveness.

      .container {
      height: 200px;
      display: flex;
      justify-content: center;   // horizontal centering 
      align-items: center;       // vertical centering 
      background-color: #f0f0f0;
    }

  Grid:  --> 🧠 Best for both vertical and horizontal centering in a very clean way.

      .container {
        display: grid;
        place-items: center; // shorthand for align + justify
        height: 200px;
    }




  10. Diff between div and span tag

div:

    Stands for division.
    It’s a block-level element.
    Takes full width of the container by default.
    Starts on a new line.
    Commonly used to group larger sections of content.


span:

    It’s an inline element.
    Takes only the width it needs (wraps around its content).
    Does not start on a new line.
    Used to style small portions of text within elements.



11. What is Marquee Tag ? 

The <marquee> tag in HTML is used to create scrolling text or images — horizontally or vertically across the web page.

Ex:

    <marquee behavior="scroll" direction="left">
      This text scrolls from right to left.
    </marquee>


This will move the text from left to roght like an advertisement

Common attributes:

Attribute	          Description

direction	          left, right, up, down
behavior	          scroll, slide, alternate
scrollamount	      Speed of scrolling (numeric value)
loop	              Number of times the marquee should loop
bgcolor	              Background color
height / width	    Sets the size





12. Empty Elements

Empty elements are HTML tags that do not have any content inside them — they do not need a closing tag.

Example:

  <br>  -->  Line Break
  <hr>  -->  Horizontal rule
  <img>
  <input>
  <link>
  <meta>
  <source>
  <area>
  <col>



13. figCaption



14. <DataList> Tag

  “The <datalist> tag enhances form inputs by offering predefined suggestions without restricting the user. It's ideal for search bars or fields with common inputs, and it's supported in modern browsers.”

  Ex: 
      <label for="browser">Select from the list<label>
      <input id="browser" name="browser" list="browsersss">

      <datalist id="browsersss">
        <option value="Chrome">
        <option value="Edge">
        <option value="FIreFox">
        <option value="Safari">
        <option value="Brave">
      </datalist>


  
15. Can we display a webpage in another webpage?

      yes, with <iframe>.
      The <iframe> (inline frame) tag allows you to embed another HTML page or website inside your current webpage.


  
  
16. is it possible to change the inline element to block level element ?

  Yes using the command

      display: block

  Like this we can change all,

      display: inline,
      display: block,
      display: inline-block




17. Layout of html

  "In HTML5, layout is structured using semantic tags like <header>, <main>, <section>, <article>, <aside>, and <footer>. These tags give meaning to the content and help with SEO and accessibility. We can style and position them using CSS to build the page layout."


    <script> tag in body
      can be placed at last of </body> tag.
    <style> tag in head
        can be placed in top of head tag


  
18. Position property in CSS


19. Float Property:

  The float property in CSS is used to position an element to the left or right of its container, allowing text or other elements to wrap around it.

  Nowadays, Flexbox or Grid is preferred for layout, but float is still useful for text wrapping and legacy support."

  float: left | right | none | inherit;



20 CSS box model

  The CSS Box Model describes how the size of an element is calculated and how spacing around it works.

  content --> padding --> border --> margin



21. CSS Grid and FlexBox

    Flexbox is best for laying out items in a single line — either horizontally or vertically. Grid is used when I need full control over both rows and columns at the same time.

    I use Flexbox for one-directional layouts like navigation bars or button rows, and Grid when I need two-dimensional control, such as laying out a full page or complex UI with both rows and columns.

    Use Grid when...                          	Use Flexbox when...
    You need full page layout                 	You need to align items in a row or column
    You have both rows and columns	            You have a single-direction layout
    Example: dashboards, photo galleries	      Example: navbars, buttons, cards


If I want fine control over layout, like putting item 1 in row 2, column 3 — Grid is the better choice.









