let table = [0,1,2,3];

for(let i = 0; i < table.length; i++){
    let entry = table[i];
    console.log(entry);
};
// 0
// 1
// 2
// 3

// moder Javascript
for(let entry of table){
    console.log(entry);
};
// 0
// 1
// 2
// 3
