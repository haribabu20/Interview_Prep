//🔥 3️⃣ Find the longest word in a sentence.

const maxLength = (sentence) => {
  let maxLen = 0;
  let maxWord = '';
  const arr = sentence.split(' ');
  for(let i=0; i<arr.length; i++){
    if(arr[i].length>maxLen){
      maxLen = arr[i].length;
      maxWord = arr[i];
    }
  }
  return maxWord;
}

console.log(maxLength('This is gonna be a massivessss hitsjhbxashbxvasgux'));