const countBs = (str) => {
    return countChar(str, "B");
}

const countChar = (str, chr) => {
    let count = 0;
    let index = 0;
    while(str[index] != null){
        if(str[index] == chr){
            count++;
        }
        index++;
    }
    return count;
}

console.log(countBs("BjfB_hdhd"));
console.log(countChar("BjfB_hdhd", "B"));

