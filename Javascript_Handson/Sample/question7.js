// Bubble Sort the given array

const BubbleSort = (arr) => {
  let n = arr.length
  for(let i=0;i<n-1;i++){
    for(let j=0;j<n-1-i;j++){
      if(arr[j]>arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp
      }
    }
  }
  return arr;
}


console.log(BubbleSort([4,7,1,9,3])); // [ 1, 3, 4, 7, 9 ]



/* 

Bubble Sorting:

  Bubble Sort repeatedly compares two adjacent elements and swaps them if they
    are in the wrong order. This process continues until the entire array is sorted.
  In first pass [i=0], 
    this will move the number 9 at end.
  In secind pass [i=1]
    this will move the number 7 at end-1
  Like this it will have 4 pass till [i=3]
    this will swap [3,1] to [1,3].

  Finally we get the expected output [ 1, 3, 4, 7, 9 ]

*/