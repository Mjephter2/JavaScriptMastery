// code sample and notes from 'Eloquent Javascript' by Marijn Haverbeke 3rd Edition page 360-361
const {createServer} = require("http");
let server = createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(`
    <h1>Hello!</h1>
    <p>You asked for <code>${request.url}</code></p>`);
  response.end();
});
server.listen(8000);
console.log("Listening! (port 8000)");
// If you run this script on your own machine, you can point your web browser at http://localhost:8000/hello 
// to make a request to your server. It will respond with a small HTML page.
// Making requests with Node’s raw functionality is rather verbose. There are much more convenient wrapper packages 
// available on NPM. For example, node-fetch provides the promise-based fetch interface that we know from the browser.