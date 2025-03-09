// 7. Move All Vowels to the End of the String?

const moveVowelsEnd = (word) => {
  let originalWord = word.toLowerCase();

  let vowels = '';
  let normal = '';

  for(let i=0; i<originalWord.length; i++){
    let val = originalWord[i];
    if('aeiouAEIOU'.includes(val)){
      vowels += val;
    }
    else{
      normal += val;
    }
  }
  return normal+vowels;
}


console.log(moveVowelsEnd('Programming'));