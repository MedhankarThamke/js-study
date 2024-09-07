// for each loop
let newArr = ["js", "rb", "cpp", "py", "java"];

newArr.forEach((i) => {
  //   console.log(i);
});

// here when we use foreach on arr we need to send the callback fn
// this forEach doesnt return any value
// this forEach have many parameter

newArr.forEach((i, index, arr) => {
  //   console.log(i, index, arr);
});

// [{},{},{}] forEach can used to iterate over this obj
let arrObj = [
  { langName: "javascript", langExt: "js" },
  { langName: "C++", langExt: "cpp" },
  { langName: "Python", langExt: "py" },
];
arrObj.forEach((item) => {
  console.log(item.langName);
});
