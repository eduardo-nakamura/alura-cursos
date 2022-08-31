import books from "../models/Book.js"

class BookController {
    // function
    static listAllBooks = (req, res) => {
        books.find((err, books) => {
            res.status(200).json(books)
        })
    }

    static postBook = (req, res) => {
        let book = new books(req.body);
        book.save((err) => {
            if (err) {
                res.status(500).send({message:`${err}`})
            } else {
                res.status(201).send(book.toJSON())
            }
        })
        
    }
}

export default BookController