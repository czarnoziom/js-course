// // 8) Stwórz funkcję generateHuman() która będzie tworzyć obiekt o podanej
// // niżej strukturze ale o losowych wartościach {name, surname,
// // email:(w oparciu o name i surname), age:(przedział 18-85), country:oneOf([PL,UK,USA])}
// // losowe name i surname. https://www.json-generator.com/.
// // Dodatkowe pola - phoneNr - random 9 numbers,
// // oraz _id = objectId() - wykorzystać bibliotekę  https://www.npmjs.com/package/uuid

"use strict";
const fs = require("fs");
let rawdata = fs.readFileSync("content.json");
let content = JSON.parse(rawdata);
const country = ["PL", "UK", "USA"];

function generateHuman() {
  let human = {};

  //   NAME
  human.name = content[Math.floor(Math.random() * 100)].name.first;

  // SURNAME
  human.surname = content[Math.floor(Math.random() * 100)].name.last;

  // EMAIL
  human.mail = (human.name + human.surname + "@gmail.com").toLowerCase();

  // COUNTRY

  human.country = country[Math.floor(Math.random() * 3)];

  // AGE
  human.age = Math.floor(Math.random() * 67) + 18;

  return human;
}

// TEST
console.log(generateHuman());
