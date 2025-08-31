// 🔥 1️⃣ Find the factorial of a number (using recursion and loop).


// Method 1 - loop
const factorial1 = (n) => {
  let fact = 1;         
  if(n<0) return "Not valid";     // Handling negative number case
  if(n===0 || n===1) return 1;    // Handling base case
  for(i=2; i<=n; i++){
    fact *= i;                    // To keep in Mind. Accumulated (*)
  }
  return fact
}


// here  " i<=n " is important. 

//Method 2 - recursion
const factorial2 = (n) => {
  if(n===1) return 1;   // Base Case
  return n * factorial2(n-1);
}



console.log(factorial1(5))
console.log(factorial2(6))