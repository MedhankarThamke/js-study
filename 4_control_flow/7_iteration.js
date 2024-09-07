// reduce method
let nums = [1, 2, 3, 4];
let newNum = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0 /*this is the initial value */);
// console.log(newNum);

let shoppingCart = [
  { courseName: "js", price: 2999 },
  { courseName: "py", price: 499 },
  { courseName: "c++", price: 999 },
];
let totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice);
