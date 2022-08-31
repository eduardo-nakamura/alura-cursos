import express from "express"

const app = express()

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

export default app