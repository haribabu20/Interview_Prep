
// Spread operator -  used to spread/expand elements of arrays, objects, or arguments into individual components

let array1 = [1,2,3,4]
console.log(...array1); // 1 2 3 4 --> not in array, just a numbers




// Rest operator - Used to collect/aggregate multiple elements into an array or objects.

function func(a, b, ...rest){
  console.log(a);   // 1
  console.log(b);   // 2
  console.log(rest) // [1,2]
}

func(...array1);

