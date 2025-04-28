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


/*

line 9 can also be written as
if(count>maxCount){
maxCount=count;
}



Explanation:
    I wrote the code like this --> maxCount = count;
If it is in this approach then, this means: "Every time I find a 1, I set maxCount to the current count."
Prblm:
Let’s say count = 2, then later count = 1, you'll still assign maxCount = 1, even though the previous streak was longer! So maxCount will not store the true maximum streak of 1s.

Example:
  arr = [1, 1, 0, 1]
  Your original code:
  count = 2, maxCount = 2
  Reset count = 0
  count = 1, and now maxCount = 1 (overwrites 2 😱)
  Result = 1 ❌ (Incorrect)

---->  You should only update maxCount if the current count exceeds the previous maxCount. 





*/
