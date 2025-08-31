//🔥 3️⃣ Find the longest word in a sentence.


// 3 diff ways 🔥 


// Approach 1: Inbuilt method:


const sentences = 'This is gonna be a massives hitsjhbxashbxvasgux';
let result = sentence.split(' ').reduce((acc, word) => word.length > acc.length ? word : acc)
console.log(result) // hitsjhbxashbxvasgux

/*
reduce():

here acc will have no values firstly. 'word' will fetch the first element from array.
1st iteration --> acc = '' word = 'This'  --> 4 > 0 true condition. --. now storing 'this' into acc.
2nd iteration --> acc = 'This' word = 'is'  --> 2 > 4 false condition. 
3rd iteration --> acc = 'This' word = 'gonna'  --> 5 > 4 true condition. --. now storing 'gonna' into acc.


Main ---> if we want to start with ' ' in acc, then as 2nd parameter we can mention the same

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




const sentence = "This is a massive hit of the year"

function longestWord (sentence) {
    
    let word = '';
    let maxWord = '';
    
    for(let i=0; i<sentence.length; i++){
        if(sentence[i] === ' '){
            if(word.length > maxWord.length){
                maxWord = word;
            }
            word = '';
        }else{
            word += sentence[i];
        }
    }
    
    // check the last word (since no space comes after it)
    if(word.length > maxWord.length){
        maxWord = word
    }
    
    return `Max word in sentence: ${maxWord}`
}

console.log(longestWord(sentence))