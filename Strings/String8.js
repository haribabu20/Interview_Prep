// Convert a sentence into an acronym (e.g., "National Aeronautics Space Administration" → "NASA").

const toAcronym = (sentence) => {
  let word = '';
  let acronym = '';
  for(let i=0; i<sentence.length; i++){
    if(sentence[i]===' '){
      acronym += word[0].toUpperCase();
      word='';
    }else{
      word += sentence[i];
    }
  }
  acronym += word[0].toUpperCase();
  return acronym;
}


console.log(toAcronym("National Aeronautics Space Administration")); // NASA



/*

Explanation:

  we'll loop through all the words and store that in a variable called words.
  we stop storing the character in words variable if we get any space.
  Then the first character we are fetching and changing to upperCase().
  then we store that too inside the acronym variable.

Important:
  
  only if we give the for loop, we only get the last word. But since we are not having any spaces at the end, we are not storing the last word's first name into acroyms.
  But the last word, i.e "Administration" word will be available in the variable word.
  Its just that we have to fetch the first word from the variable words and have to append that in the varable acronyms. 

  then finally we are returning the word acronyms.

 */
