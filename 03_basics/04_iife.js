//Immediately Invoked Function Expression (IIFE)

const a = 0;
console.log(a);

(function dbconnected() {
  const a = 12;
  console.log(a);
  console.log("DB Connected!");
})(); //necessary to add semicolon

(() => {
  const a = 17;
  console.log(a);
  console.log("DB disconnected!");
})();
