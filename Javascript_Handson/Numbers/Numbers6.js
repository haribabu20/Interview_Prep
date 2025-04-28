// 🔥 5️⃣ Find the sum of digits of a number.

const sumOfDigits = (num) => {
  let sum = 0;
  while(num>0){
    let digit = num % 10;   
    sum += digit;
    num = Math.floor(num/10);
  }
  return sum
}

console.log(sumOfDigits(123456));




/*

  12345 % 10 = 5
  1234 % 10 = 4
  Basically we get the last digit here.

  We have to remove the last digit. So we are dividing that by 10 and then removing the last digit using floor as it will come like 1234.5 --> 1234

  input = 5
  1) 5 % 10 = 5
  2) sum = 5
  3) num = 0 [floor]

  since num = 0, while loop stops and it prints only the value 5 as Output.




*/