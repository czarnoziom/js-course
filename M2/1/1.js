// 1) Stwórz strukturę danych związaną z książką adresową.

// Obiekt ""książka adresowa""
// Ma mieć: listę wszystkich kontaktów, listę grup kontaktów.
// Ma umożliwiać: create/read/update/delete , umożliwiać sortowanie listy po frazach

// Obiekt charakteryzujący pojedyńczy kontak:
// Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji
// Ma umożliwiać: Tworzenie obiektu, aktualizację datę modyfikacji, wyświetlać
// w odpowiednim formacie przy wywołaniu.

// Obiekt charakteryzujący grupę kontaktów:
// Ma mieć: listę kontaktów
// Ma umożliwiać: Create/Read/Update/Remove (CRUD)

// S  O  L  I  D

// S — Single responsibility principle (Zasada jednej odpowiedzialności)
//     Klasa powinna mieć jeden i jeden powód do zmiany, co oznacza, że klasa powinna mieć tylko jedno zadanie.

// O — Open closed principle (Zasada otwarty zamknięty)
//     Obiekty lub byty powinny być otwarte dla rozszerzenia, ale zamknięte dla modyfikacji

// L — Liskov substitution principle (Zasada podstawienia Liskov)
//     Klasy w programie powinny być podmienialne przez swoje podklasy bez naruszania poprawności
//     programu, czyli klasa dziedzicząca musi być dobrym odpowiednikiem klasy bazowej.Podklasa
//     nie powinna robić mniej niż klasa bazowa. Czyli zawsze powinna robić więcej.

// I — Interface segregation principle (Zasada segregacji interfejsu)
//     Wiele mniejszych, konkretnych interfejsów jest lepsze od pojedynczego ogólnego interfejsu.
//     Powinno się projektować małe i zwarte interfejsy.

// D — Dependency Inversion principle (Zasada inwersji zależności)
//     Kod z warstw wyższego poziomu nie powinien zależeć od kodu z niższych warstw, ale od abstrakcji.
//     Abstrakcje nie powinny być zależne od implementacji.

compareValues = (key, order = "asc") => {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;

    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];
    let comparison = 0;

    if (varA > varB) comparison = 1;
    else if (varA < varB) comparison = -1;

    return order === "desc" ? comparison * -1 : comparison;
  };
};

class Contact {
  constructor(name, surname, email) {
    let uuid = require("uuid/v4");
    this.id = uuid().slice(0, 6);
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.date = new Date();
  }
  updateContact(key, value) {
    if (Object.keys(this).includes(key)) {
      this[key] = value;
      this.date = new Date();
    }
  }
  readContact() {
    console.log(this);
    // console.log(
    //   `\nid: ${this.id}\nname: ${this.name}\nsurname: ${this.surname}\nemail: ${this.email}\ndate: ${this.date}\n`
    // );
  }
}

class Group {
  constructor(name) {
    this.name = name;
    this.date = new Date();
    this.contacts = [];
  }
  updateGroup(name, ...contacts) {
    this.group = name;
    this.contacts = [...contacts];
  }
}

class AddressBook {
  constructor() {
    this.contacts = [];
    this.groups = [];
  }
  createNewContact(name, surname, email) {
    const contact = new Contact(name, surname, email);
    this.contacts.push(contact);
  }
  createNewGroup(name) {
    const group = new Group(name);
    this.groups.push(group);
  }
  addContactToGroup(uuid, name) {
    let contactIndex = this.contacts.findIndex(obj => obj.id === uuid);
    let toPush = this.contacts[contactIndex];
    let groupIndex = this.groups.findIndex(obj => obj.name === name);
    this.groups[groupIndex].contacts.push(toPush);
  }
  updateContact(uuid, key, value) {
    let index = this.contacts.findIndex(obj => obj.id === uuid);
    if (index >= 0) {
      this.contacts[index][key] = value;
      this.contacts[index].date = new Date();
    }
  }
  updateGroup(name, newName) {
    let index = this.groups.findIndex(obj => obj.name === name);
    if (index >= 0) {
      this.groups[index].name = newName;
      this.groups[index].date = new Date();
    }
  }
  delateContact(uuid) {
    let index = this.contacts.findIndex(obj => obj.id === uuid);
    this.contacts.splice(index, 1);
  }
  delateGroup(name) {
    let index = this.groups.findIndex(obj => obj.name === name);
    this.groups.splice(index, 1);
  }
  delateFromGroup(uuid, name) {
    let contactIndex = this.contacts.findIndex(obj => obj.id === uuid);
    let toDelate = this.contacts[contactIndex];
    let groupIndex = this.groups.findIndex(obj => obj.name === name);
    this.groups[groupIndex].contacts.splice(toDelate,1);
  }
  readContact(uuid) {
    let index = this.contacts.findIndex(obj => obj.id === uuid);
    console.log(this.contacts[index]);
  }
  readGroup(name) {
    let index = this.groups.findIndex(obj => obj.name === name);
    console.log(this.groups[index]);
  }
  sortContacts(key, order) {
    this.contacts.sort(compareValues(key, order));
  }
  sortGroup(name, key, order) {
    let index = this.groups.findIndex(obj => obj.name === name);
    this.groups[index].contacts.sort(compareValues(key,order));
  }
}

// TESTS
let address1 = new AddressBook();
address1.createNewContact("Morgan", "Freeman", "morganfreeman@gmail.com");
address1.createNewContact("Brad", "Pitt", "bradpitt@gmail.com");
address1.createNewContact("Gary", "Oldman", "garyoldman@gmail.com");
address1.createNewGroup("Friends");
let contact1 = new Contact("Chris", "Pratt", "chrispratt@gmail.com");
contact1.updateContact("surname", "Hemsworth");
contact1.updateContact("email", "chrishemsworth@gmail.com");
contact1.updateContact("id", "111111");
// contact1.readContact();
address1.contacts.push(contact1);
address1.updateContact("111111", "name", "Liam");
address1.updateContact("111111", "email", "liamhemsworth@gmail.com");
// console.log(address1.contacts[3]);
address1.updateGroup("Friends", "Actors");
let contact2 = new Contact("Idris", "Elba", "idriselba@gmail.com");
contact2.updateContact("id", "222222");
address1.contacts.push(contact2);
address1.delateContact("222222");
address1.createNewGroup("Directors");
address1.delateGroup("Actors");
// address1.readContact("111111");
let contact3 = new Contact("Quentin", "Tarantino", "quentintarantino@gmail.com");
contact3.updateContact("id", "333333");
let contact4 = new Contact("Christopher", "Nolan", "chrisnolan@gmail.com");
contact4.updateContact("id", "444444");
let contact5 = new Contact("Tim", "Burton", "timburton@gmail.com");
contact5.updateContact("id", "555555");
address1.contacts.push(contact3,contact4,contact5);
address1.addContactToGroup('333333','Directors');
address1.addContactToGroup('444444','Directors');
address1.addContactToGroup('555555','Directors');
address1.delateFromGroup('444444', 'Directors')
address1.sortGroup('Directors', 'surname');
address1.sortContacts("name");

console.log(address1);
console.log(address1.groups[0]);
