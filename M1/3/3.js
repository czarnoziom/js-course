// 3) Wygeneruj tablicę zawierającą 10 liczb losowych.

// OPTION 1 - FOR LOOP
array = [];

for (i = 1; i <= 10; i++) {
    array.push(Math.floor(Math.random() * 100));
}

console.log(array);

// // OPTION 2 - MAP

// let array1 = new Array(10);
// for (i = 1; i <= 10; i++) {
//   array1.push(1);
// }

// let array2 = array1.map(
//   (x) => {
//     return x + Math.floor(Math.random() * 100);
//   }
// );

// console.log(array2);
