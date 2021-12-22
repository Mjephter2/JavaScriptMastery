// + = 1 or more
// * = 0 or more
console.log(/'\d+'/.test("'123'")) // -> true
console.log(/'\d+'/.test("''")); // -> false
console.log(/'\d*'/.test("'123'")) // -> true
console.log(/'\d*'/.test("''")); // -> true
// ? = 0 or 1 time
// u is optional here
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour")); // true
console.log(neighbor.test("neighbor")); // true

// indicate a precise number of times
// {n} = n times
let pat = /\d{4}-\w{2}/;
console.log(pat.test("123-ab")); // -> false
console.log(pat.test("1234-ab")); // -> true

// indicate a "ranged" number of times
let time_12 = /\d{1,2}:\d{2}/
console.log(time_12.test("15:30")); // -> true

// grouping subexpresions
// the i at the end of the regular expressions makes it case insensitive
console.log(/(hoo+)+/i.test("hoohooohooooo")); // -> true
console.log(/(hoo+)+/i.test("HoohOoohooooo")); // -> true
