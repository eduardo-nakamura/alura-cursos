const books = require('./list')
// search for book with smaller price

let smallerPrice = 0;
let higherPrice = 0;

for (let i = 0; i < books.length; i++) {
    if (books[i].price < books[smallerPrice].price) {
        smallerPrice = i
    }  
    if (books[i].price > books[higherPrice].price) {
        higherPrice = i
    }   
}

console.log(`The cheapest book is ${books[smallerPrice].name}, and it costs ${books[smallerPrice].price} moneys`)
console.log(`The most expensive book is ${books[higherPrice].name}, and it costs ${books[higherPrice].price} moneys`)