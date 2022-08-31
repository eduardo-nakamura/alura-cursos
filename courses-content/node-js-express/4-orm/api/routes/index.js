const express = require('express');
const people = require('./peopleRoute')

module.exports = app => {
    app.use(express.json())
    app.use(people)
    // app.get('/', (req, res) => res.status(200).send({ message: 'Testing API' }))
}