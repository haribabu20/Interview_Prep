// ⚡ 7️⃣ Check if two strings are anagrams (i.e., if one string can be formed by rearranging another).

const isAnagram = (str1, str2) => {

  if(str1.length !== str2.length) return false

  let count1 = {};
  let count2 = {};

  for(let i=0; i<str1.length; i++){
    let char1 = str1[i];
    if(count1[char1]){
      count1[char1]++;
    }
    else{
      count1[char1] = 1;
    }
  }

  for(let i=0; i<str2.length; i++){
    let char2 = str2[i];
    if(count2[char2]){
      count2[char2]++;
    }
    else{
      count2[char2]=1;
    }
  }

  for(let i=0; i<str1.length; i++){
    let char = str1[i];
    if(count1[char] !== count2[char]){
      return false
    }
  }

  return true;

}

console.log(isAnagram('listen', 'silent')); // ✅ true
console.log(isAnagram('hello', 'world'));   // ❌ false
console.log(isAnagram('apple', 'papel'));   // ✅ true 
console.log(isAnagram('car', 'rat'));       // ❌ false



/*

Explanation: it is similar to the occurence of all the character. Its just that we have to compare both the objects whether they have same key and same value for all the occurence.

for comparison, we firstly have to take any one object [count1] and with that we have to compare the other one. here we compared the count 1's object and key with count2.

that's what the last for loop does. lets walkthrough for 1 iteration.

In count1, we have 'l' as first occurence. so that l will be checked in count2 as well. it checks for the value of the key 'l' in count2. if all ok then it returns true.


Basically we are having 2 checks. if 2 checks fails then immediately we return as true. If not then we return as false. 
first check is the length of both string given as O/P.
second check is in 3rd for loop where it checks for the value of all the key is same or not. 

post all the check, we are returning as true at last.

 */
