// immediately invoked function execution(IIFE)
// simple word function which is executed immediately
// so that function can not be polluted by global scope
// ()()
// here first() is definition second() is execution
(function demo() {
  // this is named IIFE
  console.log("IIFE ");
})();

// we can even pass the argument as follow
((name) => {
  console.log(`Hello, ${name}`);
})("Peter");
