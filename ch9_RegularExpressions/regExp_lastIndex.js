/**
 * code sample from 'Eloquent Javascript' by Marijn Haverbeke
 *      3rd Edition
 *      page 158-159
 */
// global or stycky options must be enabled
let pattern = /y/g;
pattern.lastIndex = 3;
let match = pattern.exec("xyzzy"); //
console.log(match.index); // -> 4
console.log(pattern.lastIndex); // -> 5

// global vs sticky
// when sticky is enabled, the match will succeed if it starts directly at lastIndex
let global = /abc/g;
console.log(global.exec("xyz abc")); // -> [ 'abc', index: 4, input: 'xyz abc', groups: undefined ]
let sticky = /abc/y;
console.log(sticky.exec("xyz abc")); // -> null

// be careful when using a shared regular expression for multiple exec calls
let digit = /\d/g;
console.log(digit.exec("here it is : 1")); // -> [ '1', index: 13, input: 'here it is : 1', groups: undefined ]
console.log(digit.exec("and now: 1")); // -> null