



/*
Shallow Copy:

  - A shallow copy creates a new object or array
  - If the object contains references to other objects (nested objects or arrays), the reference are copied.
  - This means chenages to the nested objects affects both the original and copy

  Example for shallow copy:

  1. let obj1 = object.assign({}, obj)
  2. spread operator

*/


// 1. Object.assign

const obj = {a:1, b:{c:2}}

const assign = Object.assign({},obj);

assign.b.c = 42;

console.log(assign); // { a: 1, b: { c: 42 } }
console.log(obj); // { a: 1, b: { c: 42 } }


// 2. Spread operator

const arr1 = [1, 2, {a: 3}];

const spread = [...arr1];

spread[2].a = 6;

console.log(arr1) // [ 1, 2, { a: 6 } ]
console.log(spread) // [ 1, 2, { a: 6 } ]








/*
Deep Copy:

- Deep Copy creates a new objects or array and recursively copies all the nested objects or arrays.
- Changes made to the copy do not affect the original

Example: 

1. JSON.parse(JSON.stringify(value)); ---> Deep Copy. will not allow to chnage the original value


JSON.stringify: 

  - JSON.stringify() is a method that converts a JavaScript object or value into a JSON-formatted string.
  - It preserves object structure, but as a string.

  Limitations:
  - ❌ Cannot stringify functions
  - ❌ Does not support undefined values

  Advantages:
  - ✔ Saving data (e.g., store an object as a string in localStorage or databases).
  - ✔ Sending data (e.g., convert JavaScript objects into JSON format for API requests).
  - ✔ Debugging (Pretty print objects). 


  JSON.parse():

    JSON.parse() is a method that converts a JSON string back into a JavaScript object.

  Limitations:
  - Only works with valid JSON strings (keys must be in double quotes).
  - Cannot parse functions (JSON.stringify() removes them).
  - Cannot parse undefined values (they are removed when stringified).
  - Cannot parse circular structures (objects that reference themselves).

  Advantages:
  - Reading stored JSON data (e.g., localStorage.getItem()).
  - Parsing API responses (APIs return data in JSON format).
  - Converting JSON-formatted strings into usable objects.

*/


const obj12 = {a:1, b: {c: 2}};
const parsing = JSON.parse(JSON.stringify(obj12));

parsing.b.c = 42;

console.log(obj12) // { a: 1, b: { c: 2 } }
console.log(parsing) // { a: 1, b: { c: 42 } }