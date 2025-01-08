// unkhown and any
var userInput;
// let userInput : any
var username;
userInput = 10;
if (typeof userInput === "string") {
    username = userInput;
}
function generateError(message, code) {
    throw { message: message, statusCode: code };
}
var res = generateError("Internal Server Error", 500);
console.log(res);
