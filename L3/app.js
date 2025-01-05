// UNION
function combine(num1, num2, conversionType) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum1 = combine(10, 20, "as-number");
var sum2 = combine(10, 50, "as-number");
var combineSum = combine("str", "War", "as-string");
console.log(sum1, combineSum);
var user = {
    name: "patel",
    age: 26,
    skills: ["React", "Node"]
};
console.log(user);
