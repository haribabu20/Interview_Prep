// ✅ 5️⃣ Count the occurrences of each character in a string.


const countCharacters = (str) => {
  let count = {};  // Creating an empty object

  for(let i=0; i<str.length; i++) {
    let char = str[i];  // Taking each character from the string

    if(count[char]) {  
      count[char]++;   // If character already exists, increase the count
    } else {
      count[char] = 1; // If character doesn't exist, set count as 1
    }
  }

  return count;
}

console.log(countCharacters("programming"));




/*

Explanation:

let obj = {count:1};
obj["count"]++;
console.log(obj["count"]); // 2

1) Make sure to provide a string value inside obj --> obj["count"]. 
    only then it provides the value for the key count.
    obj["count"] is fetching the value of the key value. 
    obj["count"]++ is increasing the value by 1 for the key count



 */
