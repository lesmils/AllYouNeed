const patients = require("./patients")
// console.log("patients", patients)

//I want an array with only firstNames ? use Map
// What map returns? // [a, b, c, d] => [a, a, a, a]
const firstNames = patients.map(eachObject => eachObject.firstName)
console.log("firstNames", firstNames)


//I want an array with only female patients
// What filter returns? [a, b, b, c, d] => (b) => [b, b]
const onlyFemalePatients = patients.filter(eachObject => eachObject.gender === "f")
console.log(onlyFemalePatients)

//I want an object 2402
// What find returns? It returns an object, first that matches the contidion
const patientById = patients.find(object => object.id === 2402)
console.log(patientById)