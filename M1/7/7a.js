// 7) arraye mają zbudowane metody .map .filter i .reduce.
// Zbuduj 3 funkcję map(array, mapFn), filter(array, filterFn)
// i reduce(array, reduceFn) w których stworzysz własną implementację
// funkcji wbudowanych. Twoje funkcje mają działać tak samo jak te wbudowane

var liczby = [1, 5, 10, 15, 20, 25];

// MAP
let podwojenia = function(x) {
  return x + 10;
};

let map = function(data, callback) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    result.push(callback(data[i]));
  }
  return result;
};

console.log("DANA TABLICA");
console.log(liczby);
console.log("");
console.log("MAP x + 10");
console.log(map(liczby, podwojenia));
