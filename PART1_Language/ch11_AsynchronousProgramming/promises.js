// a promise is an asynchronous action that may complete at some point and produce
//  a value. It can notify who is interested when the value is available.

let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Received: ${value}`));

/*
 * Promise.resolve
 * Promise.then
 * Promise.all
*/