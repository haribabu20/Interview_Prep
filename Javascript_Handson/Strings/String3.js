//🔥 3️⃣ Find the longest word in a sentence.



// Approach 1: Inbuilt method:


const sentences = 'This is gonna be a massives hitsjhbxashbxvasgux';
let max = sentences.split(' ').reduce((a,b) => b.length > a.length ? b : a);
console.log(max) // hitsjhbxashbxvasgux


/*

1️⃣ sentence.split(' ')

"This is gonna be a massives hitsjhbxashbxvasgux"
→ ["This", "is", "gonna", "be", "a", "massives", "hitsjhbxashbxvasgux"]



2️⃣ .reduce((a, b) => b.length > a.length ? b : a)

Important:
      reduce() takes the array and reduces it to one value by applying a callback repeatedly.
      a → the “accumulator” (what we’re keeping as the current “winner” so far)
      b → the “current” word being compared


b.length > a.length ? b : a   
  ----> If the current word (b) is longer than the longest so far (a), replace a with b. Otherwise, keep a.

*/







// Approach 2: Semi InBuilt method

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








// Approach 3: Without using inbuilt method:


const sentence = 'This is gonna be a massives hitsjhbxashbxvasgux';

let word = '';

let maxLengthh = 0;
let maxWordd = '';


for(let i=0; i<sentence.length; i++){
    if(sentence[i] === ' '){
        if(word.length>maxLengthh){
            maxLengthh = word.length;
            maxWordd = word
        }
        word='';
    }else{
        word += sentence[i];
    }
}

if(word.length>maxLengthh){
    maxLengthh = word.length;
    maxWordd = word
}


console.log(maxWordd)
