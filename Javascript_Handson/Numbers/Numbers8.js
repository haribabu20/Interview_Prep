// 🔥 🔟Count the sum of even and odd digits in a number.



const oddEven = (num) => {

  let evenSum = 0;
  let oddSum = 0

  while(num>0){
    let digit = num % 10;

    if(digit%2===0){
      evenSum += digit;
    }else{
      oddSum += digit;
    }
    
    num = Math.floor(num/10);
  }

  return {evenSum, oddSum};
}

console.log(oddEven(123456));



/*

These 2 are the mandatory lines of code which is seen in previous 3 handson

  let digit = num % 10;
  num = Math.floor(num/10);

 */