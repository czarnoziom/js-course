// 2) Utwórz funkcję, która jako argument przyjmie trzy liczby.
// Funkcja powinna zwrócić true jeśli z odcinków o długości przekazanych
// w argumentach można zbudować trójkąt prostokątny, lub informację że z
// podanych długości nie można utworzyć trójkąta prostokątnego.

function checkTriangle(a, b, c) {
  // VALIDATION
  if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
    // SORTING DATA
    const array = [a, b, c].sort((a, b) => a - b);
    // CHECKING CONDITION
    if (
      Math.pow(array[0], 2) + Math.pow(array[1], 2) ==
      Math.pow(array[2], 2)
    ) {
      return`You can build rectangular triangle from given edges`;
    } else {
      return`You can't build rectangular triangle from given edges`;
    }
  } else {
    return `You have to enter 3 numbers to check if the triangle is rectangular`;
  }
}

//TEST
console.log(checkTriangle(4, 5, 3));