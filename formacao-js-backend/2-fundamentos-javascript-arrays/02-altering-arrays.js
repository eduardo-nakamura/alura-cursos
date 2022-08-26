
// reduce array to sum all elements 4 + 6.5 + 8 + 7.5 + 10 + 10 + 10 + 4
const sumWithInitial = gradeConcat.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
);

console.log(gradeConcat.sort((a, b) => a + b )) // sort ascend
console.log(gradeConcat.sort((a, b) => a - b )) // sort descendung

const students = [ 'João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo' ]

const classA = students.slice(0, students.length / 2) // get students from position 0 to 5
const classB = students.slice(students.length / 2) // get students from position 6 to 10
console.log(`Class A students: ${classA}`)
console.log(`Class B students: ${classB}`)

//students.splice(1,2,"Rodrigo") remove ana Caio, add Rodrigo
students.splice(2,0,"Rodrigo")//add Rodrigo between Ana and Caio
const joinClasses =  classA.concat(classB)

// List Dimension
const listDimensionStudents = ['João', 'Juliana', 'Caio', 'Ana']
const listDimensionGrades = [10, 8, 7.5, 9]
const listDimensions = [listDimensionStudents,listDimensionGrades]

for(let i = 0; i < listDimensionStudents.length; i++){
    console.log(`Name: ${listDimensions[0][i]} | Grade: ${listDimensions[1][i]}`)
}
// console.log(`${listDimensions[0][0]}: ${listDimensions[1][0]}`)