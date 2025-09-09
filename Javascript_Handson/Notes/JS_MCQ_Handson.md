

1. console.log()

console.log(typeof NaN)  // number
console.log(typeof null)  // object
console.log(typeof undefined)  // undefined

console.log(''.length) // 0
console.log(' '.length) // 1




2. NaN

  isNaN("Hi") // true

      it tries to convert the string to number. it is not possible. So it is not a number and hence prints true.

  isNaN("123")      // false → can be converted to number
  isNaN("123abc")   // true → cannot be converted to number
  isNaN(100)        // false
  isNaN(NaN)        // true
  isNaN(console.log(2)) // 2




3. boolean

true/true   --> 1/1 = 1
true/false  --> 1/0 = Infinity
false/true  --> 0/1 = 0
false/false --> 0/0 = NaN


4. 

{} == {} --> false
{} === {} --> false
NaN == NaN --> false
NaN == NaN --> false





