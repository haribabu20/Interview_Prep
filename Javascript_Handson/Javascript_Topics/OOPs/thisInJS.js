

/*

what is this in JS?

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
  




Tips:

1) 
  if function is called without object, 
  this -> window (in browser)
  this -> global (in node)

2)
  Whoever is calling the function, `this` will point to that.

3)
  Global objects are nothing but {} in node.js
  Global object in browsers are windows

4)
  In a non strict mode, when a regular function is called directly[scenario 4], then "this" refers to global object.


5)
  In a strict mode, [i.e using the "use strict"; at the begining of the script], then "this" refers to undefined


6)
  Arrow function will not have there own this context. Instead they inherit the this value from the lexical scope.

7)
  Crucial difference is that with regular function, this is determined by how the function is called. But with arrow function, this is determined by where the function is called.


8) 
  It is important to understand that when an arrow function is defined in the global scope, the this keyword inside of it will point to the global object (or undefined in strict mode). This is important to remember when using arrow functions, and trying to access object properties.
Refer 4B for more details


9) 
  Event Handler - 'this' refers to the element ---> Normal function
  Event Handler - 'this' refers to the global scope --> Arrow funciton


10)
  In constructor functions, `this` points to the new object created.


11)
  call(), apply(), bind()
    - These 3 methods in JS allows us to control the value of this in function call.- call() --> values are passed normally as parameter
    - apply() -> values are passed as array in parameter
    - bind() ->  we can allocate it into another variable for later use

 */






/*
Scenarios:

1) console.log(this)
2) Normal function call using object
3) Arrow function call using object
4) Normal function call without object
5) Arrow function call without object
6) Event handlers
7) constructors
8) call, apply, bind methods

*/








// 1
console.log(this);   // {}




// Normal function call using object

// 2A
let obj = {
  name: "Hari",
  greet: function(){
    console.log(this.name);
  }
}
obj.greet();      // Hari 



//2B
let objj = {
  name: "Hari",
  greet: function(){
    console.log(this);
  }
}
objj.greet();      // { name: 'Hari', greet: [Function:greet] }






// Arrow function call using object

// 3A
let obj1 = {
  name: "Hari",
  greet: () => {
    console.log(this.name); //undefined
  }
}
obj1.greet();



//3B
let objj1 = {
  name: "Hari",
  greet: () => {
    console.log(this);
  }
}
objj1.greet();     // {}






//4A function call on there own - Normal function - 2 part [strict and non strict mode]

function greet(){
  console.log(this);
}
greet();    // Global Object {}  (In Node.js)

/*
Output for 4A:

  Here we used normal function, the value of this is determined by how the function is called.
  When you call greet() directly, without any specific context (like calling it as a method of an object), this defaults to the global object (or undefined in strict mode).

    1) Non Strict mode: Global objects in both window and node js
    2) Strict mode: undefined.
    These is when the function is directly calle without the object
*/






//4B function call on there own - Arrow function

const arrowGreet = () => {
  console.log(this);
}
arrowGreet() 

/*
  1) In browser, this refers to global WINDOW object
  2) In node, this refers to global GLOBAL object
  3) In strict mode, this refers to undefined.
*/



// 6 Event Handler

//6A - Event Handler - Regular function:

const myButton = document.getElementById('myButton');
function handleClick() {
  console.log(this); // 'this' refers to the myButton element
  this.textContent = 'Clicked!';
}
myButton.addEventListener('click', handleClick);

// OUTPUT: <button id="myButton">Click Me</button>




// 6B - Event Handler - Arrow function:

const myButton1 = document.getElementById('myButton');
myButton1.addEventListener('click', () => {
  console.log(this); // 'this' refers to the surrounding scope (e.g., window or global)
  // this.textContent = 'Clicked!'; // This will likely cause an error
});

// OUTPUT:  Window { ... }





// 7 - Constructor function

function Person(name){
  this.name = name;
}
const p1 = new Person("Hari");
console.log(p1.name);       // Hari

/*
✅ Because this refers to the new object created using the new keyword.
✅ In constructor functions, this refers to the newly created object.
*/




// 8 - call(), apply(), bind()

// call()

function greet(age, role){
  console.log(`${this.name} of age ${age} in ${role} role`)
}
const ojp = {name:'hari'};
greet.call(ojp, 25, "Dev");
// output ---> hari of age 25 in Dev role



// apply() --> only diff in paramater. passing as array

function greet(age, role){
  console.log(`${this.name} of age ${age} in ${role} role`)
}
const ojp1 = {name:'hari'};
greet.apply(ojp1, [25, "Dev"]);


// bind()

function greet(age, role){
  console.log(`${this.name} of age ${age} in ${role} role`)
}
const ojp2 = {name:'hari'};
let func = greet.bind(ojp2, 25, "Dev");       // here comes the diff
func();















