// 7) arraye mają zbudowane metody .map .filter i .reduce.
// Zbuduj 3 funkcję map(array, mapFn), filter(array, filterFn)
// i reduce(array, reduceFn) w których stworzysz własną implementację
// funkcji wbudowanych. Twoje funkcje mają działać tak samo jak te wbudowane

var numbers1 = [1];
var numbers2 = [1, 2];
var numbers3 = [1, 2, 3, 10, 10];

// RTEDUCE

let multiply = function(x, y) {
  return x * y;
};

let reduce = function(array, callback, initialValue) {
  if (typeof initialValue === "number") array.unshift(initialValue);
  let result;
  if (array.length == 1) result = array[0];
  else if (array.length > 1) {
    result = callback(array[0], array[1]);
    for (let i = 2; i < array.length; i++) {
      result = callback(result, array[i]);
    }
  }
  return result;
};

console.log(`ARRAY: [${numbers1}] REDUCE: ${reduce(numbers1, multiply)}`);
console.log(`ARRAY: [${numbers1}] REDUCE: ${reduce(numbers1, multiply, 2)}`);

console.log(`ARRAY: [${numbers2}] REDUCE: ${reduce(numbers2, multiply)}`);
console.log(`ARRAY: [${numbers2}] REDUCE: ${reduce(numbers2, multiply,2)}`);

console.log(`ARRAY: [${numbers3}] REDUCE: ${reduce(numbers3, multiply)}`);
console.log(`ARRAY: [${numbers3}] REDUCE: ${reduce(numbers3, multiply,2)}`);
