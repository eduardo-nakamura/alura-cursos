const oddNumber = [1, 3, 5]
const evenNumber = [2, 4, 6]


const allNumbers = [...oddNumber, ...evenNumber]
console.log(allNumbers)

const [num1, num2, ...otherNumbers] = [1, 2, 3, 4, 5]

console.log(num1)
console.log(num2)
console.log(otherNumbers)

const [name1 = 'Ju'] = []
console.log(name1)

const person = { namePerson: 'jud', age: 25 }
const updatedPerson = { ...person, phone: 1234567 }
console.table(person)
console.table(updatedPerson)

const { age, namePerson, phone } = updatedPerson
console.log(age, namePerson, phone)

function printData(data){
    const { age, namePerson } = data
    console.log(namePerson, age)
}

function printDataAlt({namePerson, age}){
    console.log(namePerson, age)
}

printData(person)
printDataAlt(updatedPerson)