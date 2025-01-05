//Function return type
// function sum(num1: number , num2: number) : number {
//    return num1+num2
//   //  console.log(num1+num2)
// }
//  console.log(sum(10 , 70))
// function greet(name : string) : void {
//    console.log(`Welcome ${name}`)
// }
// greet("Shreya")
// function greet1(name : string) : string{
//    return `W---elcome ${name}`
// }
// const ans = greet1("Shreya")
// console.log(ans)
// let combineFunctione: Function;
// combineFunctione = 10 // invalid
// combineFunctione = function(){} // valid
// combineFunctione = sum
// console.log(combineFunctione(1 , 2))
// function add(num1 : number , num2 : number) {
//   console.log(num1 + num2)
// }
// let combineFunction : (a : number , b : number) => number
// combineFunction = add 
// console.log(combineFunction(100 , 200))
// Function Type and callback
function addhandle(num1, num2, cb) {
    var res = num1 + num2;
    cb(res);
}
addhandle(10, 90, function (result) {
    console.log(result);
});
