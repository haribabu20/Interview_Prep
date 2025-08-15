// ✅ 4️⃣ Remove duplicate characters from a string.



//Method 1 - without inbuilt method
const duplicateCharacter = (word) => {
  let arr = word.split('');
  let originalWord = '';
  for(let i=0; i<arr.length; i++){
    if(originalWord.indexOf(arr[i])===-1){
      originalWord += arr[i];
    }
  }
  return originalWord;
}
console.log(duplicateCharacter('programming'));



//Method 2 - with inbuilt method - OPTIMIZED VERSION
const duplicateCharaceter2 = (word) => {
  return [... new Set(word)].join('')
}
console.log(duplicateCharaceter2('programming'));





/*

indexOf() and includes() applies for both string and array

instead of 



*/