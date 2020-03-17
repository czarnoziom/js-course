// 6) Masz daną tablicę: const numbers = [2, 5, 7, 10, 34, 16, 879, 1].
// Napisz funkcję, która zwróci nową tablicę zawierającą tylko parzyste
// liczby z tablicy numbers.

const numbers = [2, 5, 7, 10, 34, 16, 879, 1];

// OPTION 1 - FILTER

const getEvenNumbersInArray = array => {
  let evenNumbersFilter = no => no % 2 == 0;
  return array.filter(evenNumbersFilter);
};

// TEST
console.log(getEvenNumbersInArray (numbers));

// // OPTION 2 - NO FILTER

// let getEvenNumbersInArray  = (array) => {
//     const newArray = [];
//     for (i = 0; i <= array.length; i++) {
//         if (array[i] % 2 == 0) {
//             newArray.push(array[i]);
//         }
//     }
//     console.log(newArray)
// }

// // TEST
// getEvenNumbersInArray (numbers);