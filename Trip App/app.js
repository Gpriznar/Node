const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// tell express to use mustache templating engine
app.engine('mustache',mustacheExpress())
// the pages are located in views directory
app.set('views','./views')
// extension will be .mustache
app.set('view engine','mustache')

let trips = []

app.get("/addtrip", (req,res) => {
  res.render('addtrip',{trips: trips})
})


app.post('/addtrip',(req,res) => {
  let title = req.body.tripTitle
  let image = req.body.tripImage
  let dod =req.body.tripDod
  let dor = req.body.tripDor
  let id = guid()



let tripslist = ({title: title, image: image, dod: dod, dor: dor, id: id})
trips.push(tripslist)

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

app.listen(3000,() => {
console.log("Server is running...")
})
