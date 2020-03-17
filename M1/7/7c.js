// 7) arraye mają zbudowane metody .map .filter i .reduce.
// Zbuduj 3 funkcję map(array, mapFn), filter(array, filterFn)
// i reduce(array, reduceFn) w których stworzysz własną implementację
// funkcji wbudowanych. Twoje funkcje mają działać tak samo jak te wbudowane

var numbers = [1, 5, 10];

// RTEDUCE
let multiply = function(x, y) {
  return x * y;
};
let reduce = function(data, callback) {
  let result;
  if (data.length > 1) {
    result = callback(data[0], data[1]);
    for (let i = 2; i < data.length; i++) {
      result = callback(result, data[i]);
    }
  } else if (data.length == 2) {
    result = callback(data[0], data[1]);
  } else if (data.length == 1) {
    result = data[0];
  }
  return result;
};

console.log("DANA TABLICA");
console.log(numbers);
console.log("");
console.log("REDUCE x * y");
console.log(reduce(numbers, multiply));
