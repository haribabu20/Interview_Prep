// ✅ 5️⃣ Convert a string input into an object ("a.b.c", "someValue" → {a: {b: {c: "someValue"}}}).


const convertStringToObject = (str, value) => {

  let keys = str.split('.');

  let obj = {};
  let current = obj;

  for(let i=0; i<keys.length; i++){
    let key = keys[i];
    if(i === keys.length -1){
      current[key] = value;
    }
    else{
      current[key] = {};
      current = current[key];
    }
  }
  return obj

}


console.log(convertStringToObject("a.b.c", "someValue"));


// Bit tricky. Have provided the detailes explanation in notes.

/*

Explanation:

here the variable current is the major part of the program.
current here refers to where we are at. It is used for nesting down the object.
initially we allocate as { } for current. later we assign {a={}}.
Now current will move into the value of a, then to b and finally prints c with the given value -> {a:{b:{c:somevalue}}}


*/