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

