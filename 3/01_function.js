// parameter
function addNum(number1, number2) {
  return number1 + number2;
}
// console.log(addNum(3, 4)); //argument

// guess we dont know how many argument user will pass
// so then we can use rest(spread) operator ...
function addPrice(...num) {
  return num;
}
// console.log(addPrice(2, 3, 4));
// here we can send n no of argument

// passing obj in function
let userObj = {
  name: "john",
  age: "16",
};

function handlingObj(anyObj) {
  return `hello ${anyObj.name}, your age is ${anyObj.age}`;
}
console.log(handlingObj(userObj));
