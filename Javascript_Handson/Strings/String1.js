// 🔥 1️⃣ Reverse a string without using built-in methods.


// Inbuilt Method

let word = 'programming';
const rev = (word) => word.split('').reverse().join('')
console.log(rev(word))


// No InBuilt Method

const reverseString = (str) => {
  let rev = '';
  for(let i=str.length-1;i>=0;i--){
    rev += str[i];
  }
  return rev;
}

console.log(reverseString('string')); // gnirts


// mistake: forgot to give as str.length-1. instead i gave str.length


// if we are not assigning value to rev, "undefinedgnirts" this will be the output as it stores the value undefined if not initialised.