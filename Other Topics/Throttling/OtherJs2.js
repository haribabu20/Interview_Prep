
// When doing handson, do first for without throttling. Then we can enhance for with throttling handson.


/*
Quick recap:

1) we have to pass only the reference to the event listeners.
2) if we need to pass any argument to the function, then we cannot use the reference. then in that case we have to introduce the normal function call.
(or)
We can use the arrow function.
3) But if you're using the normal call, then make sure that the return statement for that funciton call is the function which we need to execute when event triggered

👉 And now the function inside return will only be triggered when the button is clicked.

This is the logic behind the problem for throttling.
*/




// WITHOUT THROTTLING:
/*
const likeButton = document.getElementById('likeButton');
const likeCount = document.getElementById('likeCount');

let sum = 0;

const increaseCount = () => {
  sum++;
  likeCount.innerHTML = `Likes: ${sum}`;
  console.log(sum)
}

likeButton.addEventListener('click', increaseCount);
*/



// WITH THROTTLING

const likeButton = document.getElementById('likeButton');
const likeCount = document.getElementById('likeCount');

const throttling = (func, delay) => {
  
  let flag = true;

  return function () {      // provided reason why return is used here
    if(flag){               // explained the logic below.
      func();
      flag=false;
      setTimeout(()=>{
        flag=true;
      },delay)
    }
  }
}

let sum=0;

const increaseCount = () => {
  sum++;
  likeCount.innerHTML = `Count - ${sum}`;
  console.log('count = ', sum);
}

likeButton.addEventListener('click', throttling(increaseCount, 2000));



/*

Lets discuss about the logic behind.
1) i have done the same think like what we saw in normal flow of button click event handler.
2) its just that i introduced the concept called throttling.
3) This concept is similar to HOC.
4) This throttling is somewhat related to function currying as well.
    Here we return a function from another function in throttling, but in currying, we break down a single function into multiple smaller functions.
    "Function Currying:"
    function add(a,b,c){
      return a + b + c;
    }
    console.log(add(2,3,4)); // 9
5) Now lets look into the logic.
Our motive is to call the "increaseCount" function, only in 2 second interval.
Here if we use setInterval, then in every 2 second interval it starts executing irrespective of whether the function is called. Hence we are using setTimeOut().

6) If flag = true, we call the function and immediately we make flag = false, meaning we are not calling the function. Then when to call the function again ?
Again after 2 seconds. So for that we use setTimeout() and inside that we put flag=true;

7) we do all these activities inside the return function

*/