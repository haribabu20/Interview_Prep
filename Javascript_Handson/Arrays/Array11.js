/* 

  Given two arrays, write JavaScript code to find the intersection of the two arrays, but only return unique elements.
  Input: arr1 = [1,2,2,1], arr2 = [2,2]
  Output: [2]

*/



const arr1 = [1,2,2,1];
const arr2 = [2,2];

const set1 = [...new Set(arr1)] // [1,2]

let val = []

for(let i=0; i<arr2.length; i++){
    if(set1.includes(arr2[i]) && !val.includes(arr2[i])){
        val.push(arr2[i])
    }
}

console.log(val)