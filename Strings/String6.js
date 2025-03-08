// ⚡ 6️⃣ Find the most frequent character in a string.


const frequentCharacter = (word) => {
  let count = {};
  let maxChar = '';
  let maxCount = 0;
  for(let i=0; i<word.length; i++){
    let char = word[i];
    if(count[char]){
      count[char]++;
    }
    else{
      count[char] = 1;
    }
    if(count[char]>maxCount){
      maxCount = count[char];
      maxChar = char;
    }
  }
  return maxChar;
}

console.log(frequentCharacter("apple"));   // p
console.log(frequentCharacter("banana"));  // a
console.log(frequentCharacter("programming"));  // g


// same question as before, but here we are validating the maxCount.