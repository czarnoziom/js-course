// 3) Wygeneruj tablicę zawierającą 10 liczb losowych.

// WITH SPREAD OPERATOR
let array1 = [...new Array(10)].map(x => {return Math.floor(Math.random() * 100)});
const a1 = [1,2,3];
// console.log(array1);

// WITH ARRAY.FROM
// let array2 = Array.from(Array(10), (x, index) => index + Math.floor(Math.random() * 100));

// console.log(array2);

module.exports = {array1};