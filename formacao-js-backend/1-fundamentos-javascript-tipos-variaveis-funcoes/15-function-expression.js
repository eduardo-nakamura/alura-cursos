const addFunction = function(num1,num2) { return num1 + num2}
console.log(addFunction(3,5))

// compare function and function expression: Hoisting

console.log(present())

function present(){
    return "Hello"
}

const presentExp = function(greeting) { return greeting}
console.log(presentExp("hello"))