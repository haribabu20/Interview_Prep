
/*

Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their scope during the compile phase, before the code is executed.

*/



// 1. VAR

console.log(x); // undefined
var x = 5;
/*
- Hoisted to the top of its scope and initialised to undefined. 
- Can be accessed its value though the value is undefined.
*/



// 2. LET & CONST

console.log(x); // Reference Error
let x = 5;
/*
- Hoisted but remains uninitialised
- placed in TDZ until execution reached their declaration
- Accessing them before declaration gives Reference Error
*/




// 3. class

new MyClass();  // Reference Error: Cannot access 'MyClass' before initialisation.
class MyClass {}
// - Class declarations are hoisted but are not initialized, so accessing a class before its declaration results in a ReferenceError.




// 4. Normal Function

sayHello();   // 'object
function sayHello() {
  console.log('object');
}

sayHello1();  // Type Error: sayHello1 is not a function
var sayHello1 = function(){
  console.log('object1');
}

sayHello2();  // Reference Error: cannot access 'hello' before initialisation
let sayHello2 = function(){
  console.log('object2');
}
// - Functions declared using normal function are fully initialized during the compile phase, meaning sayHello can be called before its declaration in the code.




// 5. Arrow function

var sayHello3; // Only declaration is hoisted (initialized as undefined)
console.log(sayHello3); // undefined
sayHello3();   // TypeError: sayHello3 is not a function
sayHello3 = () => {
  console.log('object');
}

sayHello4();  // Reference error: Cannot access 'sayHello4' before initialisation
const sayHello4 = () => {
  console.log('obj');
}

