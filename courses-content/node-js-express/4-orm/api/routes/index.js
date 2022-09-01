const express = require('express');
const peopleRt = require('./peopleRoute')
const classRt = require('./classRoute')
const levelRt = require('./levelRoute')

module.exports = app => {
    app.use(express.json())
    app.use(
        peopleRt,
        classRt,
        levelRt
    )
    // app.get('/', (req, res) => res.status(200).send({ message: 'Testing API' }))
}