// 2 ways to initialize a regular expression

// 1 using the RegExp constructor
let re1 = new RegExp("abc");

// 2 using a literal value
let re2 = /abc/;

// testing for  matches
console.log(re1.test("abcde")); // -> true
console.log(/abc/.test("abxde")); // -> false
// match all string that contain a digit
console.log(/[0123456789]/.test("in 1992")); // -> true
console.log(/[0-9]/.test("in 1992")); // -> true


