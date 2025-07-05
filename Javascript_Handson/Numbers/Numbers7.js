// 🔥 6️⃣ Reverse a number


const reverseNumber = (num) => {
  let rev = 0;
  while(num>0){
    let digit = num % 10;
    rev = (rev * 10) + digit;
    num = Math.floor(num/10);
  }
  return rev;
}


console.log(reverseNumber(123456));



/*

mistakes:

make sure that you are not including accumulator term in rev !!


Concept for this question and the previous one -> "sum of all the digits in a number" remains same, except for one line.


*/