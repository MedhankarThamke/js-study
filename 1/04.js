// here we are gonna talk about the math and num
let num = 100;
let num2 = new Number(101);
// console.log(num);
// console.log(num2);

// .toFixed() can be used to show the precision
// console.log(num2.toFixed(2));

// console.log(num2.toString);
// .toPrecision(), .toLocaleString('en-IN')

//-------------------
// there are many method in Math
// Some are .abs(),.round(),.ceil(),.floor()
// console.log(Math.sqrt(2).toFixed(2));

// one of the crucial part of math is random method
// console.log(Math.random());

// // to get from 1 to 10
// console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
