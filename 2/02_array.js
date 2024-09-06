// array methods
let marvel_hero = ["thor", "captain america", "spiderman"];
let dc_hero = ["superman", "wonder woman", "batman"];

// marvel_hero.push(dc_hero);
// console.log(marvel_hero);
// here the interesting thing is the whole array is pushed(check the op)

// to get the required op we can use the .concat method
// but this wont change the original arr we can store in the
//new variable

// let newArr = marvel_hero.concat(dc_hero);
// console.log(newArr);

// spread -- when we use this the array elements are separated

//here what we are doing is separating all the individual el and storing it in new arr
// const newArr2 = [...marvel_hero, ...dc_hero];
// console.log(newArr2);

// .flat is another method which gives us the all the subarray el concat together
let demoArr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 12, 13]]];
let arr = demoArr.flat(2); //we can also add the depth(infinity) upto which we wanna merge
console.log(arr);

// we can check if the recieved is array as
console.log(Array.isArray(demoArr));

//we can also convert the received to array as
// console.log(Array.from("MEDHANKAR"));
// console.log(Array.from({ name: "MEDHANKAR" })); // interesting we will just get the empty array

// therre is also .of method which can be use to combine the variable in array as
let num1 = 100;
let num2 = 200;
let num3 = 300;
// console.log(Array.of(num1, num2, num3));
