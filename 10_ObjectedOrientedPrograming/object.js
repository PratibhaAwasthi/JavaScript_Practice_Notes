//Javascript has prototype behaviour. It access parents, grandparents and so until it received null value

function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5)); //5
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

//Everything is object in JS

function createUser(username, score) {
  this.username = username;
  this.score = score; //this=jis
}

createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.printMe();

/*
Here's what happens behind the scenes when the new keywords is used:

A new object is created: The new keyword initiates the creation of a new Javascript Object.

A prototype is Linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called the specified arguments and this is bound to





*/
