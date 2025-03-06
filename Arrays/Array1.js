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