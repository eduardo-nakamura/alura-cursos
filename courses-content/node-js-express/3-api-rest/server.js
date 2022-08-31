const http = require('http')
const port = 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Node Class')
})

server.listen(port, () => {
    console.log(`Server Listened in http://localhost:${port}`)
})