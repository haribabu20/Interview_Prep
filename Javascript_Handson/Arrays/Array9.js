// 9️⃣ Flatten a nested array into a single-dimensional array.

// Method 1;
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

// mistake: haven't assigned flatArr in line 8 for flatArr.concat() line



// Method 2:
let arr = [1, [2, 3], [4, [5, 6]], 7]
let a = arr.flat(2); // flat() will flatten the array for one layer. here we have 2 layers, so given 2 as paramater for flat
console.log(a)



// Method 3:
let arrr = [[1,2],[3,4],[5,6]]
let aa = [...arrr[0],...arrr[1],...arrr[2]]
console.log(aa)
/*
arrr[0] is [1, 2]

...arrr[0] spreads it to 1, 2
Similarly for arrr[1] → 3, 4 and arrr[2] → 5, 6
So final result: let aa = [1, 2, 3, 4, 5, 6];



*/




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
