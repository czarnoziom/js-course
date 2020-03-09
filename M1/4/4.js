// 4) Umieść 10 tablic wygenerowanych w zadaniu 3, w jednej tablicy.

const array = [];

for (let j = 0; j < 10; j++) {
    const array2 = [];
    for (let i = 0; i < 10; i++) {
        array2.push(Math.floor(Math.random() * 100));
    }
    array[j] = array2;
}

console.log(array);

