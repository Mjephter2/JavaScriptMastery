// we make use of ^ and $ to set boundaries
// /^\d+$/ matches a string consisting entirely of one or more digits
// /^!/ matches any string that starts with an exclamation mark
// /x^/ does not match any string (there cannot be any string before the
//              start of a string)

console.log(/cat/.test("concatenate")); // -> true
console.log(/\bcat\b/.test("concatenate")); // -> false