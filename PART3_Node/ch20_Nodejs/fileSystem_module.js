// code sample from 'Eloquent Javascript' by Marijn Haverbeke 3rd Edition page 359
let {readFile} = require("fs");
const {writeFile} = require("fs");

readFile("file.txt", "utf8", (error, text) => {
  if (error) throw error;
  console.log("The file contains:", text);
});

writeFile("graffiti.txt", "Node was here", err => {
  if (err) console.log(`Failed to write file: ${err}`);
  else console.log("File written.");
});