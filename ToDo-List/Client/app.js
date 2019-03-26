let sendButton = document.getElementById("sendButton")
let firstNameTextBox = document.getElementById("firstNameTextBox")
let lastNameTextBox = document.getElementById("lastNameTextBox")
let priorityTextBox = document.getElementById("priorityTextBox")
let taskNameTextBox = document.getElementById("taskNameTextBox")
let chorelist = document.getElementById("chorelist")


sendButton.addEventListener('click',function() {

  let firstName = firstNameTextBox.value
  let lastName = lastNameTextBox.value
  let taskName = taskNameTextBox.value
  let priority = priorityTextBox.value

  fetch('http://localhost:3000/chorelist', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    userFirstName: firstName,
    userLastName: lastName,
    userTaskName: taskName,
    userPriority: priority

  })
}).then(response => {
    return response.json()
}).then(json => getchores())
})

function getchores(){

  fetch('http://localhost:3000/chores')
.then(response => {
  return response.json()
}).then(function(printchores)
)



function printchores() {

  let liItems = `<li> ${firstname}
                      ${lastname}
                      ${taskname}
                      ${priority}`
}

chorelist.innerHTML = liItems.join('')




}


getchores()
