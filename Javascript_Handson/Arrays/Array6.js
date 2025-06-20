// 6️⃣ Sort an array in ascending and descending order without using sort().
// write js code to sort array of objects by a key and explain




// Bubble Sorting - Ascending and Descending Order

// for normal data
const sortAscending = (arr) => {
  let n = arr.length;
  let temp;
  for(let i=0; i<n-1; i++){
    for(let j=0; j<n-i-1; j++){
      if(arr[j]>arr[j+1]){
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;       // [ 1, 2, 3, 4, 5, 8 ]
}

// mistake: in 2nd for of J --> it is n-i-1 and not n-1-i


// for array of objects, just in the baove if condition, put ( arr[j].id > arr[j+1].id )



const sortDescending = (arr) => {
  let n = arr.length;
  let temp;
  for(let i=0; i<n-1; i++){
    for(let j=0; j<n-1-i; j++){
      if(arr[j]<arr[j+1]){
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;       // [ 8, 5, 4, 3, 2, 1 ]
}


console.log(sortAscending([4,1,8,2,5,3]));
console.log(sortDescending([4,1,8,2,5,3]));