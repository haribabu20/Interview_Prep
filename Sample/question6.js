// 6. Find the factorial of given number ?

// Using a Loop
const factorial = (n) => {
  let value = 1;
  if(n<0) return "Factorial is not applicable for negative numbers";
  if(n===0 || n===1) return value;
  for(let i=2; i<=n; i++){
    value *= i;
  }
  return value
}


// Recursion Method
const factorialRecursion = (n) => {
  if(n<0) return "Invalid";
  if(n===0 || n===1) return 1
  return n * factorialRecursion(n-1)
}




// 🔹 Example Test Cases
// console.log(factorial(5)); // Output: 120
// console.log(factorial(4)); // Output: 24
// console.log(factorial(3)); // Output: 6
// console.log(factorial(2)); // Output: 2
// console.log(factorial(0)); // Output: 1
// console.log(factorial(1)); // Output: 1
// console.log(factorial(-3)); // Output: "Factorial not defined for negative numbers"

//recursion
console.log(factorialRecursion(5)); // Output: 120
console.log(factorialRecursion(4)); // Output: 24
console.log(factorialRecursion(3)); // Output: 6
console.log(factorialRecursion(2)); // Output: 2
console.log(factorialRecursion(0)); // Output: 1
console.log(factorialRecursion(1)); // Output: 1
console.log(factorialRecursion(-3)); // Output: "Factorial not defined for negative numbers"