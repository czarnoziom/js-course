// 1) Stwórz strukturę danych związaną z książką adresową.

// Obiekt książka adresowa
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

let _ = require('lodash');

class Contact {
  constructor(name, surname, email) {
    let uuid = require('uuid/v4');
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
  }
}

class Group {
  constructor(name) {
    let uuid = require('uuid/v4');
    this.id = uuid().slice(0, 3);
    this.name = name;
    this.date = new Date();
    this.contacts = [];
  }
  updateGroup(key, value, ...contacts) {
    if (Object.keys(this).includes(key)) {
      this[key] = value;
      this.date = new Date();
    }
    if (contacts.length > 0) this.contacts = [...contacts];
  }
  readGroup() {
    console.log(this);
  }
  readContacts() {
    console.log(this.contacts);
  }
  addContactToGroup(contact) {
    this.contacts.push(contact);
  }
  hasContact(contact) {
    let contactIndex = this.contacts.findIndex(obj => obj === contact);
    if (contactIndex !== -1) return true;
    else return false;
  }
  deleteContactFromGroup(contact) {
    let contactIndex = this.contacts.findIndex(obj => obj === contact);
    if (contactIndex !== -1) this.contacts.splice(contactIndex, 1);
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
  updateContactInAB(uuid, key, value) {
    let index = this.contacts.findIndex(obj => obj.id === uuid);
    if (index !== -1) {
      this.contacts[index].updateContact(key,value);
      this.contacts[index].date = new Date();
    }
  }
  updateGroupInAB(uuid, key, value, ...contacts) {
    let index = this.groups.findIndex(obj => obj.id === uuid);
    if (index !== -1) {
      this.groups[index].updateGroup(key, value, ...contacts);
      this.groups[index].date = new Date();
    }
  }
  addContactToGroupInAB(uuid, groupUUID) {
    let contactIndex = this.contacts.findIndex(obj => obj.id === uuid);
    let toPush = this.contacts[contactIndex];
    let groupIndex = this.groups.findIndex(obj => obj.id === groupUUID);
    this.groups[groupIndex].contacts.push(toPush);
  }
  delateContact(uuid) {
    let index = this.contacts.findIndex(obj => obj.id === uuid);
    this.contacts.splice(index, 1);
  }
  delateGroup(uuid) {
    let index = this.groups.findIndex(obj => obj.id === uuid);
    this.groups.splice(index, 1);
  }
  delateFromGroup(uuid, groupUUID) {
    let contactIndex = this.contacts.findIndex(obj => obj.id === uuid);
    let toDelate = this.contacts[contactIndex];
    let groupIndex = this.groups.findIndex(obj => obj.id === groupUUID);
    this.groups[groupIndex].contacts.splice(toDelate, 1);console
  }
  readContact(uuid) {
    let index = this.contacts.findIndex(obj => obj.id === uuid);
    console.log(this.contacts[index]);
  }
  readGroup(uuid) {
    let index = this.groups.findIndex(obj => obj.id === uuid);
    console.log(this.groups[index]);
  }
  sortContacts(key, order) {
    this.contacts = _.orderBy(this.contacts, [key],[order]);
  }
  sortGroup(groupUUID, key, order) {
    let index = this.groups.findIndex(obj => obj.id === groupUUID);
    this.groups[index] = _.orderBy(this.groups[index], [key],[order]);
  }
}

// CONTACT - TESTS
let contact1 = new Contact('Chris', 'Pratt', 'chrispratt@gmail.com');
contact1.updateContact('surname', 'Hemsworth');
contact1.updateContact('email', 'chrishemsworth@gmail.com');
contact1.updateContact('id', '111111');
// contact1.readContact();

// GROUP - TESTS
let group1 = new Group('Actors');
group1.addContactToGroup(contact1);
group1.updateGroup('name', 'Actresses');
group1.updateGroup('id', '111');
// group1.readGroup();
let contact2 = new Contact('Meryl', 'Streep', 'merylstreep@gmail.com');
let contact3 = new Contact('Kate', 'Winslet', 'katewinslet@gmail.com');
contact3.updateContact('id','333333');
group1.updateGroup('name', 'Actresses', contact1, contact2, contact3);
group1.deleteContactFromGroup(contact1);
// console.log(group1.hasContact(contact1));
// console.log(group1.hasContact(contact2));
// group1.readContacts();

// ADDRESSBOOK - TESTS
let address1 = new AddressBook();
address1.createNewContact('Chris', 'Pratt', 'chrispratt@gmail.com');
address1.createNewContact('Gary', 'Oldman', 'garyoldman@gmail.com');
address1.createNewContact('Morgan', 'Freeman', 'morganfreeman@gmail.com');
address1.createNewContact('Idris', 'Elba', 'idriselba@gmail.com');
address1.contacts[0].id = '222222';
address1.contacts[1].id = '333333';
address1.updateContactInAB('222222','surname', 'Hemsworth');
address1.createNewGroup('Friends');
address1.createNewGroup('Directors');
address1.groups[0].id='111';
address1.groups[1].id='222';
address1.addContactToGroupInAB('222222','111')
address1.addContactToGroupInAB('333333','111')
address1.updateGroupInAB('111', 'name', 'Actors');
address1.delateContact('333333');
address1.delateGroup('222');
address1.delateFromGroup('222222','111');
// address1.readContact('222222');
// address1.readGroup('111');
address1.sortContacts('name','desc');
console.log(address1);


