// Step 1 - Install express

//npm init -y
//npm install express

//for run in the browser npx nodemon + file name


const patients = require("./patients")

// Step 2 - Require Express
const express = require("express")

// Step 3 - Assign it to a constant
const app = express()

// Step 4 - Declare a port
const port = 4000

// Step 5 - Start listening
//takes two arguments: port and callback 
app.listen(
  port, 
  () => console.log(`Listening on ${port}`)
  )


//Step 5andahalf RENDER message HTML 

const render = (person) => {
  const document =
  `<html>
      <head>
      <title>Message for you</title>
      </head>
      <body> 
      <h1> ${person} </h1>
      </body>
  </html>`
  
  return document
  }

app.get(
  '/person/:person',
  (request, response) => { // handler callback
    console.log(request.method);
    const person = `My favorite person is ${request.params.person}`
    const page = render(person)

    response.send(page);
  }
)


// Step 6 - Write endpoints

app.get("/", (request, response) => {
  console.log(request.method)
  console.log(request.path)
  response.send("Hello")
})

app.get("/story", (request, response) => {
  response.send("I had a dog and he died")
})

app.get("/me/:name", (request, response) => {
  const name = request.params.name
  console.log(request.params.name)
  response.send(`Hello, ${name}`)
})



//send a list of all patients
app.get("/patients", (request, response) => {
  response.send(patients)
})

//(FIND)send a patient by id
app.get("/id/:id", (request, response) => {
  const id = request.params.id
  const patientById = patients.find(patient => patient.id === parseInt(id))
  response.send(patientById)
})

//(FILTER)send patients by gender
app.get("/gender/:gender", (request, response) => {
  const gender = request.params.gender
  const patientsByGender = patients.filter(patient => patient.gender === gender)
  response.send(patientsByGender)
})


//MAP sendes specific patient properties
app.get("/height/:height", (request, response) => {
  const id = request.params.height
  const patientsByHeight = patients.map(patient => patient.id)
  response.send(patientsByHeight)
})

/*
app.get(
  '/externalHTML', 
 (request, response) => {     // handler callback, whenever request is made, this happens
    console.log(request.method);
    response.sendFile('/home/milton/Code/day3notes/index.html'); //use path, create HTML file
  }
)
*/
