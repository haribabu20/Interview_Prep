// Prototype, Prototype chaining, Prototypal inheritance

/*


"Prototype": 
  - Prototype is an object that provides properties and methods to other objects.
[OR]
  - Every JS object has a hidden link to another object called prototype.

- If a object doesn't have a property or method, it will check its prototype.
- If the prototype doesn't have it, it will check the prototype's prototype, and so on until it reaches the top of the chain [object.prototype].



"Prototype chaining":
  - If a property/method isn't found on object, JS looks up the prototype chain.
  - The mechanism that allows JS to look up properties/methods from the objects is prototype chaining.
  - It searches for its properties/value untill it reaches the value null.



"Prototypal Inheritance":
  - Prototypal inheritance is a mechanism in JS that allows an object to inherit properties and methods from another object.
  - Unlike classic inheritance concept used where the classes inherit from classes, the JS objects will inherit directly


"Working":

  1. Every JS object has a prototype [an internal property].
  2. when you try to access a property or method on an object, JS first looks for it on object itself.
  3. if the property or method is not found, JS then looks at the objects prototype.
  4. If the prototype doesn't have it, the search continues up the prototype chain until it reaches null, which is the end of the chain.



 */



  // "Prototype chaining": 
          //---> Using "new" keyword to set prototype (Child.prototype = new Parent()).	


// constructor function
function Car(make, model){  
  this.make = make;
  this.model = model;
}

// Add a method to prototype
Car.prototype.drive = function(){
  console.log(`${this.make}, ${this.model} is driving`);
};

const car1 = new Car('Toyato', 'Corolla');
const car2 = new Car('Honda', 'Civic');

car1.drive();
car2.drive();


/*
Constructor function: 
  - A regular function that is used to create objects and should be named with upper Character.
  - Car function is a constructor function to create Car objects.
  - It asigns properties like make and model to car.
*/






// Prototypal inheritance - Object.create()

let animal = {
  speak: function(){
    console.log("Makes a sound")
  }
}
let lion = Object.create(animal);
lion.speak() // Makes a sound


/*
For Prototypal inheritance, we use Object.create() to make sure that the newly created object can inherit the methods/properties from its parent object.

For Prototype chaining, we had used 'new' operator to make sure that it chains the search for the property/method that we gave
*/