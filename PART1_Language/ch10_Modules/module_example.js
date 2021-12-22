/**
 * code sample from 'Eloquent Javascript' by Marijn Haverbeke
 *      3rd Edition
 *      page 170
 */
const weekDay = function() {
    const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return {
        name(number){return names[number];},
        number(name){return names.indexOf(name);}
    }
}();

console.log(weekDay.name(weekDay.number('Sunday'))); // -> Sunday