

1. Finally [promise state]

  - A Promise chain has .then(), .catch(), and .finally().
  - finally() always runs, no matter whether the request was successful or failed.
  - It’s perfect for cleanup logic — like turning off a loading spinner.





2. JSON


JSON 

  - JAVASCRIPT OBJECT NOTATION
  - It’s a text format (string) used to represent data.
  - It looks like JavaScript objects, but it’s just plain text.
  - It’s language-independent, so it’s used everywhere (APIs, config files, databases, etc.).
  - Keys must always be in double quotes "..." and values can be in any format

  Ex:

    {
      "name": "Alice",
      "age": 25,
      "skills": ["JavaScript", "Python"],
      "active": true
    }


JSON.stringify(obj) → converts a JavaScript object into a JSON [string]
JSON.parse(jsonString) → converts a JSON string back into a JavaScript object




3. console.log()


console.log(typeof NaN)  // number
console.log(typeof null)  // object
console.log(typeof undefined)  // undefined

console.log(NaN == NaN) // false ---> NaN is not equal to anything, including itself
console.log(NaN === NaN) // false

console.log(''.length) // 0
console.log(' '.length) // 1





4. NaN

  isNaN("Hi") // true

      it tries to convert the string to number. it is not possible. So it is not a number and hence prints true.


  isNaN("123")      // false → can be converted to number
  isNaN("123abc")   // true → cannot be converted to number
  isNaN(100)        // false
  isNaN(NaN)        // true
  isNaN(console.log(2)) // 2


