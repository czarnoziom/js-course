// 7) arraye mają zbudowane metody .map .filter i .reduce.
// Zbuduj 3 funkcję map(array, mapFn), filter(array, filterFn)
// i reduce(array, reduceFn) w których stworzysz własną implementację
// funkcji wbudowanych. Twoje funkcje mają działać tak samo jak te wbudowane

const numbers = [1,2,3];

const reduce = (array, callback, initialValue) => {
  let acc = initialValue === undefined ? 0 : initialValue;
  for (const i in array) {
    acc = callback(acc, array[i], i, array);
  }
  return acc;
};

module.exports = {reduce};