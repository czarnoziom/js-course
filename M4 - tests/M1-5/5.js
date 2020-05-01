// "5) Stwórz tablicę zawierającą 15 wyrazów. Utwórz funkcję która jako argument przyjmuje wyraz.
// Funkcja ma sprawdzić czy fraza występuje w tablicy. Jeśli tak ma zwrócić informacje o tym elemencie
// (pozycja, wartość). Jeśli nie, zwraca powiadomienie że szukanej frazy brak w tablicy."


const colors = ['red', 'blue', 'white', 'black', 'gray', 'yellow', 'green',
'orange', 'purple', 'brown', 'pink', 'navy blue', 'gold', 'silver', 'turquoise'];


function checkArray(array, input) {
  let newString = array.join(", ").toLowerCase();

  if (input === undefined) {
    return `You haven't completed the phrase to check`;
  } else if (newString.includes(input.toLowerCase())) {
    let index = array.findIndex((element) =>
      element.includes(input.toLowerCase())
    );
    return `The array contains an element: ${input}, the index of an element is: ${index}`;
  } else {
    return `The array does not contain the element: ${input}`;
  }
};

module.exports = {colors,checkArray};