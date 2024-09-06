// array
// let newArr = [1, 2, 3, 4, "medha"];
// shallow copy(share the same refrence) and deep copy(doesnt share the same refrence)

let newArr2 = [1, 2, 3, 4];
let newArr3 = new Array("a", "b", "c", "d");
// console.log(newArr3.length);

// array method
// newArr3.push("e"); //to add element at last
// newArr3.pop(); //to remove last el
// newArr3.unshift("m", "e"); //to add element at start
// newArr3.shift(); //to remove the element at start
// console.log(newArr3.includes("m")); // see if the arr has that ele returns boolean val
// newArr3.indexOf("a"); //give the index of el mentioned (if not in arr gives -1)
let newArr4 = newArr3.join(); //joins the el of arr and gives the STRING val.

console.log(typeof newArr4);

//--------------------
// slice and splice
let arr2 = [1, 2, 3, 4, 5];
console.log("a.", arr2);

console.log("this is slice method", arr2.slice(0, 2));
console.log("b.", arr2);

console.log("this is splice method", arr2.splice(0, 2));
console.log("c.", arr2);

// the basic difference is when we use splice the original arr is manipulated
