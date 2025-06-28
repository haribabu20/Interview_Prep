// 🔥 4️⃣ Find the maximum and minimum number in an array.


const minMax = (arr) => {
  let min = Infinity;
  let max = -Infinity;
  for(let i=0; i<arr.length; i++){
    if(arr[i]<min){
      min = arr[i];
    }
    if(arr[i]>max){
      max=arr[i]
    }
  }
  return {min, max}  // with shorthand property [when key and value are equal]
}


console.log(minMax([0,33,42,94,-23,-24]));

