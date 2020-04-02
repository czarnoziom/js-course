// 3) Stwórz strukturę danych związaną z użytkownikami.

// Obiekt charakteryzujący użytkownika:
// Ma mieć: Imię, Nazwisko, datę urodzenia, haslo, płeć, adres email, poziom dostepu = ""user""
// Ma umożliwiać: zmianę email

// Obiekt charakteryzujący administratora:
// Obiekt ten ma dziedziczyć po użytkowniku informacje z dodatkowymi możliwościami
// Ma Miec: poziom dostepu dla siebie = ""admin""
// Ma umożliwiać: zmieniać w obiekcie użytkownik poziom dostępu na ""admin"", oraz
// modyfikować jego hasło.

// Dodatkowo User ma mieć walidacje wykonaną za pomocą is.js oraz datę obsługiwaną przez bibliotekę
// moment.js email ma być poprawnym emailem password ma mieć min 8 znaków, co najmniej jedną wielką
// literę i co najmniej jedną cyfrę oraz co najmniej 1 znak specjalny płeć musi być ze zbioru
// [male, female] data (nieważne jaka wejdzie) do propa musi wejść w formacie MM/DD/YYYY imię i nazwisko
// musi być niepuste jeśli któraś z walidacji się nie powiedzie obiekt ma nie być tworzony, tylko
// ma zwracać error z odpowiednimi komunikatami o niepowiedzionej walidacji

let uuid = require("uuid/v4");
let is = require("is_js");
var moment = require('moment');
let passwordValidator = require('password-validator');

const schema = new passwordValidator();
schema
.is().min(8)                                    // Minimum length 8
.is().max(20)                                   // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits()                                 // Must have digits
.has().symbols()                                // Must have symbols
.has().not().spaces()                           // Should not have spaces

class User {
  constructor(name, surname, dateOfBirth, password, gender, email) {
    this.id = uuid().slice(0, 3);
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
    this.password = password;
    this.gender = gender;
    this.email = email;
    this.accessLevel = "user";
    this.validation();
    this.date = moment().format('DD/MM/YYYY');
  }

  genderValidation(gender) {
    if (is.empty(gender)) {
      throw Error(`Gender is required (You can't leave this blank)`);
    }
    if (is.not.inArray(gender, ["male", "female"])) {
      throw Error(`Incorrect gender format. (Please enter 'male' or 'female')`);
    }
  }

  emailValidation(email) {
    if (is.empty(email)) {
      throw Error(`E-mail is required (You can't leave this blank)`);
    }
    if (is.not.email(email)) {
      throw Error(
        `Incorrect email format (Please enter email address in correct format)`
      );
    }
  }

  passwordValidation(password) {
    if (is.empty(password)) {
      throw Error(`Password is required (You can't leave this blank)`);
    }
    if (schema.validate(password) === false) {
      throw Error(
        `Incorrect password format (Password between 8 and 20 characters; must contain at least
        one lowercase letter, one uppercase letter, one numeric digit, and one special character,
        but cannot contain whitespace)`
      );
    }
  }

  validation() {
    if (is.empty(this.name) || is.empty(this.surname)) {
      throw Error(`Name and surname are required (You can't leave this blank)`);
    }
    if (is.empty(this.dateOfBirth)) {
      throw Error(`Date of birth is required (You can't leave this blank)`);
    }
    this.genderValidation(this.gender);
    this.emailValidation(this.email);
    this.passwordValidation(this.password);
  }

  updateEmail(newEmail) {
    this.emailValidation(newEmail);
    this.email = newEmail;
    this.date = moment().format('DD/MM/YYYY');
  }
}

class Admin extends User {
  constructor(id, name, surname, dateOfBirth, password, gender, email) {
    super(id, name, surname, dateOfBirth, password, gender, email);
    this.accessLevel = "admin";
  }
  changeUserAccessLevelToAdmin(user) {
    user.accessLevel = "admin";
    this.date = moment().format('DD/MM/YYYY');
  }
  changeUserPassword(user, password) {
    this.passwordValidation(password);
    user.password = password;
    this.date = moment().format('DD/MM/YYYY');
  }
}

let user1 = new User("John","Doe","01.01.1991","Password123#","male","jd@gmail.com");
let user2 = new Admin("Katy","Clinton","01.01.1987","Password123#","female","mc@gmail.com");
user2.changeUserPassword(user1, "newPassworjd123$");
user1.updateEmail('abcd@gmail.com');
console.log(user1);
console.log(user2);

