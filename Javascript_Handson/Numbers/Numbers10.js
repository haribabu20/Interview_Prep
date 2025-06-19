// 🔥 8️⃣ Check if a number is a Perfect Number.


// The sum of its factors (excluding itself) is equal to the original number.



const perfectNumber = (num) => {
  let sum = 0;
  for(let i=0; i<num; i++){
    if(num%i===0){
      sum += i;
    }
  }
  return num === sum
}

console.log(perfectNumber(6)); // true
console.log(perfectNumber(28)); // true
console.log(perfectNumber(12)); // false
console.log(perfectNumber(15)); // false



/* 
perfect numbers - 6, 28, 496, 8128

1+2+3 = 6
1+2+4+7+14 = 28

*/
