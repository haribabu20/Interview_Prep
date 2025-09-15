// Find the maximum number in an array.

// Method 1
const max = (arr) => Math.max(...arr);


//Method 2
const max1 = (arr1) => {
  let max=0;
  for(let i=0; i<arr1.length; i++){
    if(arr1[i]>max){
      max = arr1[i];
    }
  }
  return max;
}


// Method 3
const max2 = (arr2) => {
  let max = 0;
  for(let num of arr2){
    if(num>max){
      max=num;
    }
  }
  return max;
}



// console.log(max([1,2,3,4,8,6,99]));

// console.log(max1([1,7,2,64,34,41,8,61,9, 65]));

console.log(max2([1,7,2,64,34,41,8,61,9,65]));