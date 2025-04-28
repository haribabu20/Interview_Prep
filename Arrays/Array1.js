// Find the 2nd largest element in an array.

const largestElement = (arr) => {

  let first=-Infinity, second=-Infinity;

  for(let num of arr){
    if(num>first){
      second=first;
      first=num;
    }
    else if(num>second && num!==first){
      second=num
    }
  }

  return second === -Infinity ? "Please provide value" : second
}

console.log(largestElement([1,3,5,7,3,2,9,11]));





/*
1) in If condition, we already knew that we are going to assign value to first. Hence we are moving initially the value of first to second.
2) we have to assgin the looped value to second only when it is grater that exsiting second value and should not equal to first value
*/
