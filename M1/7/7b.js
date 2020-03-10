// 7) arraye mają zbudowane metody .map .filter i .reduce.
// Zbuduj 3 funkcję map(array, mapFn), filter(array, filterFn)
// i reduce(array, reduceFn) w których stworzysz własną implementację
// funkcji wbudowanych. Twoje funkcje mają działać tak samo jak te wbudowane

var liczby = [1, 5, 10, 15, 20, 25];

// FILTER
let wieksze = function(x) {
  return x >= 10;
};
let filter = function(data, callback) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (callback(data[i]) == true) {
      result.push(data[i]);
    }
  }
  return result;
};

console.log("DANA TABLICA");
console.log(liczby);
console.log("");
console.log("FILTER x >= 10");
console.log(filter(liczby, wieksze));
