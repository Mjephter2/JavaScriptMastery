// JSON = JavaScript Object Notation
// widely used as a data storage and communication format
// on the web, even in languages other than JavaScript

// JSON restrictions
// All property names have to be surrounded bu double quotes
// Only simple data expressions are allowed
//      - no function calls
//      - no bindings or anything that involves actual computations
//      - no comments

// JS provides JSON.stringify and JSON.parse to convert data to 
// and from the JSON format

let string = JSON.stringify({"squirel": false, "events": ["weekend"]});
console.log(string); // -> {"squirel":false,"events":["weekend"]}
console.log(JSON.parse(string).events); // => [ 'weekend' ]