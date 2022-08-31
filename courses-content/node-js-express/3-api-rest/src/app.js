import express from "express"

const app = express()

app.use(express.json())

const books = [
    {id:1, name:'Bullet Train'},
    {id:2, name:'Fist of the North Star Vol 1'},
]

app.get('/', (req, res) => {
    res.status(200).send('Home')
})

app.get('/books', (req, res) => {
    res.status(200).json(books)
})

app.post('/books', (req, res) => {
    books.push(req.body) // add book obj
    res.status(201).send('Book Added')
})

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