// 👉 1. Find the 2nd Min & 2nd Max?



// all the if statement can come in same for loop !


const findSecondMinMax = (arr) => {
  let min = Infinity;
  let secondMin = Infinity;
  let max = -Infinity;
  let secondMax = -Infinity;

  for(let i=0; i<arr.length; i++){
    let val = arr[i];

    // ✅ Find Minimum & Second Minimum
    if(val < min){
      secondMin = min;
      min = val;
    }
    else if(val < secondMin && val !== min){
      secondMin = val;
    }

    // ✅ Find Maximum & Second Maximum
    if(val > max){
      secondMax = max;
      max = val;
    }
    else if(val > secondMax && val !== max){
      secondMax = val;
    }
  }

  return { secondMin, secondMax };
}

console.log(findSecondMinMax([5, 2, 8, 6, 1, 9, 3]));
