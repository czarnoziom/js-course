// 6) Masz daną tablicę: const numbers = [2, 5, 7, 10, 34, 16, 879, 1].
// Napisz funkcję, która zwróci nową tablicę zawierającą tylko parzyste
// liczby z tablicy numbers.

const numbers = [2, 5, 7, 10, 34, 16, 879, 1];
// const numbers = [1];

// FILTER
const getEvenNumbersInArray = (array) => {
  const evenNumbersFilter = (no) => no % 2 == 0;
  return array.filter(evenNumbersFilter);
};

console.log(getEvenNumbersInArray(numbers));

module.exports = {numbers, getEvenNumbersInArray};
