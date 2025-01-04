// Object, Array, Tuple, Enum

// console.log("Awo Seekhe typescript --------")

// Object

// ---- Concept-1 ----

// const person: {
//   firstname: string
//   age: number
//   lastname: string
//   Area: {
//     address: string
//   }
// } = {
//   firstname: "kausar",
//   lastname: 'Raza',
//   age: 19,
//   Area: {
//     address: "Lucknow"
//   }
// }
//console.log(person)
// console.log(person.firstname)
// console.log(person.lastname)
// console.log(person.age)
//console.log(person.Area.address)


// ----Concept-2---- Array

// const person: {
//   firstname: string
//   age: number
//   skills: string[]
// } = {
//   firstname: "Kausar",
//   age: 19,
//   skills:["ReactJs" , "NodeJs" , "ExpressJs"]
// }

// let favoriteLanguage: string[]
// favoriteLanguage= ["Urdu" , "English"]

// let favoriteLanguage1: any[] // loose ts power
// favoriteLanguage1= ["Urdu" , "English" , 2 , true]

// console.log(person)

// ------Concept-3 tuple -------
// tuple : means fixed array of size

// const person : {
//   name: string
//   age: number
//   skills: string[]
//   product: [number , string] // tuple
// } = {
//   name: "Kausar",
//   age: 19,
//   skills: ["React" , "Node"],
//   product: [10 , "Mackbook"]
// }

// person.product[0] = +"Apple"
// person.product[0] = 22
// console.log(person)


// Concept-4 Enum

enum Role {ADMIN, AUTHOR , READ_USER_ONLY}

const person = {
  name: "patel",
  age: 24,
  skills: ["React" , "Node"],
  product: [10 , "mackbook Pro"],
  role: Role.AUTHOR
}

if(person.role === Role.AUTHOR){
  console.log("Author")
}else if(person.role === Role.ADMIN){
  console.log("Admin")
}else if(person.role === Role.READ_USER_ONLY){
  console.log("read user only")
}