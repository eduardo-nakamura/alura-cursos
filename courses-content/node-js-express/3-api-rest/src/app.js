import express from "express"
import db from "../config/dbConnect.js"
import books from "../models/Book.js"
import routes from "../routes/index.js"


db.on("error", console.log.bind(console, 'Database Connection Error'))
db.once("open", () => {
    console.log('Database Connection Success')
})

const app = express()

app.use(express.json())

routes(app)

app.put('/books/:id', (req, res) => {
    let { id, name } = req.params
    let index = searchBook(id); // find book position
    books[index].name = name // change book title to name in req    
    res.json(books);
})

app.delete('/books/:id', (req, res) => {
    let { id } = req.params
    let index = searchBook(id); // find book position
    books.splice(index,1) // Remove 1 object from index position
    res.send(`Book ${id} Removed`);
})

// search book
function searchBook(id) {
    return books.findIndex(bookId => bookId.id == id)
}

export default app