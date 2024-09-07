// control flow refers to the what part of js code will be
// executed at the time
// this include
// if(){}, if(){}else{}, switch etc..

// truthy value
// true,"anything",1,[],{},function(){}
// falsy value
// false,"",0,-0,NaN,BigInt 0n,null, undefined

// interesting (nullish coalesing operator ??)
let val;
// val = 5 ?? 10;
// val = null ?? 10;
// val = undefined ?? 10;
// console.log(val);
// here if we get null or undefined we can assign some val accordingly

// dont confuse with terniary operator ?
let age = 19;
age >= 18 ? console.log("eligible") : console.log("not eligible");
