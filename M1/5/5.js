// "5) Stwórz tablicę zawierającą 15 wyrazów. Utwórz funkcję która jako argument przyjmuje wyraz.
// Funkcja ma sprawdzić czy fraza występuje w tablicy. Jeśli tak ma zwrócić informacje o tym elemencie
// (pozycja, wartość). Jeśli nie, zwraca powiadomienie że szukanej frazy brak w tablicy."


const colors = ['red', 'blue', 'white', 'black', 'gray', 'yellow', 'green',
'orange', 'purple', 'brown', 'pink', 'navy blue', 'gold', 'silver', 'turquoise'];


function checkArray(array, input) {
  let string = array.join(", ").toLowerCase();

  if (input === undefined) {
    console.log("You haven't completed the phrase to check");
  } else if (string.includes(input.toLowerCase()) == true) {
    let index = array.findIndex(element =>
      element.includes(input.toLowerCase())
    );
    console.log(
      "The array contains an element: " +
        input +
        ", the index of an element is: " +
        index
    );
  } else {
    console.log("The array does not contain the element: " + input);
  }
}

// TEST 1
checkArray(colors, 'HiTe');
// TEST 3
checkArray(colors);
// TEST 3
checkArray(colors, 'aquamarine');