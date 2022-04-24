import { createServer } from 'http'

const hostname = '127.0.0.1'
const port = 3000

const server = createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end("Hello World\n")
})

server.listen(port, hostname, () => {
    console.log('Server running at\x1b[33m', `http://${hostname}:${port}\x1b[0m`)
})
