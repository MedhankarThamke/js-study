//destructuring of object
const newObj = {
  college: "xyx university",
  department: "Science",
  course: "B.E computer science",
};

// we generally use newObj.name etc. but we can also use
const { college } = newObj;
console.log(college);
