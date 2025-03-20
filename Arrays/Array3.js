// 🔥 3️⃣ Merge two sorted arrays into a single sorted array.

// if they ask you to sort the 2 individual array first, then sort using sort() or bubble sort it


const mergeArray = (arr1, arr2) => {
  let mainArray = [];
  let i=0, j=0;

  while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
      mainArray.push(arr1[i]);
      i++;
    }else{
      mainArray.push(arr2[j]);
      j++;
    }
  }

  while(i<arr1.length){
    mainArray.push(arr1[i]);
    i++;
  }

  while(j<arr2.length){
    mainArray.push(arr2[j]);
    j++;
  }


  return mainArray;
}

console.log(mergeArray([1,3,5,7], [2,6,9]));



/*
arr1 = [1, 4, 7, 9]
arr2 = [2, 3, 5, 6, 8, 10]

The main loop runs until one of the arrays is exhausted. arr1[i] is undefined (because i=4 and arr1 has only 4 elements: index 0 to 3).
So arr1 is done, but arr2 still has 8, 10 left.

Without the extra loops:
---> Those 8, 10 are lost, never added. <----

hence we have that remaining element from arr1 and arr2


Mistakes:
1) while adding the remaining array elements, i used arr1[i].length instead of arr1.length











*/




