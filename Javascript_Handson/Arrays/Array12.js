
/*
  1. I/P = ['name','country','people']. --> O/P = ['Name','Country','People']
*/
 


const input = ['name','country','people'];
const result1 = input.map((word) => word[0].toUpperCase() + word.slice(1))
console.log(result1) // [ 'Name', 'Country', 'People' ]






/*
  2. I/P ---> arr1 = ['ball','bat','catch'], arr2 = ['ball','bat']  O/P ---> ['catch']
*/

const arr1 = ['ball','bat','catch']
const arr2 = ['ball','bat']  

const result2 = arr1.filter((word) => !arr2.includes(word))

console.log(result2) // ['catch']





/*

Q15.
I/P: ['a','b','c'] , ['b','c','d']
O/P: ['a','d']
👉 Return elements that are not common (symmetric difference).

*/

const ar1 = ['a','b','c'];
const ar2 = ['c','b','d']

const resul1 = arr1.filter((char) => !arr2.includes(char))
const resul2 = arr2.filter((char) => !arr1.includes(char))

console.log(resul1.concat(resul2))




/*

Q16.
I/P: "hello world"
O/P: "dlrow olleh"
👉 Reverse the string.

*/

const str = "hello world"   
const result = str.split(' ').reverse()
const res = result.map( (word) => word.split('').reverse().join('') ).join(' ')
console.log(res) // dlrow olleh




/*

Q17.
I/P: ['red','blue','green']
O/P: 'red,blue,green'
👉 Convert array into a comma-separated string.

*/

const ar = ['red','blue','green']
const rs = arr.join(',')
console.log(rs)





/*

Q21.
I/P: ['abc','def','ghi']
O/P: ['cba','fed','ihg']
👉 Reverse every word in the array.

*/

const arr =  ['abc','def','ghi']

const ress = arr.map((word) => word.split('').reverse().join('') )

console.log(ress)







