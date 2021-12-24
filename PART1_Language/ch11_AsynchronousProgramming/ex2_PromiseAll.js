const Promise_All = async (promises) => {
    let received = [];
    return new Promise((resolve, reject) => {
        if(promises.length == 0) resolve(received);
        let count = 0;
        while(count < promises.length){
            promises.then(value =>{
                received.push(value);
            }).catch(reject);
            count++;
        }
    })
}