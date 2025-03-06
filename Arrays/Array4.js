// 4️⃣ Find the maximum count of consecutive 1s in a binary array.

const maximumCount1 = (arr) => {
  let count = 0;
  let maxCount = 0;
  for(let i=0; i<arr.length; i++){
    if(arr[i]===1){
      count++;
      maxCount = Math.max(maxCount, count);
    }
    else{
      count=0;
    }
  }
  return maxCount;
}


console.log(maximumCount1([1,1,0,0,1,0,1,1,1,0,1,1,1,1,1]));