// Singleton object using constructor method

// let newObj = new Object(); //singleton object
let newObj = {};
newObj.name = "alex";
newObj.id = 1542;
newObj.isLogged = false;

// we can even add(nest) the obj inside obj as
let randomUser = {
  detail: {
    name: "john",
    parentName: {
      father: "demo1",
      mother: "demo2",
    },
  },
  class: 10,
};
// console.log(randomUser.detail.parentName.father);

// we can even combine more than 2 obj using assign as follow
let obj1 = { 1: "a", 2: "b" };
let obj2 = { 3: "c", 4: "d" };
let obj3 = { 5: "e", 6: "f" };

// let obj4 = Object.assign({}, obj1, obj2, obj3); //important {} is target and all other is source
let obj4 = { ...obj1, ...obj2, ...obj3 }; //we generally gonna use spread operator

// console.log(obj4);

// if we want the object key we can use Object.keys(obj name)
// note it returns array
// console.log(Object.keys(randomUser));
// similarly there is .values and .enteries

// NOTE -we can even check if the object has the property as
console.log(randomUser.hasOwnProperty("detail"));
