// ⚡ 7️⃣ Move All Zeros to End Without Changing the Order of Other Elements


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