// In JavaScript, "this" keyword refers to the object that is currently executing a function or method

let user = {
  name: "John",
  price: 499,
  welcomeMessage: function () {
    console.log(`${this.name} welcome`);
    // here this refers to current obj
  },
};
user.name = "alex";
// console.log(user.welcomeMessage());

// here when we use "this" it refers to the global object
// console.log(this);
// In a browser, "this" will refer to the window object.
// but here we will get empty obj{}
// In Node.js, "this" will refer to the global object, which is global.

// NOTE: when we use "this" in standalone func
// it doesnt give us expected val ..eg
function one() {
  let userName = "Jack";
  console.log(this);
}
// one();

// let start with arrow funct
// Note - this behaves different in arrow fun
let two = () => {
  console.log(this);
};
two();
