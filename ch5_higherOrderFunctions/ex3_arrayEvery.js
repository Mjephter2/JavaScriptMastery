let values = [0, 2, 6, 5, 10];

const every = ( array, predicate ) => {
    for ( let item of array ){
        if( !predicate(item) ) return false
    }
    return true;
}

console.log(every(values, (m) => m % 2 == 0)); // false

const every_with_some = (array, predicate) => {
    let leftIndex = array.length - 1;
    while(leftIndex >= 0){
        if(!array.slice(leftIndex, leftIndex + 1).some(predicate)){
            return false;
        };
        leftIndex--;
    }
    return true;
}

console.log(every_with_some(values, (m) => m % 2 == 0)); // false