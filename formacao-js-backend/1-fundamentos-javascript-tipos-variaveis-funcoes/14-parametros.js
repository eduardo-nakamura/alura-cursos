
// parameters 
function add(num1, num2){
    return num1 + num2
}

console.log(add(5,6))
console.log(add(50,60))
console.log(add(500,600))

// paramete order
function nameAge(name, age){
    return `My name is ${name} and i'm ${age} years old`
}

console.log(nameAge('Eduardo', 39))
console.log(nameAge(39, 'Eduardo'))

function multiply(num1 = 1,num2= 1){
    return num1 * num2
}
console.log(multiply(add(4,5),add(3,3)))
// single parameter
console.log(multiply(add(4,5)))