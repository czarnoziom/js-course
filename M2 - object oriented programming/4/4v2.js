// 4) Stwórz strukturę danych związaną z biblioteką.

// Obiekt charakteryzujący książkę:
// Ma mieć:
// Tytuł, Autora, id(kod), status dostępna, datę wypożyczenia,
// datę zwrotu( +7d od wypożyczenia).
// Ma umożliwiać:
// zmianę id, wypożyczenie ksiązki (jesli książki nie ma w liście -
// jest niedostępna/wypożyczona ma zwracać informację) jesli jest dostępna
// zmieniać status na niedostępna po wypożyczeniu, zwrot (jeśli odbędzie się
// terminowo kara jest 0 -jesli nie - każdy dzień zwłoki to naliczenie jakiejś
// kary, przy zwrocie książka ma otrzymać status dostępna

// Obiekt charakteryzujący użytkownika
// Ma mieć: imię, nazwisko, datę urodzenia, numer telefonu, email, datę utworzenia,
// listę aktualnie wypożyczonych książek oraz listę zwróconych książek

// Obiekt charakteryzujący bibliotekę:
// Ma miec: Listę książek(obiektów) z różnymi autorami, tytułami (około 8-15).
// Ma umożliwiać: dodawanie książek do listy, usuwanie książek z listy,
// dodawanie nowego użytkownika, usuwanie użytkownika, wypożyczać i zwracać książki
// znajdujące sięna liście

let uuid = require("uuid/v4");
const moment = require("moment");

class Book {
  constructor(title, author) {
    this.id = uuid().slice(0, 3);
    this.title = title;
    this.author = author;
    this.status = "available";
  }

  changeId(id) {
    this.id = id;
  }

  borrow() {
    if (this.status === "available") {
      this.status = "borrowed";
      this.dateOfBorrow = moment().format("YYYY-MM-DD");
      this.returnBefore = moment().add(7, "days").format("YYYY-MM-DD");
      let start = moment(this.dateOfBorrow);
      let end = moment();
      let difference = moment.duration(end.diff(start)).asDays();
      this.daysOfBorrow = parseInt(difference);
    } else console.log(`Book: '${this.title}' is already borrowed'`);
  }

  return() {
    this.dateOfReturn = moment().format("YYYY-MM-DD");
    let start = moment(this.dateOfBorrow);
    let end = moment(this.dateOfReturn);
    // let end = moment(this.dateOfReturn).add(17, "days");  // to check correct counting of penalty add more than 7 days days
    let difference = moment.duration(end.diff(start)).asDays();
    this.daysOfBorrow = parseInt(difference);
    if (this.daysOfBorrow > 7) {
      this.penalty = (this.daysOfBorrow - 7) * 0.5 + " zł";
      console.log(
        `Book: '${this.title}' was kept more than 7 days. Penalty for detention is: ${this.penalty}'`
      );
    }
  }
}

class User {
  constructor(name, surname, dateOfBirth, phoneNumber, email) {
    this.id = uuid().slice(0, 3);
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.date = moment().format("DD/MM/YYYY");
    this.borrowedBooks = [];
    this.returnedBooks = [];
  }
}

class Library {
  constructor() {
    this.books = [];
    this.users = [];
  }

  createNewBook(title, author) {
    let book = new Book(title, author);
    this.books.push(book);
  }

  createNewUser(name, surname, dateOfBirth, phoneNumber, email) {
    let user = new User(name, surname, dateOfBirth, phoneNumber, email);
    this.users.push(user);
  }

  getBookIndexById(id) {
    let index = this.books.findIndex((obj) => obj.id === id);
    return index;
  }

  getUserIndexById(id) {
    let index = this.users.findIndex((obj) => obj.id === id);
    return index;
  }

  deleteBooks(...booksIds) {
    for (let i in [...booksIds]) {
      let index = this.books.findIndex((obj) => obj.id === booksIds[i]);
      if (index === -1) console.log(`Book with id: ${booksIds[i]} don't exist`);
      if (index !== -1) this.books.splice(index, 1);
    }
  }

