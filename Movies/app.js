const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const moviesRoute = require('./routes/movies')
const path = require('path')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/movies', moviesRoute)


// CSS Route
// app.use('/css/style.css',express.static('css'))

const VIEWS_PATH= path.join(__dirname, '/views');
console.log(VIEWS_PATH)

app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))

app.set('views', './views')

app.set('view engine', 'mustache')

app.listen(3000,() => {
  console.log("Server is online...")
})
