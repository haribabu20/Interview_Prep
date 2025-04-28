

/*

Generator Function:
  A generator function is a special type of function in JS that can be paused and resumed. It allows you to generate a sequence of value over time, instead of computing them all at once and sending them back in as a single result.

  gen.next() --> Executes generator until next yield
  yield --> pauses the generator function and returns the specified value
  done --> indicates whether the generator function completed ite execution. it return true, if there are no more yield statement


*/




function* generatorFunction(){
  console.log('First Yield');
  yield 1; // pauses here and return 1

  console.log('Second Yield');
  yield 2; // pauses here and return 2

  console.log('Third Yield');
  yield 3; // pauses here and return 3
}

const gen = generatorFunction();

console.log(gen.next());
/*
Output:
First Yield
{ value: 1, done: false }
 */


console.log(gen.next());
/*
Output:
Second Yield
{ value: 2, done: false }
 */


console.log(gen.next());
/*
Output:
Third Yield
{ value: 3, done: false }
 */


console.log(gen.next());
/*
Output:
{ value: 3, done: false }
{ value: undefined, done: true }
 */