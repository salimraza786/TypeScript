// UNION

// function combine(num1: number | string , num2: number | string){
//   let result ;
//   if(typeof num1 === "number" && typeof num2 === "number"){
//      result = num1 + num2
//   }else {
//      result = num1.toString() + num2.toString()
//   } 
//   return result
// }
// const sum = combine(10 , 20)
// const combineSum = combine("str" , "world")
// console.log(sum , combineSum)

// LITERAL TYPES
// function combine(num1: number | string , num2: number | string , conversionType : "as-number" | "as-string"){
//     let result ;
//     if(typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number"){
//        result = +num1 + +num2
//     }else {
//        result = num1.toString() + num2.toString()
//     } 
//     return result
//   }
//   const sum1 = combine(10 , 20 , "as-number")
//   const sum2 = combine(10 , 50 , "as-number")
//   const combineSum = combine("str" , "War" , "as-string")
//   console.log(sum1 , combineSum)

// TYPE ALIAS / SURTOM TYPES 

type Combinable = number | string
type ConversionType = "as-number" | "as-string"

function combine(num1: Combinable , num2: Combinable , conversionType : ConversionType){
  let result ;
  if(typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number"){
     result = +num1 + +num2
  }else {
     result = num1.toString() + num2.toString()
  } 
  return result
}
const sum1 = combine(10 , 20 , "as-number")
const sum2 = combine(10 , 50 , "as-number")
const combineSum = combine("str" , "War" , "as-string")
console.log(sum1 , combineSum)

// example : 2

type User = {
  name: string
  age: number
  skills: string[]
}

const user: User = {
  name : "patel",
  age : 26 ,
  skills : ["React" , "Node"]
}
console.log(user)