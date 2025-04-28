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


// Method 4 -> indexOf(value) provides the first index value. refer question3.js for more detailed explanation
const removeDuplicate4 = (arr2) => {
  return arr2.filter((value,index) => arr2.indexOf(value) === index)
}



// console.log(removeDuplicate1([1,2,5,9,8,1,9,2]));
// console.log(removeDuplicate2([1,2,5,9,8,1,9,2]));
// console.log(removeDuplicate3([1,2,5,9,8,1,9,2]));
console.log(removeDuplicate4([1,2,5,9,8,1,9,2]));
