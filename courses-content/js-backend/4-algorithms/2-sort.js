const books = require('./list')
const smallVal = require('./smallVal');


for (let i = 0; i < books.length; i++) {
    let smaller = smallVal(books, i) // index cheapest book    

    let currentBook = books[i] // current book
    let smallerPricedBook = books[smaller] // cheapest book

    books[i] = smallerPricedBook
    books[smaller] = currentBook
}
// books.sort((a, b) => a.price - b.price )
console.log(books)

books.forEach((_, index) => {
    let smaller = smallVal(books, index)

    let currentBook = books[index];
    let cheapestBook = books[smaller];

    books[index] = cheapestBook
    books[smaller] = currentBook
})

console.log(books)