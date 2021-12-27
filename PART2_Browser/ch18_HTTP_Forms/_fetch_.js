// Sample code from 'Eloquent Javascript' by Marijn Haverbeke 3rd Edition page 315-316
fetch("example/data.txt").then(response => {
    console.log(response.status);
    // → 200
    console.log(response.headers.get("Content-Type"));
    // → text/plain
});

fetch("example/data.txt")
  .then(resp => resp.text())
  .then(text => console.log(text));
/* ->
data
data
data
*/

fetch("example/data.txt", {headers: {Range: "bytes=8-19"}})
  .then(resp => resp.text())
  .then(console.log);
/* ->
data
data
data
*/