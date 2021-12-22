/**
 * \d : any digit character
 * \w : an alphanumeric character ("word character")
 * \s : any whitespace character (space, tab, newline, ...)
 * \D : a character that is not a digit
 * \W : a nonalphanumeric character
 * \S : a non whitespace character
 * .  : any character except for newline
 */

let ImproperDateRegex = /0\d-[0-3]\d-\d\d\d\d \d\d:\d\d/;
console.log(ImproperDateRegex.test("01-30-2003 15:20")); // -> true

// invert a set of characters
let notBinary = /[^01]/;
console.log(notBinary.test("110000010001")); // -> false
console.log(notBinary.test("1110000200")); // -> true

