import books from "../models/Book.js"

class BookController {
    // functions
    static listAllBooks = (req, res) => {
        books.find((err, books) => {
            res.status(200).json(books)
        })
    }

    static listBookById = (req, res) => {
        const id = req.params.id
        books.findById(id, (err, books) => {
            if(!err){
                res.status(201).send(books.toJSON())
            } else {
                res.status(400).send(err.message)
            }
        })
    }

    static postBook = (req, res) => {
        let book = new books(req.body);
        book.save((err) => {
            if (err) {
                res.status(500).send({message:`${err.message}`})
            } else {
                res.status(201).send(book.toJSON())
            }
        })        
    }

    static updateBook = (req, res) => {
        const id = req.params.id
        books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(201).send({message:`Book info updated`})
            } else {
                res.status(500).send({message:`${err.message}`})
            }
        })
    }

    static removeBook = (req, res) => {
        const id = req.params.id
        books.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(201).send({message:`Book removed`})
            } else {
                res.status(500).send({message:`${err.message}`})
            }
        })
    }

}

export default BookController