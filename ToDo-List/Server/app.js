const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(cors())
// POST first name and last name

let chores = []


app.get("/chores", (req,res) => {
  res.json(chores)
})

app.post('/chorelist',(req,res) => {
  let firstname = req.body.userFirstName
  let lastname = req.body.userLastName
  let taskname =req.body.userTaskName
  let priority = req.body.userPriority

  console.log(firstname)
  console.log(lastname)
  console.log(taskname)
  console.log(priority)


let chorelist = ({firstname: firstname, lastname: lastname, taskname: taskname, priority: priority})

res.send(chorelist)
chores.push(chorelist)
})



app.listen(3000,() => {
console.log("Server is running...")
})
