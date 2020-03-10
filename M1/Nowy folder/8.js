// // 8) Stwórz funkcję generateHuman() która będzie tworzyć obiekt o podanej
// // niżej strukturze ale o losowych wartościach {name, surname,
// // email:(w oparciu o name i surname), age:(przedział 18-85), country:oneOf([PL,UK,USA])}
// // losowe name i surname. https://www.json-generator.com/.
// // Dodatkowe pola - phoneNr - random 9 numbers,
// // oraz _id = objectId() - wykorzystać bibliotekę  https://www.npmjs.com/package/uuid

function generateHuman() {
  "use strict";
  const fs = require("fs");
  let rawdata = fs.readFileSync("content.json");
  let content = JSON.parse(rawdata);

  //   NAME
  let randomName = content[Math.floor(Math.random() * 100)].name.first;
  console.log("");
  console.log("NAME: " + randomName);

  // SURNAME
  let randomSurname = content[Math.floor(Math.random() * 100)].name.last;
  console.log("SURNAME: " + randomSurname);

  // EMAIL
  console.log(
    "EMAIL: " + (randomName + randomSurname + "@gmail.com").toLowerCase()
  );

  // COUNTRY
  const country = ["PL", "UK", "USA"];
  console.log("COUNTRY: " + country[Math.floor(Math.random() * 3)]);

  // AGE
  console.log("AGE: " + (Math.floor(Math.random() * 67) + 18));
}

// TEST
generateHuman();
