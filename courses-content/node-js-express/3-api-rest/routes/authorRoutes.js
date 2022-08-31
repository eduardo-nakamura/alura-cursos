import express from "express"
import AuthorController from "../controllers/authorsController.js"

const router = express.Router();

router
    .get("/authors", AuthorController.listAllAuthors)
    .get("/authors/:id", AuthorController.listAuthorById)    
    .post("/authors", AuthorController.postAuthor)
    .put("/authors/:id", AuthorController.updateAuthor)
    .delete("/authors/:id", AuthorController.removeAuthor)

export default router