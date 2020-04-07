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

let _ = require("lodash");
const uuid = require("uuid/v4");

class Contact {
  constructor(name, surname, email) {
    this.id = uuid().slice(0, 6);
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.date = new Date();
  }
  updateContact(key, value) {
    if (Object.keys(this).includes(key) && key !== "id") {
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
    this.id = uuid().slice(0, 3);
    this.name = name;
    this.date = new Date();
    this.contacts = [];
  }
  updateGroup(key, value, ...contacts) {
    if (Object.keys(this).includes(key) && key !== "id") {
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
    return this.contacts.indexOf(contact) !== -1 ? true : false;
  }
  deleteContactFromGroup(contact) {
    let index = this.contacts.indexOf(contact);
    if (index !== -1) this.contacts.splice(index, 1);
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
  findBy(uuid){
    let index = this.contacts.findIndex(obj => obj.id === uuid);
    if (index !== -1) return this.contacts[index];
    else if (index === -1){
      index = this.groups.findIndex(obj => obj.id === uuid);
      if (index !== -1) return this.groups[index];
    }
    else console.log('Contact or Group not found');
  }
  updateContact(uuid, key, value) {
    let index = this.contacts.findIndex(obj => obj.id === uuid);
    if (index !== -1) {
      this.contacts[index].updateContact(key, value);
      this.contacts[index].date = new Date();
    }
    for (let i in this.groups) {
      let index = this.groups[i].contacts.findIndex(obj => obj.id === uuid);
      if (index !== -1 && key !== "id") {
        this.groups[i].contacts[index].updateContact(key, value);
        this.groups[i].contacts[index].date = new Date();
      }
    }
  }
  updateGroup(uuid, key, value, ...contacts) {
    let index = this.groups.findIndex(obj => obj.id === uuid);
    if (index !== -1) {
      this.groups[index].updateGroup(key, value, ...contacts);
      this.groups[index].date = new Date();
    }
  }
  addContactToGroup(uuid, groupUUID) {
    let contactIndex = this.contacts.findIndex(obj => obj.id === uuid);
    let toPush = this.contacts[contactIndex];
    let groupIndex = this.groups.findIndex(obj => obj.id === groupUUID);
    this.groups[groupIndex].contacts.push(toPush);
  }
  deleteContact(uuid) {
    let index = this.contacts.findIndex(obj => obj.id === uuid);
    this.contacts.splice(index, 1);
  }
  deleteGroup(uuid) {
    let index = this.groups.findIndex(obj => obj.id === uuid);
    this.groups.splice(index, 1);
  }
  deleteFromGroup(uuid, groupUUID) {
    let contactIndex = this.contacts.findIndex(obj => obj.id === uuid);
    let todelete = this.contacts[contactIndex];
    let groupIndex = this.groups.findIndex(obj => obj.id === groupUUID);
    this.groups[groupIndex].contacts.splice(todelete, 1);
    console;
  }
  readContact(uuid) {
    let index = this.contacts.findIndex(obj => obj.id === uuid);
    this.contacts[index].readContact();
  }
  readGroup(uuid) {
    let index = this.groups.findIndex(obj => obj.id === uuid);
    this.groups[index].readGroup();
  }
  sortContacts(key, order) {
    this.contacts = _.orderBy(this.contacts, [key], [order]);
  }
  sortGroup(groupUUID, key, order) {
    let index = this.groups.findIndex(obj => obj.id === groupUUID);
    this.groups[index] = _.orderBy(this.groups[index], [key], [order]);
  }
}


address1 = new AddressBook();
address1.createNewContact('Matt', 'Smith', 'ms@gmail.com');
address1.contacts[0].id = '11';
address1.createNewContact('Daid', 'Tennant', 'dt@gmail.com');
address1.contacts[1].id = '10';
address1.createNewContact('Chritopher', 'Eccleston', 'dt@gmail.com');
address1.contacts[2].id = '09';
address1.createNewContact('Colin', 'Baker', 'dt@gmail.com');
address1.contacts[3].id = '04';
address1.findBy('04');
address1.findBy('04').updateContact('name','Tom');
address1.createNewGroup('Doctors');
address1.groups[0].id='1';

// console.log(address1.contacts[3]);
address1.findBy('1').updateGroup('name','Actors');
console.log(address1);