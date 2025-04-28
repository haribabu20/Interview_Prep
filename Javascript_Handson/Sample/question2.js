// 2. How to check whether a string is palindrome or not ?

const isPalindrome = (str) => {

  const value = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedValue = value.split('').reverse().join('');

  return value === reversedValue 

}


console.log(isPalindrome("madaM"));



// i thought of using --> value === reversedValue ? true : false in return.  But since the value itself provide boolean, we can rremoave the ternory condition

