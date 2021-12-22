let numRegex = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/; // ???
console.log(numRegex.test("1.3e10"));
console.log(numRegex.test("."));