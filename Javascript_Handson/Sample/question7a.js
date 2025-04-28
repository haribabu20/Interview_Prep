// 7. Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?


// according to the question, we'll get the 2 array in sorted format. But what if they provided in not sorted format ? then we have to use sort() or bubble sort[previous commit]


// DETAILED EXPLANATION FOR THIS CODING IS PROVIDED IN NOTES



const mergeUnsortedArrays = (arr1, arr2) => {
  arr1.sort((a,b)=>(a-b));
  arr2.sort((a,b)=>(a-b)); 
  let mergedArray = [];
  let i=0, j=0;

  while( i < arr1.length && j < arr2.length ){
    if(arr1[i]<arr2[j]){
      mergedArray.push(arr1[i]);
      i++
    }
    else{
      mergedArray.push(arr2[j]);
      j++
    }
  }

  while(i<arr1.length){
    mergedArray.push(arr1[i]);
    i++;
  }

  while(j<arr2.length){
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray
}


console.log(mergeUnsortedArrays([4, 3, 31, 0], [6, 30, 4]));
// Output: [0, 3, 4, 4, 6, 30, 31]