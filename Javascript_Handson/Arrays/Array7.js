// 8️⃣ Extract unique objects from an array of objects.

const arr = [
  {name: 'sai'},
  {name: 'kumar'},
  {name: 'dinesh'},
  {name: 'sai'},
  {name: 'kumar'},
  {name: 'kishore'}
]


const getUniqueObjects = (arr) => {
  const uniqueSet = new Set();
  return arr.filter(obj => {
    if(!uniqueSet.has(obj.name)){
      uniqueSet.add(obj.name);
      return true // elememt will be added in new array only if the return is true.
    }
    return false;
  })
  
}


console.log(getUniqueObjects(arr))



/* 

mistake:
1. forgot to include return statement inside and outside if condition
2. forgot to give as obj.name, instead i'm giving as obj



Explanation:

filter() will only store the value in an array automaticaly if the condition provided in callback function is true.
So, If you see in if(), immediately after adding the object, i gave return as true.
If condition is false, then we return false. [obj is already available in set].

why to use Set here ? 
  bcz if you see in the if condition, it is easy to check for the duplicate of elements in uniqueSet object by using "has" property.
  This will make sure that there is no duplication in array of object. if any duplicate found, then it fails the condition and skips adding that element into the new array

Mistake
1) i've given arr instead of arr.name

*/
