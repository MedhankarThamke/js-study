// obj
// if we want to iterate over obj we can use
// forin loop (forof can be used but theres is other method for that)

let newObj = {
  js: "javascript",
  rb: "ruby",
  cpp: "c++",
  py: "python",
};
for (const key in newObj) {
  console.log(`${key}:- ${newObj[key]}`);
}

// map is not iterable
// also when we apply forin on array
// we get the index itself
