/**
 * code sample from 'Eloquent Javascript' by Marijn Haverbeke
 *      3rd Edition
 *      page 162-163
 */
// you must add a 'u' option (Unicode) to a regular expression to make it treat
// non 'word characters' properly
console.log(/🍎{3}/.test("🍎🍎🍎")); // -> false
console.log(/<.>/.test("<🍎>")); // -> false
console.log(/<.>/u.test("<🍎>")); // -> true

// read on \p option