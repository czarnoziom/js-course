// 1) Utwórz funkcję, która jako argument przyjmuje Twój rok urodzenia.
// Funkcja powinna zwrócić Twój aktualny wiek.

function howOldAreYou (yearOfBirth){
    const date = new Date().getFullYear();
    return date - yearOfBirth
};

// console.log(`You are ${howOldAreYou(1991)} years old.`);

module.exports = {howOldAreYou};