// 10. Swapping the array elements according to the value provided

// done by myself in interview without refering any of its related prblm

let arr = [1,2,3,4,5,6,7,8,9,10];

const Swapping = (arr, a) => {
  let newArr = arr.splice(0,a);
  return arr.concat(newArr);
}


console.log(Swapping(arr, 2));