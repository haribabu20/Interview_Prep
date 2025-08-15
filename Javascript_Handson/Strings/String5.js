// ✅ 5️⃣ Count the occurrences of each character in a string.


const countCharacters = (word) => {
  let count = {};
  for(let i=0; i<word.length; i++){
    if(count[word[i]]){         // instead of word[i], we can assign a value like char. So wherever we have word[i], we can replace that with char.
      count[word[i]]++;         // If character already exists, increase the count
    }
    else{
      count[word[i]] = 1;       // If character doesn't exist, set count as 1
    }
  }
  return count;
}

console.log(countCharacters("programming"));




/*

// Mistake:

I used count[word[i]] === 1; 


Explanation:

let obj = {};
obj["count"] = 1;
obj["count"]++;
console.log(obj["count"]); // 2

1) Make sure to provide a string value inside obj --> obj["count"]. 
    only then it provides the value for the key count.
    obj["count"] is fetching the value of the key value. 
    obj["count"]++ is increasing the value by 1 for the key count



 */
