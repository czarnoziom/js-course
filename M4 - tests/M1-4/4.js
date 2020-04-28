// 4) Umieść 10 tablic wygenerowanych w zadaniu 3, w jednej tablicy.

// WITH SPREAD OPERATOR
let array1 = [...new Array(10)].map(x =>{
    return [...new Array(10)].map(x => {
        return Math.floor(Math.random() * 100)
    })});

// console.log(array1);

module.exports = {array1};