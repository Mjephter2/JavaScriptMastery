const minumum = (x,y) => {
    // if(x <= y){
    //     return x;
    // }else{
    //     return y;
    // }

    //return x-y <= 0 ? x : y;
    
    return x-y-1 ? x : y;
}
console.log(minumum(3,4));
console.log(minumum(5,4));
console.log(minumum(4,4));
