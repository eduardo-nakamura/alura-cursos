// same function arrow
const presentArrowFunction = name => `My name is ${name}`

const addNum = (num1,num2) => num1 + num2

const addSmallNum = (num1,num2) => {
    if (num1 > 10 || num2 > 10){
        return 'Only values between 1 and 10'
    } else {
        return num1 + num2
    }
}

console.log(presentArrowFunction('fefe'))
console.log(addNum(5,6))
console.log(addSmallNum(5,6))
console.log(addSmallNum(11,6))