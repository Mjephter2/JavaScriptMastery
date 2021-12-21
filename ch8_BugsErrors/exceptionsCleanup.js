/**
 * code sample from 'Eloquent Javascript' by Marijn Haverbeke
 *      3rd Edition
 *      page 137-138
 */

const accounts = {
    a: 100,
    b: 0,
    c: 20
};

function getAccount(){
    let accountName = prompt("Enter an account name");
    if(!accounts.hasOwnProperty(accountName)){
        throw new Error(`Bo such account: ${accountName}`);
    }
    return accountName;
}

// bad transfer method
function transferBad(from, amount){
    if(accounts[from] < amount) return;
    accounts[from] -= amount;
    accounts[getAccount()] += amount;
    // if last line encounters an exception, money is only removed and not transfered
}

// good transfer method that guarentees a complete transaction occurs
function transfer(from, amount){
    if(accounts[from] < amount) return;
    let progress = 0;
    try{
        accounts[from] -= amount;
        progress = 1;
        accounts[getAccount()] += amount;
        progress = 2;
    }finally{
        if(progress == 1){
            accounts[from] += amount;
        }
    }
}
// the finally block ensures that if amount was already removed from an account but an exception
// occured while retrieving the destination account, amount is added back to the origin account