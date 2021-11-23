const port = 3003

//const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

server.use(express.urlencoded({extended: true}))
server.use(express.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, function(){
    console.log(`Backend rodando na porta ${port}`)
})

module.exports = server
