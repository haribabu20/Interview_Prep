// 9️⃣ Flatten a nested array into a single-dimensional array.


const flattenArray = (arr) => {
  let flatArr = [];
  arr.forEach((element)=>{
    if(Array.isArray(element)){
      flatArr = flatArr.concat(flattenArray(element));
    }
    else{
      flatArr.push(element);
    }
  })
  return flatArr;
}

console.log(flattenArray([1, [2, 3], [4, [5, 6]], 7]));




/*

Inside the if condition, we may think of adding push instead of concat. I did the same !


Push():

1) if we use push, then the elements will be pushed as is. -> [1,[2,3],[4,5,6]]. 3 elements will be pushes as is without flattening. It will not merge the array into individual element.

2) push() will modify the "original array" itself. Hence we don't want to reassign.

Hence we give code like

let flatArr = [];

flatArr.push(1);
flatArr.push(2);
flatArr.push([3, 4]);

console.log(flatArr); // [1,2,[3,4]]





concat():

1) concat() merges two arrays into a single array.
2) It automatically ------>  "unwraps the nested arrays into individual elements"
3) It will not modify the original array, rather it creates a new array like map and filter method.
4) so we have to assign the returned value to a new array.
5) that the reason we have to assign it back to its own array. which is nothing but a new array.

Hence we are giving the code like flatArr = flatArr.concat(flattenArray(element));

Example:

let arr1 = [1]
let arr2 = arr1.concat([2,3])
console.log(arr2);

O/P: [ 1, 2, 3 ]

*/
