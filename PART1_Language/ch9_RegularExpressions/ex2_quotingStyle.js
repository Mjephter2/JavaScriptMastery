let quoteMark = /(^|\W)'|'(\W|$)/g;
let text = "Text wi'th sing'gl'e quotes. 'Actual quoted text.'";
console.log(text.replace(quoteMark, '$1"$2')); // -> Text wi'th sing'gl'e quotes. "Actual quoted text."