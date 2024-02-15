const user = {
  username: "Charger", //properties
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details from database"); //methods
    console.log(`Username: ${this.username}`);
    console.log(this);
  },
}; //Object literal, base unit

console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this;
}

// const userOne = User("hitesh", 12, true);
// const userTwo = User("Chai", 11, false); //Overwrites the first values

const userOne = new User("hitesh", 12, true);
const userTwo = new User("Chai", 11, false); //No Overwrites the first values

console.log(userOne);
console.log(userTwo);

/* 
new key word:
steps-
1. Creates empty object called instance.
2. new key words calls constructor function.
*/

//instance of
