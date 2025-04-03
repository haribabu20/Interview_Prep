/*
A Higher-Order Function (HOF) is a function that takes another function as an argument or returns a function.

1) takes func as argument and can return any value like string or array
2) takes func as argument and returns a function

By default, HOC concepts is used in array methods like map(), filter(), reduce() 
  --> Since map(), filter(), and reduce() accept a callback function as an argument, they are considered Higher-Order Functions by default.



*/


// Example 1: HOF that takes a function as an argument
function sum(func, name){
    console.log('hello, '+name);
    func();
}
function add(){
    console.log('Added')
}
sum(add, "HariBabu");
/*
Output:
hello, HariBabu
Added
*/



// Example 2: HOF that returns a function
function outer(){
    return function inner(){
        console.log('Inner function');
    }
}
const innerFunc = outer();
innerFunc(); // Output: Inner function



// Example 3: HOF with array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled); // Output: [2, 4, 6, 8, 10]