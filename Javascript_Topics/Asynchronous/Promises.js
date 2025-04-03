
//1.  Basic Example for Promise
const myPromise = new Promise((resolve, reject) => {
  val = false;
  if(val){
    resolve("Promise fulfilled");
  } else{
    reject("Promise rejected")
  }
});

myPromise
.then((message)=>{console.log(message)})
.catch((message)=>{console.log(message)})
// Output ---> Promise rejected







// 2. Another Example for Promise -> static methods
const RoleA = new Promise((resolve, reject) => {
  const val = true;
  if(val){
    setTimeout(resolve, 3000, "Hari Reached");
  }else{
    reject("Hari Haven't reached");
  }
})

const RoleB = new Promise((resolve, reject)=>{
  const val = true;
  if(val){
    setTimeout(resolve,1000,"Kishore Reached");
  }else{
    reject("Kishore Haven't reached");
  }
})

const RoleC = new Promise((resolve, reject)=>{
  const val = true;
  if(val){
    setTimeout(resolve,2000,"Sam reached");
  }else{
    reject("Sam haven't reached")
  }
})


// all
Promise.all([RoleA,RoleB,RoleC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))
//[ 'Hari Reached', 'Kishore Reached', 'Sam reached' ]


// allSettled
Promise.allSettled([RoleA,RoleB,RoleC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))
/*
[
  { status: 'fulfilled', value: 'Hari Reached' },
  { status: 'fulfilled', value: 'Kishore Reached' },
  { status: 'fulfilled', value: 'Sam reached' }
]*/



// refer doc for more clarity