  deleteUser(...usersIds) {
    for (let i in [...usersIds]) {
      let index = this.users.findIndex((obj) => obj.id === usersIds[i]);
      if (index === -1) console.log(`User with id: ${usersIds[i]} don't exist`);
      if (index !== -1) this.users.splice(index, 1);
    }
  }

  borrowBooks(userId, ...booksIds) {
    let userIndex = this.getUserIndexById(userId);
    for (let i in booksIds) {
      let bookIndex = this.getBookIndexById(booksIds[i]);
      if (bookIndex === -1)
        console.log(
          `Book: '${this.books[bookIndex].title}' is already borrowed by someone else`
        );
      if (bookIndex !== -1) {
        this.books[bookIndex].borrow();
        this.users[userIndex].borrowedBooks.push(this.books[bookIndex]);
        console.log(
          `Book: '${this.books[bookIndex].title}' has been borrowed successfully by user with id: ${this.users[userIndex].id} `
        );
      }
    }
  }

  returnBooks(userId, ...booksIds) {
    let totalPenalty = 0;
    let userIndex = this.getUserIndexById(userId);
    for (let i in booksIds) {
      let bookIndex = this.getBookIndexById(booksIds[i]);
      if (bookIndex === -1)
        console.log(
          `Book: '${this.books[bookIndex].title}' not found in database. Can't be returned`
        );
      if (bookIndex !== -1) {
        this.books[bookIndex].return();
        if (parseFloat(this.books[bookIndex].penalty) > 0)
          totalPenalty += parseFloat(this.book[bookIndex].penalty);
        let borrowedBookIndex = this.users[userIndex].borrowedBooks.findIndex(
          (obj) => obj.id === booksIds[i]
        );
        this.users[userIndex].borrowedBooks.splice(borrowedBookIndex, 1);
        this.users[userIndex].returnedBooks.push(this.books[bookIndex]);
        console.log(
          `Book: '${this.books[bookIndex].title}' has been returned successfully by user with id: ${this.users[userIndex].id} `
        );
      }
    }
    if (totalPenalty > 0)
      console.log(`Now user have to pay paenalty ${totalPenalty} zł `);
  }

  showAvailable() {
    for (let i in this.books[0]) {
      if (this.books[0][i].status === "available")
        console.log(this.books[0][i]);
    }
  }

  showBorrowed() {
    for (let i in this.books[0]) {
      if (this.books[0][i].status === "borrowed") console.log(this.books[0][i]);
    }
  }
}

// TESTS
let library1 = new Library();
library1.createNewBook("Harry Potter and the Deathly Hallows", "J. K. Rowling");
library1.books[0].id = "000";
library1.createNewBook('The Hobbit', 'J. R. R. Tolkien');
library1.books[1].id = "111";
library1.createNewBook('1984', 'George Orwell');
library1.books[2].id = "222";
library1.createNewBook('Pride and Prejudice', 'Jane Austen');
library1.books[3].id = "333";
library1.createNewBook('To Kill a Mockingbird', 'Harper Lee');
library1.books[4].id = "444";
library1.createNewBook('The Da Vinci Code', 'Dan Brown');
library1.books[5].id = "555";
library1.createNewBook('The Great Gatsby', 'F. Scott Fitzgerald');
library1.books[6].id = "666";
library1.createNewBook('Life of Pi', 'Yann Martel');
library1.books[7].id = "777";
library1.createNewBook('The Odyssey', 'Homer');
library1.books[8].id = "888";
library1.createNewBook('Fahrenheit 451', 'Ray Bradbury');
library1.books[9].id = "999";

library1.createNewUser("John","Smith","1985","555-555-555","johnsmith@gmail.com");
library1.users[0].id = "u0";
library1.createNewUser("John","Doe","1985","555-555-555","johndoe@gmail.com");
library1.users[1].id = "u1";
library1.createNewUser("Jane","Doe","1985","555-555-555","janedoe@gmail.com");
library1.users[2].id = "u2";

library1.deleteBooks('000', '333', '444', '666');
library1.deleteUser('u0','u2');

library1.borrowBooks('u1', '111','222','999');
library1.returnBooks('u1', '111','222');

// // library1.showAvailable();
// // library1.showBorrowed();

console.log(library1);
// console.log(library1.books);
// console.log(library1.users[0]);
