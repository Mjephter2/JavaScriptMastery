/**
 * code sample from 'Eloquent Javascript' by Marijn Haverbeke
 *      3rd Edition
 *      page 160
 */

let input = "A string with 3 numbers in it... 42 and 88.";
let number = /\b\d+\b/g;
let match;
while(match = number.exec((input))){
    console.log("Found", match[0], "at", match.index);
} // lastIndex is updated after each iteration
/* ->
Found 3 at 14
Found 42 at 33
Found 88 at 40
*/