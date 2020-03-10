// 5) Stwórz tablicę zawierającą 15 wyrazów. Utwórz funkcję która jako argument przyjmuje wyraz.

let array = ['czerwony', 'niebieski', 'biały', 'czarny', 'szary', 'żółty', 'zielony',
'pomarańczowy', 'fioletowy', 'brązowy', 'różowy', 'granatowy', 'złoty', 'srebrny', 'turkusowy'];

array2 = array.join(", ");


function checkArray(input) {
    if (array.includes(input) == true) {
        console.log("Tablica zawiera element: " + input + " index tego elementu to: " + array.indexOf(input));
    } else if (input == "") {
        console.log("Nie uzupełniłeś pola powyżej.");
    } else {
        console.log("Tablica nie zawiera elementu: " + input);
    }
}

// TEST 1
checkArray('różowy');

// TEST 3
checkArray();

// TEST 3
checkArray('kanarkowy');