// let us try to understand maps

let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newNumsArr = myNums.map((num) => num + 1);

// chaining concept
let newNumsArr = myNums
  .map((num) => {
    return num * 20;
  })
  .map((num) => {
    // get the upper map operated num
    return num + 2;
  })
  .filter((num) => {
    return num > 50;
  });

// in simple word
// map are used to perform operation on array el
// filter gives back the new array based on condition
console.log(newNumsArr);
