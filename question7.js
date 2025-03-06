// 7. Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?



//Method 1
const mergeSortedArraysEfficient = (arr1, arr2) => {
  let mergedArray = [];
  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  // Add remaining elements if any
  while (i < arr1.length) mergedArray.push(arr1[i++]);
  while (j < arr2.length) mergedArray.push(arr2[j++]);

  return mergedArray;
};
// 🔹 Example Test Cases
console.log(mergeSortedArraysEfficient([0, 3, 4, 31], [4, 6, 30])); 
// Output: [0, 3, 4, 4, 6, 30, 31]





// Method 2 - InBuild method

const mergeSortedArrays = (arr1, arr2) => {
  return arr1.concat(arr2).sort((a, b) => a - b);
};

// 🔹 Example Test Cases
console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])); 
// Output: [0, 3, 4, 4, 6, 30, 31]
