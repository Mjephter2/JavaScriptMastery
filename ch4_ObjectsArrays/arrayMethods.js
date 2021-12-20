let todoList = [];
function remember(task){
    todoList.push(task);
} // add task at the end of todoList
function getTask(){
    return todoList.shift();
} // returns the first item in todoList
function rememberUrgently(task){
    todoList.unshift(task);
} // add task at the beginning of todoList

remember("groceries");
remember("pay bills");
console.log(todoList); // [ 'groceries', 'pay bills' ]
rememberUrgently("laundry");
remember("shop");
console.log(todoList); // [ 'laundry', 'groceries', 'pay bills', 'shop' ]

// search for a specific item
// returns the index of the first occurence of "laundry"
console.log(todoList.indexOf("laundry")); // 0
remember("laundry");
console.log(todoList); // [ 'laundry', 'groceries', 'pay bills', 'shop', 'laundry' ]
// returns the index of the last occurence of "laundry"
console.log(todoList.lastIndexOf("laundry")); // 4
// returns the index of the first occurence of "laundry" in the range starting from 3
console.log(todoList.indexOf("laundry", 3)); // 4
// returns the index of the first occurence of ""eat"" in the range starting from 1
console.log(todoList.indexOf("eat", 1)); // -1 ("eat" is not found in todoList)

// slice method
// create a new array from todoList starting from index 2 to index 3
let shortList1 = todoList.slice(2,4);
console.log(shortList1); // [ 'pay bills', 'shop' ]
// create a new array from todoList starting from index 2 to the end
let shortList2 = todoList.slice(2);
console.log(shortList2); // [ 'pay bills', 'shop', 'laundry' ]
// copy entire todoList array
let shortList3 = todoList.slice();
console.log(shortList3); // [ 'laundry', 'groceries', 'pay bills', 'shop', 'laundry' ]
