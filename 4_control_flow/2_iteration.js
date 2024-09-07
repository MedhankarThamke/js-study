// for ,while, do while is quite common in all languages

// higher order array loop
// string, arr,map
// let us understand for of loop
let arr = [1, 2, 3, 4, 5];
let str = "hello";

// for (const val of str) {
//   console.log(val);
// }
// this forof loop can be used on string,map

// Maps
// learn more on MDN docs
// basically its store unique key value pair and in order
let newMap = new Map();
newMap.set("IN", "India");
newMap.set("PAK", "Pakistan");
newMap.set("SL", "Sri Lanka");
// console.log(newMap);

for (const [key, val] of newMap) {
  console.log(key, "-", val);
}
