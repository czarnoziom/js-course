// 7) arraye mają zbudowane metody .map .filter i .reduce.
// Zbuduj 3 funkcję map(array, mapFn), filter(array, filterFn)
// i reduce(array, reduceFn) w których stworzysz własną implementację
// funkcji wbudowanych. Twoje funkcje mają działać tak samo jak te wbudowane

var numbers = [1, 5, 10, 15, 20, 25];

// MAP
let double = function(x) {
  return x + 10;
};

let map = function(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
};

console.log("ARRAY");
console.log(numbers);
console.log("");
console.log("MAP x + 10");
console.log(map(numbers, double));
