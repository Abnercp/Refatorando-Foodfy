const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const dados = require('./data')
const recipes = require('./data')

server.use(express.static('public'))

server.set("view engine", "njk") 

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
} )

server.get('/', function (req,res) {
    return res.render('home', { accesses: dados})
})

server.get('/about', function (req,res) {
    return res.render('about')
})

server.get('/receitas', function (req,res) {
    return res.render('receitas', { items: dados})
})

server.get('/recipe/:id', function (req,res) {
    const id = req.params.id

    const recipe = recipes[id]

    return res.render('recipe', { item: recipe })
    
})

server.listen(5000, function () {
    console.log('Server is running')
})