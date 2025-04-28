// Remove duplicates from an array.


//Method 1
const removeDuplicate1 = (arr) => {
  let newArray = [];
  for(let i=0; i<arr.length;i++){
    if(!newArray.includes(arr[i])){
      newArray.push(arr[i]);
    }
  }
  return newArray;
}


// Method 2
const removeDuplicate2 = (arr) => {
  let newArr = [];
  for(let i=0; i<arr.length; i++){
    if(newArr.indexOf(arr[i]) === -1){
      newArr.push(arr[i]);
    }
  }
  return newArr
}

// Method 3
const removeDuplicate3 = (arr1) => {
  return [...new Set(arr1)]
} 
// When you do new Set(arr1), it removes duplicates from arr1, but it returns a Set, not an array.
// The spread operator ... is used to spread the elements of the Set into a new array.



// Method 4 -> indexOf(value) provides the first index value. refer question3.js for more detailed explanation
const removeDuplicate4 = (arr2) => {
  return arr2.filter((value,index) => arr2.indexOf(value) === index)
}



// console.log(removeDuplicate1([1,2,5,9,8,1,9,2]));
// console.log(removeDuplicate2([1,2,5,9,8,1,9,2]));
// console.log(removeDuplicate3([1,2,5,9,8,1,9,2]));
console.log(removeDuplicate4([1,2,5,9,8,1,9,2]));
