// string class
console.log("papa".replace("p", "m")); // -> mapa
// only first occurence of "p" is replaced with "m"
// firsrt argument can also be a regular expression
console.log("Borubu".replace(/[ou]/, "a")); // -> Barubu
// replace all occurences with option g
console.log("Borubu".replace(/[ou]/g, "a")); // -> Baraba

// power of replace
// match various groups and reorder them
// whole match can be referred to with $&
console.log("Play, Echo\nFly, Amazon\nFly, Dragon".replace(/(\w+), (\w+)/g, "$2 $1"));
/*
Echo Play
Amazon Fly
Dragon Fly
*/

// we can use a function in place of the second argument
let s = "the cia and the fbi";
console.log(s.replace(/\b(cia|fbi)\b/g, str => str.toUpperCase()));
// -> the CIA and FBI
// find another example on page 156
