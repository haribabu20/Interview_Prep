

/*
For In:

- Iterates thrgh the "keys" of the object/arrays.
- Best suited for iterating directly the Keys.
- Should be used for objects rather than arrays because it iterates over the object's properties.
 */


// object:
const obj1 = {a:1, b:2, c:3};
for(const val in obj1){
  console.log(val); // a b c
  console.log(obj1[val]); // 1 2 3
}

// array:
const arr = [10,20,30];
for(const value in arr){
  console.log(value); // 0 1 2
  console.log(arr[value]) // 10 20 30
}




/*
For Of:

- Iterates thrgh the "values" of the object/arrays.
- Best suited for iterating directly the values.
- cannot be used with objects directly, as objects are not iterable by default. use [object.entries(), object.keys(), object.value()] for objects.
 */

const ob = [100, 200, 300];
for(vall of ob){
  console.log(vall); // 100 200 300
}

const str = 'Hello';
for(const char of str){
  console.log(char); // H e l l o
}