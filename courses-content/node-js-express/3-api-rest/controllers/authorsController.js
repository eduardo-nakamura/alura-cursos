import authors from "../models/Author.js"

class AuthorController {
    // functions
    static listAllAuthors = (req, res) => {
        authors.find((err, authors) => {
            res.status(200).json(authors)
        })
    }

    static listAuthorById = (req, res) => {
        const id = req.params.id
        authors.findById(id, (err, authors) => {
            if (!err) {
                res.status(201).send(authors.toJSON())
            } else {
                res.status(400).send(err.message)
            }
        })
    }

    static postAuthor = (req, res) => {
        let author = new authors(req.body);
        author.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message}` })
            } else {
                res.status(201).send(author.toJSON())
            }
        })
    }

    static updateAuthor = (req, res) => {
        const id = req.params.id
        authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(201).send({ message: `Author info updated` })
            } else {
                res.status(500).send({ message: `${err.message}` })
            }
        })
    }

    static removeAuthor = (req, res) => {
        const id = req.params.id
        authors.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(201).send({ message: `Author removed` })
            } else {
                res.status(500).send({ message: `${err.message}` })
            }
        })
    }

}

export default AuthorController