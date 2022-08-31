const http = require('http')
const port = 3000

const routes = {
    '/': 'Node Class',
    '/books': 'Books Pages',
    '/authors': 'Authors List',
    '/publishers': 'Publishers List',
    '/about': 'About Project',
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(routes[req.url])
})

server.listen(port, () => {
    console.log(`Server Listened in http://localhost:${port}`)
})