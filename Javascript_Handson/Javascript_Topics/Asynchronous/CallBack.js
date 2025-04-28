/*
    Callbacks are functions that are passed as arguments to other functions and is executed after the completion of that function.

    functions can also be passed as argument to a callback function but with one diff

    ❌ If a function is only passed as an argument but NOT executed inside, it is not a callback.

*/


//1. Normal callback function

function call(){
    console.log("Hello");
}
function callback(call){
    setTimeout(() => {call()}, 1000);
}
// Call the callback function with the call function as an argument
callback(call);





//2. ✅ Example: Valid Callback Function accepting function as arguement. 
function executeCallback(callback) {
  console.log("Before executing callback...");
  callback(); // ✅ Executing the function inside
  console.log("After executing callback...");
}
function sayHello() {
  console.log("Hello from callback!");
}
executeCallback(sayHello);
/*
Before executing callback...
Hello from callback!
After executing callback...
 */
