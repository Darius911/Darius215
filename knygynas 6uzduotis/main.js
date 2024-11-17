"use strict"

const books = [
  { title: "Knyga #1", price: 10.25 },
  { title: "Knyga #2", price: 5.15 },
  { title: "Knyga #3", price: 7.32 },
  { title: "Knyga #4", price: 54.01 },
  { title: "Knyga #5", price: 77.17 },
  ];

//   1. Parašykite funkciją, kuri atspausdintų visą knygų sąrašą
// (knygos eilės numerį ir pavadinimą). Panaudokite metodą
// map()
  const bookList = books.map((book, index) => {
    console.log(`${index + 1}. ${book.title}`);
  });

//   Parašykite funkciją, kuri paskaičiuotų, kiek knygų yra
// lentynoje

 const totalBooks = function () {
  const sum = books.length;
  return sum;
 }
 console.log(totalBooks());

//  Parašykite funkciją, kuri į duoto knygų masyvo galą pridėtų
// knygą
// Pvz. "Knyga #6", kaina 2,75. Panaudokite metodą push()

function addTheBook(inputTitle, inputPrice) {
  books.push({ title: inputTitle, price: inputPrice });
  return books;
}
console.log(addTheBook("Knyga #6", 2.75));

// Parašykite funkciją, kuri išvestų paskutinės knygos
// pavadinimą ir kainą

function theLastBook() {
  const lastBook = books[books.length - 1];
  return lastBook;
}
console.log(theLastBook());

// Parašykite funkciją suskaičiuojančią, už kiek eurų yra knygų
// knygyne

function calculateAllInventoryPrice() {
  // TODO Use the .reduce() method to return the total price of all the items in inventory
  const sum = books.reduce((accumulator, bookValue) => 
    accumulator + bookValue.price , 0
 );
 return sum.toFixed(2)
}
console.log(calculateAllInventoryPrice());

// Parašykite funkciją, kuri apskaičiuotų 25 % nuolaidą
// knygoms, kurių kaina didesnė nei 10 eurų ir atspausdintų:

function addDiscount() {
  const result = ["!!! Nukainuota !!!"];
  for (let i = 0; i < books.length; i++) {
    if (books[i].price > 10) {
      result.push(
        `Knyga: ${books[i].title} Sena kaina: ${
          books[i].price
        } Pardavimo kaina: ${books[i].price * 0.75} Pritaikyta nuolaida: -25%`
      );
    }
  }
  return result;
}
console.log(addDiscount());

// Parašykite kodą, kuris išrikiuotų knygas nuo pigiausios iki
// brangiausios

function fromChepestToMostExpensive() {
  const result = [...books];
  result.sort((a, b) => a.price - b.price);
  return result;
}

console.log(fromChepestToMostExpensive());

// Analogiškai išrikiuokite knygas pagal pavadinimus, nuo A iki Z.
// Prieš tai pakoreguokite knygų pavadinimus masyve
// nuo A iki Z
// nuo Z iki A

function fromAToZAndFromZToA() {
  const aToZ = [...books].sort((a, b) => a.title.localeCompare(b.title));
  const zToA = [...books].sort((a, b) => b.title.localeCompare(a.title));
  const result = [aToZ, zToA];
  return result;
}


console.log(fromAToZAndFromZToA());

// Atspausdinkite knygas, kurios yra brangesnės nei 7,5 eur.
// Panaudokite metodą filter()

function moreExpensiveThan() {
  const result = books.filter((book) => book.price > 7.5);
  return result;
}

console.log(moreExpensiveThan());


 
