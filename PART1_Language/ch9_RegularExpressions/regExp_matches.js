// exec method returns null if no match was found
// and an object with information about the match otherwise
let match = /\d+/.exec("one two 100");
console.log(match); // -> [ '100', index: 8, input: 'one two 100', groups: undefined ]
console.log(match.index); // -> 8

// string has a similar method
console.log("one two 100".match(/\d+/)); // true

let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));