const textOne = "Hello, World!"
const textTwo = 'Password is: '
const password = '"@admin123"'
const numberString = '123456'
const quote = "'This is a Quote'"

console.log(textOne,textTwo, password,numberString, quote)

// concat
console.log(textTwo + password)

// character encoding \u + number
const dollarSign = '\u0024'
const capitalA = '\u0041'
const checkmark = '\u2705'
const hiragana = '\u3041'

console.log(dollarSign)
console.log(capitalA)
console.log(checkmark)
console.log(hiragana)

// uppercase + lowercase

const city = "belo horizonte";
const input = "Belo Horizonte";

console.log(city === input); // false
console.log(city === input.toLowerCase()); // true
console.log(city.length) // 14 characters