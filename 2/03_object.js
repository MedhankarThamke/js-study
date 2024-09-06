// object
// Object.create;//this is constructor method (singleton)

//we can use symbol as key as  follow
let mySym = Symbol("unique");

let myObj = {
  name: "medhankar",
  [mySym]: "key1",
  age: 21,
  isLogged: true,
  lastLogins: ["Monday", "tuesday"],
};

//to access the object values
console.log(myObj.name);
console.log(myObj["age"]); //since behind the scene key is also stored as string
console.log(myObj[mySym]); //to use symbol as the key

//if we dont want anyone to chnge the value we can freeze as
// Object.freeze(myObj);
// console.log(myObj);
