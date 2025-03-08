// 🔥 1️⃣ Reverse a string without using built-in methods.



const reverseString = (str) => {
  let rev = '';
  for(let i=str.length-1;i>=0;i--){
    rev += str[i];
  }
  return rev;
}

console.log(reverseString('string')); // gnirts


// if we are not assigning value to rev, "undefinedgnirts" this will be the output as it stores the value undefined if not initialised.