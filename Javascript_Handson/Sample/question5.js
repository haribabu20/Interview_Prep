// 5. Find the max count of consecutive 1’s in an array ?


const maxConsecutiveOnes = (arr) => {
  let oneS = 0;
  let maxCount = 0;
  for(i=0;i<arr.length;i++){
    if(arr[i] === 1){
      oneS++;
      maxCount = Math.max(oneS, maxCount);
    }
    else{
      oneS = 0;
    }
  }
  return maxCount;
}



// 🔹 Example Test Cases
console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1, 0, 1, 1])); // Output: 3
console.log(maxConsecutiveOnes([1, 0, 1, 1, 0, 1, 1, 1, 1])); // Output: 4
console.log(maxConsecutiveOnes([0, 0, 0, 1, 0, 1, 0]));       // Output: 1
console.log(maxConsecutiveOnes([1, 1, 1, 1, 1]));             // Output: 5
console.log(maxConsecutiveOnes([0, 0, 0, 0, 0]));             // Output: 0




/*
Math.max(20, 30);
o/p -> 30
This returns the maximum value
" Math.max() works only with numbers. It does not work directly with strings, objects, or arrays "
*/