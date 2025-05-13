
/*
Javascript


//1
console.log(1+'1'+1) // 111


//2
console.log(1+1-'1') // 1


//3
let x={}, y={name:'satish'}, z={name:'prathik'};
x[y]={name:'Salman'};
x[z]={name:'shahrukh'};
console.log(x[y]);      // { name: 'shahrukh' }

// Explanation:

In JavaScript: 
* You are using objects (y and z) as keys in another object (x)
* Objects can’t be real keys in {} — they get converted to a string: "[object Object]"

So the code becomes like this inside:
x["[object Object]"] = { name: 'Salman' };   // first line
x["[object Object]"] = { name: 'shahrukh' }; // second line (OVERWRITES first)

console.log(x[y]);  // becomes x["[object Object]"]
{ name: 'shahrukh' }

Tip: In JS, if a object's key is an object, then implicitly JS converts the object as string. 


//4
console.log(NaN===NaN); // false
console.log(NaN==NaN); // false
console.log('a'-1) //NaN


//5
console.log(1>2<3); // true

1 > 2 < 3   →   false < 3   →   0 < 3   →   true
1 < 2 < 1   →   true < 1    →   1 < 1   →   false


//6
Function currying


//7
what is HOF, how you implemented that.


//8
Destructuring


//9
[x,y,...restof] = [10,20,30,40,50]
console.log(restof); // [ 30, 40, 50 ]


//10
Alternate option for ternary operator ?

  - if else
  - logical AND, OR --> [&& and !!]




// 11 ---> interesting qn
(i)
for(var i=0; i<3;i++){
  setTimeout(()=>console.log(i),2000);
}
output: 3 3 3

(ii)
for(let i=0; i<3;i++){
  setTimeout(()=>console.log(i),2000);
}
  output: 0 1 2

Explanation:

var is functional scope and let, const is blocked scope
- when we use var, each value on there iteration will get overriden. so at last we'll be having the value for 1 as 3. now it will print 3 for 3times.
- when let and const is used, on its iteration for 3 times, the values will be changing. hence we get 0 1 2 as output



// 12
let a=4, b=8;
[b,a] = [a,b]
console.log(a, b) // 8 4 --> concept behind this is array destructuring


// 13 
String reversal
  - with and without inbuilt methods
  - what is split, reverse and join methods are used as ?
  - split() - converts from string to array
  - reverse() - used to reverse the array of element
  - join() - converts array to string



// 14
How you'll merge 2 arrays ? 
  - concat()


// 15
what is Babel


// 16
what is undeclare and undefined


// 17
Hoisting


// 18
Promise









*/
