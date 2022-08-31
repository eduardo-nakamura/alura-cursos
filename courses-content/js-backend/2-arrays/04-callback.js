const names = ['João', 'Juliana', 'Caio', 'Ana']

names.forEach(printName)

function printName(name) {
    console.log(name)
}

// map
const grades = [10, 9, 8, 7, 6]
const updateGrades = grades.map(grade => grade < 10 ? ++grade : grade)

console.log(grades)
console.log(updateGrades)

// Alter Strings array
const updateNames = names.map(name => name.toUpperCase())
console.log(updateNames)
