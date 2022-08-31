import mongoose from "mongoose"

mongoose.connect("mongodb+srv://admin:ELDgm8rgla901Z9Y@cluster0.ykdsa9u.mongodb.net/?retryWrites=true&w=majority");
//mongodb+srv://admin:T4odUsmY6pfF0LT6@cluster0.ykdsa9u.mongodb.net/?retryWrites=true&w=majority
let db = mongoose.connection

export default db;