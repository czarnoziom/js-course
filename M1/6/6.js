// 6) Masz daną tablicę: const numbers = [2, 5, 7, 10, 34, 16, 879, 1].
// Napisz funkcję, która zwróci nową tablicę zawierającą tylko parzyste
// liczby z tablicy numbers.

const numbers = [2, 5, 7, 10, 34, 16, 879, 1];

// OPTION 1 - FILTER

let createEvenNumbersArray = array => {
  let filterArray = value => value % 2 == 0;
  const filtered = array.filter(filterArray);
  return filtered;
};

// TEST
console.log(createEvenNumbersArray(numbers));

// // OPTION 2 - NO FILTER

// let createEvenNumbersArray = (array) => {
//     const newArray = [];
//     for (i = 0; i <= array.length; i++) {
//         if (array[i] % 2 == 0) {
//             newArray.push(array[i]);
//         }
//     }
//     console.log(newArray)
// }

// // TEST
// createEvenNumbersArray(numbers);