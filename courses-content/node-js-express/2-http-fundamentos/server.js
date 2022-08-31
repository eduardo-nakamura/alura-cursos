const express = require('express')

const app = express()

app.get('/', (req, res) => {
    const val = req.query.externalData
    const responseValue = `You requested ${val}`
    res.send(responseValue)
})

const port = 3000
app.listen(port, () =>{
    console.log(`
        http://localhost:${port}
    `)
})