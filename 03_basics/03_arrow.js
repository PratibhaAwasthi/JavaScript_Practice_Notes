/*
let userName = {
  name: "Priyanka",
  age: 24,
  welcomeMessage: function () {
    console.log(`${userName.name}, Welcome Aboard!`);
    console.log(`${this.name}, Welcome Aboard!`); //we use this to avoid repeating
  },
};

console.log(userName.welcomeMessage());

//  this denotes current context, variable 

const value = function () {
  console.log(this.name);       //this denotes object. Here, there is no object so it will log undefined
};
*/

//Arrow function

const value = (num1, num2) => num1 + num2;

console.log(value(3, 4));
