// 2) Utwórz funkcję, która jako argument przyjmie trzy liczby.
// Funkcja powinna zwrócić true jeśli z odcinków o długości przekazanych
// w argumentach można zbudować trójkąt prostokątny, lub informację że z
// podanych długości nie można utworzyć trójkąta prostokątnego.

function checkTriangle(a, b, c) {
    // VALIDATION
    if (typeof a == "number") {

        // SORTING DATA
        let array = [a, b, c].sort(function (a, b) {
            return a - b
        })
        let a1 = array[0]
        let b1 = array[1]
        let c1 = array[2]

        // CHECKING CONDITION
        if (Math.pow(a1, 2) + Math.pow(b1, 2) == Math.pow(c1, 2)) {

            console.log("You can build rectangular triangle from given edges");
        } else {
            console.log("You can't build rectangular triangle from given edges");
        }
    }
    else {
        console.log("You have to enter 3 numbers to check if the triangle is rectangular");
    }
}

//TEST
checkTriangle(4, 5, 3);
