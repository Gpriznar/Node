const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const path = require('path')
var session = require('express-session')
const app = express()

const VIEWS_PATH= path.join(__dirname, '/views');
console.log(VIEWS_PATH)

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// tell express to use mustache templating engine
app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
// the pages are located in views directory
app.set('views','./views')
// extension will be .mustache
app.set('view engine','mustache')

//     Users      //

let users = []
let persistedUser = {}

app.post('/register', (req,res) => {
  let username = req.body.username
  let password = req.body.password

  let user = {username: username, password: password, userTrips: []}
  users.push(user)
  console.log(users)

  res.render('home', {messageA: 'Thank you for registering! Please login below.'})
})

app.post('/login', (req,res) => {
  let username = req.body.username
  let password = req.body.password

  let user = {username: username, password: password, userTrips: []}

    persistedUser = users.find((user) => {
    return user.username == username && user.password == password
  })

  if(persistedUser) {
    if(req.session) {
      req.session.username = persistedUser.username
      res.redirect('/addtrip')
    }
  } else {
    res.render('home', {message: 'The User Name or Password is incorrect. Please try again!'})
  }
})

app.post('/logout', (req,res) => {
  req.session.destroy(function(err) {
    if(err) {
      console.log(err)
    } else {
      res.redirect('/home')
    }
  })
})

app.get('/home', (req,res) => {
  res.render('home')
})

//     Trips      //

let trips = []

app.get("/addtrip", (req,res) => {
  res.render('addtrip',{trips: persistedUser.userTrips})
})

app.post('/addtrip',(req,res) => {
  let title = req.body.tripTitle
  let image = req.body.tripImage
  let dod =req.body.tripDod
  let dor = req.body.tripDor
  let id = guid()

let tripslist = ({title: title, image: image, dod: dod, dor: dor, id: id})
persistedUser.userTrips.push(tripslist)
console.log(persistedUser)

res.redirect('/addtrip')
})

function guid(){
  return (((1+Math.random())*0x100000)|0).toString(16).substring(1);
}

app.post('/deletetrip',(req,res) =>{
  let tripID = req.body.id
  console.log(tripID)

  trips = trips.filter(function(trip){
    return trip.id != tripID
  })

  res.render('addtrip',{trips:trips})
})

// Listen for server //

app.listen(3000,() => {
console.log("Server is running...")
})
