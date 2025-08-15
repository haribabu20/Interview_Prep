// ⚡ 7️⃣ Move All Zeros to End Without Changing the Order of Other Elements


// Approach 1


//Normal
const arr = [1,2,12,0,4,0,0,0,2,2,3,0];

let zero = [];
let nonZero = [];

for(let i=0; i<arr.length; i++){
    if(arr[i]===0){
        zero.push(arr[i]);
    }else{
        nonZero.push(arr[i]);
    }
}

let original = nonZero.concat(zero);

console.log(original)




//Function
const moveZeroLast1 = (arr) => {
    let nonZero = [];
    let zero = [];
    for(let i=0; i<arr.length-1; i++){
        if(arr[i]===0){
            zero.push(arr[i]);
        }
        else{
            nonZero.push(arr[i]);
        }
    }
    return nonZero.concat(zero)
}

 
console.log(moveZeroLast1([0,1,5,2,0,5,0,8]));



// Approach 2
const moveZeroLast = (arr1) => {
  let index=0;
  let length = arr1.length;
  for(let i=0; i<arr1.length; i++){
    if(arr1[i] !== 0){
      arr1[index] = arr1[i];
      index++;
    }
  }

  while(index<length){
    arr1[index] = 0;
    index++;
  }

  return arr1;
}


console.log(moveZeroLast([0,1,5,2,0,5,0,8]));
