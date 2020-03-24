// 7) arraye mają zbudowane metody .map .filter i .reduce.
// Zbuduj 3 funkcję map(array, mapFn), filter(array, filterFn)
// i reduce(array, reduceFn) w których stworzysz własną implementację
// funkcji wbudowanych. Twoje funkcje mają działać tak samo jak te wbudowane

const numbers = [1, 2, 3];

const reduce = (array, callback, initialValue) => {
  let acc = initialValue === undefined ? 0 : initialValue;
  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i], i, array);
  }
  return acc;
};

// const multiply = (a, b) => {
//   return a * b;
// };

const add = (a, b) => {
  return a + b;
};

const doubled = (total, amount) => {
  total.push(amount * 2);
  return total;
};

// // TEST 1
// console.log(reduce(numbers, multiply));
// TEST 2
console.log(reduce(numbers, add));
// TEST 3
console.log(reduce(numbers, doubled, []));