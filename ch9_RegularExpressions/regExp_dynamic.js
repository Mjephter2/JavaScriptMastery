// dynamically creating regExp Objects
/**
 * code sample from 'Eloquent Javascript' by Marijn Haverbeke
 *      3rd Edition
 *      page 157-158
 */
let myName = "harry";
let text = "Harry is a suspicious character.";
let regexp = new RegExp("\\b(" + myName + ")\\b", "gi"); // gi is a flag for global insensitive
console.log(text.replace(regexp, "_$1_")); // -> _Harry_ is a suspicious character.
// in case name constains special characters, add backslashes before each of them
let myName2 = "weird[]name";
let text2 = "This guy weird[]name guy is super annoying";
let escaped = myName2.replace(/[\\[.+*?(){|^$]/g, "\\$&"); // ???
console.log(escaped); // -> weird\[]name
let regexp2 = new RegExp("\\b" + escaped + "\\b", "gi")
console.log(text2.replace(regexp2, "_$&_")); // -> This guy _weird[]name_ guy is super annoying
