"use strict";

let regExp1 = /ca[rt]/;
console.log(regExp1.test("cat"));
console.log(regExp1.test("car"));

let regExp2 = /pr?op/;
console.log(regExp2.test("prop"));
console.log(regExp2.test("pop"));

let regExp3 = /ferr(et|y|ari)/;
console.log(regExp3.test("ferret"));
console.log(regExp3.test("ferry"));
console.log(regExp3.test("ferrari"));

let regExp4 = /\w*ious/;
console.log(regExp4.test("tedious"));
console.log(regExp4.test("ious"));

let regExp5 = /\s[,.:;]/;
console.log(regExp5.test(" ,"));
console.log(regExp5.test(" ."));
console.log(regExp5.test(" :"));
console.log(regExp5.test(" ;"));

let regExp6 = /.{7,}/;
console.log(regExp6.test("abcde"));
console.log(regExp6.test("abcdefg"));

let regExp7 = /\b[^\We]+\b/i;
console.log(regExp7.test("containsE"));
console.log(regExp7.test("conatains"));