import express from "express"
import BookController from "../controllers/booksController.js"

const router = express.Router();

router
    .get("/books", BookController.listAllBooks)
    .get("/books/:id", BookController.listBookById)    
    .post("/books", BookController.postBook)
    .put("/books/:id", BookController.updateBook)
    .delete("/books/:id", BookController.removeBook)

export default router