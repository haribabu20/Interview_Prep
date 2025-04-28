
/*
Closure:
  A Closure in javascript is a concept where the inner function remembers and can access the outer function even after the outer function has executed. It is mainly used for encapsulation purposes.
*/


// Basic Example of Closure
function outerFunc(){
  let count = 0;
  return function(){
    count++;
    console.log(count);
  }
}
const func = outerFunc();
// func();



// Cash Depost and WithDrawl process using closure concept
function banking(amount){
  let balance = amount; // private variable

  return {
    deposit(amnt){
      balance += amnt;
      console.log(`Deposited amount is ${amnt} and the total balance is ${balance}`);
    },
    withdrew(amnt){
      if(amnt>balance){
        console.log("Insufficient balance");
      }
      else{
        balance -= amnt;
        console.log(`Withdrewed amount is ${amnt} and the total balance is ${balance}`);
      }
    },
    viewBalance(){
      console.log(`Balance amount is ${balance}`);
    }
  }
}

let bank = banking(1000);
bank.deposit(500);
bank.withdrew(300);
bank.viewBalance();

/*
Output:
Deposited amount is 500 and the total balance is 1500
Withdrewed amount is 300 and the total balance is 1200
Balance amount is 1200
*/


/*
So in the above program, you can see that we are returning a object. deposit, withdrew, viewBalance are the methods present inside the object that is returned upon calling bank.

We cannot straightly call or modify the balance. Only by calliing the inner functions/methods, we can access the balances and this concept is called as the closure.
Here where the closure concept comes is, the outer function banking got executed successfully and then we are calling the inner function. this inner function here can access the variable balance from the outer function and has its control on changing/modifying the values. so this concept is called closure

Tips:
Closures allow inner functions to remember variables from their outer function.
Encapsulation is achieved by restricting direct access to balance.
Methods act as a controlled way to interact with balance.


*/