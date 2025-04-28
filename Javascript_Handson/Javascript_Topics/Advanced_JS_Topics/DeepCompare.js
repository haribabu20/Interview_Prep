// 🔥 2️⃣ Deep object comparison function.

/*

Normally if we compare 2 object which is having same key and value, we used to get the output as false. Beacuse we are comparing the reference of both the objects.
Ex: obj1 = {a:1}    |   obj2 = {a:1}
    obj1 === obj2
             O/P --->  false

"Deep Object Comparison:"

  Check every single key and value (even nested objects) and ensure both objects have the same values.

✅ Ignore the reference, but compare the values deeply. 💯🔥

👉 💯 There are 2 types of object comparison:

1) Shallow Comparison - checks only the 1st level keys & values
2) Deep Comparison - checks every nested objects deeply

 */


const deepCompare = (obj1, obj2) => {

  if(typeof obj1 !== 'object' || typeof obj2 !== 'object'){
    return obj1 === obj2;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if(keys1.length !== keys2.length) 
    return false;

  for(let key of keys1){
    if(!deepCompare(obj1[key],obj2[key])) 
      return false
  }

  return true

}


let obj1 = {
  name: "Hari",
  age: 24,
  address: {
    city: "Chennai",
    state: "Tamil Nadu"
  }
}

let obj2 = {
  name: "Hari",
  age: 24,
  address: {
    city: "Chennai",
    state: "Tamil Nadu"
  }
}

console.log(deepCompare(obj1, obj2)); // true



// ✅ Test Case 2 - Different objects
let obj3 = {
  name: "Hari",
  age: 24,
  address: {
    city: "Chennai",
    state: "Kerala"
  }
}

console.log(deepCompare(obj1, obj3));  // ✅ Output: false
