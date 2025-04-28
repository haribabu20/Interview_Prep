//3. Write a program to remove duplicates from an array ?


// Method 1
const removeDuplicate1 = (arr) => {
  let originalArray = [];
  for(let i=0; i<arr.length; i++){
    if(originalArray.indexOf(arr[i])===-1){
      originalArray.push(arr[i])
    }
  }
  return originalArray
}


//Method 2
const removeDuplicate2 = (arr) => {
  return arr.filter((value, index) => arr.indexOf(value) === index)
}

//Method 3

const removeDuplicate3 = (arr) => {
  return [... new Set(arr)]
}


// console.log(removeDuplicate1([1,2,3,4,1,2,5,7,7,6]));
// console.log(removeDuplicate2([1,3,4,2,1,5,7,8]));
console.log(removeDuplicate3([1,2,1,3,5,6,4,8,5]))





/*

Explanations:

indexOf(val) will look into the first occurence of the element nd provide its "index"

Method 2: 

  filter will form a new array. we are providing the condition to form a new array.
  condition -> if the first occurence of the value's "index" is equal to the current index.

  model:
    Iteration 1 -> value=1 | index=0 | arr.indexOf(value)=0 ==> here condition is true, hence this value is added into new array
    Iteration 2 -> value=2 | index=1 | arr.indexOf(value)=1 ==> true condition
    Iteration 3 -> value=2 | index=2 | arr.indexOf(value)=1 ==> condition false. bcz current iteration index is 2 and the first occurence of the value is 1


    Method 3:

    if we simply give as --> new Set(arr), then it gives us the Set object as output like --> Set(5) { 1, 2, 3, 4, 5 }
    Now we want to convert this object to array, so for that we are using a spread operator. 
    Only if we give the spread operator, the code will return array value

    Model:

    --->  new Set([1,2,3]) -> set(3) {1,2,3}
    --->  ...new Set([1,2,3]) -> 1,2,3
    --->  [...new Set([1,2,3])] -> [1,2,3]

*/