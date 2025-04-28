// 🔥 2️⃣ Check if a string is a palindrome.



// Method 1 - without inbuilt method
const palindromString1 = (str) => {
  let rev='';
  for(let i=str.length-1; i>=0; i--){
    rev += str[i]
  }
  return str === rev;
}

console.log(palindromString1('madama')); // false



//Method 2 - with inbuilt method

const palindromString2 = (str) => {
  const str1 = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reverseString = str1.split(' ').reverse().join('');
  return reverseString === str
}

console.log(palindromString2('madam')) //true





/*
   palindrome is similar to reversing the string. 
   In 2nd method, i just implemented the functionality to remove the space, and other stuffs from input value.
*/