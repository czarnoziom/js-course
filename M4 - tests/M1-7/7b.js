// 7) arraye mają zbudowane metody .map .filter i .reduce.
// Zbuduj 3 funkcję map(array, mapFn), filter(array, filterFn)
// i reduce(array, reduceFn) w których stworzysz własną implementację
// funkcji wbudowanych. Twoje funkcje mają działać tak samo jak te wbudowane

var numbers = [1, 5, 10, 15, 20, 25];

// FILTER
let biggerThan = function(x) {
  return x >= 10;
};
let filter = function(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) !== false) {
      result.push(array[i]);
    }
  }
  return result;
};

module.exports = {filter};

// console.log("ARRAY");
// console.log(numbers);
// console.log("");
// console.log("FILTER x >= 10");
// console.log(filter(numbers, biggerThan));
