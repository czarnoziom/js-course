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


let uuid = require('uuid/v4');
const moment = require('moment');

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
    if(this.daysOfBorrow >7) {
      this.penalty=(this.daysOfBorrow-7)*0.50+' zł';
      console.log(`Book: '${this.title}' was kept more than 7 days. Penalty for detention is: ${this.penalty}'`)
    };
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
  createUser(name, surname, dateOfBirth, phoneNumber, email) {
    let user = new User(name, surname, dateOfBirth, phoneNumber, email);
    this.users.push(user);
  }
  deleteUser(userId) {
    let userIndex = this.users.findIndex(obj => obj.id === userId);
    if (userIndex === -1) console.log(`User don't exist`);
    if (userIndex !== -1){
      this.users.splice(userIndex,1);
      console.log(`User deleted successfully`);
    }
  }
  addBooks(...books) {
    this.books.push(books);
  }
  deleteBooks(...books) {
    for (let i in books) {
      let index = this.books[0].indexOf(books[i]);
      if (index !== -1) this.books[0].splice(index, 1);
    }
  }
  borrowBooks(userId, ...books) {
    for (let i in books) {
      let userIndex = this.users.findIndex(obj => obj.id === userId);
      let index = this.books[0].indexOf(books[i]);
      if (index === -1)
        console.log(
          `Book: '${books[i].title}' is already borrowed by someone else`
        );
      if (index !== -1) {
        this.books[0][index].borrow();
        this.users[userIndex].borrowedBooks.push(this.books[0][index]);
        console.log(`Book: '${books[i].title}' has been borrowed successfully by user with id: ${this.users[userIndex].id} `);
      }
    }
  }
  returnBooks(userId, ...books) {
    let totalPenalty = 0;
    for (let i in books) {
      let userIndex = this.users.findIndex(obj => obj.id === userId);
      let index = this.books[0].indexOf(books[i]);

      if (index === -1)
        console.log(
          `Book: '${books[i].title}' not found in database. Can't be returned`
        );
      if (index !== -1) {
        this.books[0][index].return();
        if (parseFloat(this.books[0][index].penalty) > 0) totalPenalty += parseFloat(this.books[0][index].penalty);
        let borrowedBookIndex = this.users[userIndex].borrowedBooks.indexOf(books[i]);
        this.users[userIndex].borrowedBooks.splice(borrowedBookIndex,1);
        this.users[userIndex].returnedBooks.push(this.books[0][index]);
        console.log(`Book: '${books[i].title}' has been returned successfully by user with id: ${this.users[userIndex].id} `);
      }
    }
    if (totalPenalty>0)console.log(`Now user have to pay paenalty ${totalPenalty} zł `);
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
let book1 = new Book('Harry Potter and the Deathly Hallows', 'J. K. Rowling');
let book2 = new Book('The Hobbit', 'J. R. R. Tolkien');
let book3 = new Book('1984', 'George Orwell');
let book4 = new Book('Pride and Prejudice', 'Jane Austen');
let book5 = new Book('To Kill a Mockingbird', 'Harper Lee');
let book6 = new Book('The Da Vinci Code', 'Dan Brown');
let book7 = new Book('The Great Gatsby', 'F. Scott Fitzgerald');
let book8 = new Book('Life of Pi', 'Yann Martel');
let book9 = new Book('The Odyssey', 'Homer');
let book10 = new Book('Fahrenheit 451', 'Ray Bradbury');
library1.addBooks(book1,book2,book3,book4,book5,book6,book7,book8,book9,book10);
library1.deleteBooks(book1, book4, book5, book7);
library1.createUser('John','Smith','1985','555-555-555','johnsmith@gmail.com');
library1.users[0].id='111';
library1.borrowBooks('111', book2,book3,book9);
library1.returnBooks('111', book2,book3);
library1.deleteUser('111');
// library1.showAvailable();
// library1.showBorrowed();

// console.log(library1);
// console.log(library1.books);
console.log(library1.users);