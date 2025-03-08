// ⚡ 9️⃣ Flatten a nested array into a single-dimensional array.


const flattenArray = (arr) => {
  let result = [];
  
  arr.forEach(element => {
    if (Array.isArray(element)) {
      result = result.concat(flattenArray(element)); // Recursively flatten
    } else {
      result.push(element);
    }
  });

  return result;
};

console.log(flattenArray([1, [2, 3], [4, [5, 6]], 7]));
