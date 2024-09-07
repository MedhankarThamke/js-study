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
