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


/*


With num !== first 


==> to get rid of duplicate value, we use this condition.
  let say you have an array like [11,11,9], here when 2nd 11 comes to iteration, it fails the condition. i.e,

Fails num > first (because 11 is not greater than 11)
Passes num > second (11 > -Infinity), so second becomes 11 — oops, now both first and second are 11.
That’s not correct for “second largest distinct element.”

When the duplicate number or second 11 appears like this largestElement([11, 11, 9]) then,

num > second is true (11 > -Infinity),

But num !== first is false (because both are 11),
So the update to second is skipped
This ensures second only stores the second-largest distinct number.


*/