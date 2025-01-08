// unkhown and any
let userInput : unknown
// let userInput : any
let username : string

userInput = 10

if(typeof userInput === "string"){
   username = userInput
}

function generateError(message : string , code : number): never{
    throw {message : message , statusCode : code}
}
const res = generateError("Internal Server Error" , 500)
console.log(res)