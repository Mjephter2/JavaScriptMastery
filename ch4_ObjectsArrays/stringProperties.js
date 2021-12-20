let kim = "Kim";
// allowed
kim.age = 88;
// but
console.log(kim.age); // undefined
// values of type string, number and boolean are (not objects)
//      immutable and cannot be changed

// slice, indexOf methods are similar to arrays
console.log("coconuts".slice(4, 7)); // nut
console.log("coconuts".indexOf("u")); // 5

// remove white space from the start and end of a string
console.log(" okay \n ".trim()); // okay

// pad with desired string
console.log(String(6).padStart(3, "0"));
console.log("6.".padEnd(4, "0"));

// split a string on every occurence of another string
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words); // [ 'Secretarybirds', 'specialize', 'in', 'stomping' ]
// join every string of words with "."
console.log(words.join(". ")); // Secretarybirds. specialize. in. stomping

// repeat a string
console.log("LA".repeat(3)); // LALALA

// length
console.log("abc".length); // 3
// retrieve character at an index
console.log("abc"[2]); // c
