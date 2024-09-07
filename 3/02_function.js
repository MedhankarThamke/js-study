// scope
function one() {
  let name = "john";
  function two() {
    let age = "18";
    console.log(name);
    // this function can access the element of one function
  }
  two();
  //   console.log(age);//cannot be accessed
}
one();

// ------------interesting-------
//we can declare the function in two methd

//when we declare this way we can call the funct before the declaration

// console.log(addOne(2));
function addOne(num) {
  return num + 1;
}

const addTwo = function (num) {
  return num + 2;
};
// console.log(addTwo(3));
