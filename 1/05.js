// date
let newDate = new Date();
// console.log(newDate.toString());
// console.log(newDate.toDateString());
// console.log(newDate.toLocaleDateString());
// console.log(newDate.toLocaleString());

// we can also create the specific date as
let userSpecific = new Date(2024, 9, 31);
let userSpecific2 = new Date("10-31-2003"); //mm-dd-yyyy

// we can even change this value in ms as .getTime()
// console.log(userSpecific2.toLocaleString());

// we can even get the curr time in ms as
let anotherDate = Date.now();
// console.log(anotherDate);

// ctrl+SPACE to get suggestion
// console.log(newDate.toLocaleString("default", { weekday: "long" })); //we can do again customization
