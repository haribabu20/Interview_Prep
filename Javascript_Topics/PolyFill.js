/*

PolyFill:

- A polyfill is a piece of code that mimics modern JavaScript features in older browsers that do not support them. It "fills in the gap" by providing alternative implementations.

- ✅ Use case: If a browser does not support ES6+ features like Array.includes(), a polyfill adds this functionality manually.

 */



// polyfill for includes

if(!Array.prototype.includes){
  Array.prototype.includes = function(value){
    return this.indexOf(value) !== -1;
  }
}


// polyfill for map

if(!Array.prototype.myMap){
  Array.prototype.myMap = function(callback){
    let result = [];
    for(let i=0; i<this.length; i++){
      result.push(callback(this[i], i, this))
    }
    return result;
  }
}
console.log([1,2,3].myMap(num=>num*2)); // [2,4,6]

/*
Explanation:

- Normally map method can take 3 parameter. 1 -> value, 2 -> index, 3 -> array
- Also we will pass a callback function operation to each of its element.
So these above 2 operations we have to perform in another way to acheive map functionality

PolyFill for Map:

- In console, we'll give the callback function [line 33].
- That we'll pass as argument for the function in line 25.
- this here represents the array.
- line 28, we are providing 3 arguments to myMap method. But in console, we are providing only one value, that is for the this[i]. which is nothing but num
- this[i] --> 1 in first iteration. that we are multiplying by 2. Hence we get the value as 2
Now this 2 we are passing into the new variable result using push method and finally we are returning the result value


Note: 
- Don't confuse with the 3 variables that is passed into callback funciton. this is the ideal way of Map behaviour, but everytime we will use only 1 value. that is the element of the array.
- so line 28 will be taking only the element from console, not its index or array as we haven;t provided that in console.

*/



// polyfill for filter:

if(!Array.prototype.myFilter){
  Array.prototype.myFilter = function(callback){
    let result = [];
    for(let i=0; i<this.length; i++){
      if(callback(this[i], i, this)){
        result.push(this[i]);
      }
    }
    return result;
  }
}

console.log([1,2,3,4,5,6].myFilter( num => num % 2 === 0 )); // [2,4,6]

/*
Polyfill for filter:

- it tells that, only if the given condition in console is satisfied, only then we have to put that element into the result array. if not, then we have to remove that


*/