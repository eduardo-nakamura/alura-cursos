import mongoose from "mongoose"

mongoose.connect("mongodb+srv://admin:T4odUsmY6pfF0LT6@cluster0.ykdsa9u.mongodb.net/");

let db = mongoose.connection

export default db;