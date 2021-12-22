// get current date and time
console.log(new Date().toString());
// create an object with a specific time
console.log(new Date(2009, 11, 21).toString());
console.log(new Date(2009, 11, 21, 10, 59, 10, 950).toString());

// annoyingly 
// month numbers start from 0
// day numbers start start at 1

// .getTime() returns the timestamp (number of ms) since 1970
console.log(new Date().getTime());
console.log(Date.now().toString());
// create a date from timestamp
console.log(new Date(1640112935208).toString());
// -> Tue Dec 21 2021 13:55:35 GMT-0500 (Eastern Standard Time)

function getDate(str){
    let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(str);
    return new Date(year, month - 1, day);
}
console.log(getDate("1-30-2003").toString());
console.log(getDate("100-1-30000").toString()); // oops
// -> Sun Dec 01 2999 00:00:00 GMT-0500 (Eastern Standard Time)
// we need boundaries to avoid issue above