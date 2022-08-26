const listDimensionStudents = ['João', 'Juliana', 'Caio', 'Ana']
const listDimensionGrades = [10, 6.5, 8, 7.5]
const listDimensions = [listDimensionStudents,listDimensionGrades]

function searchName(name) {
  if(listDimensions[0].includes(name)){
    index = listDimensions[0].indexOf(name)
    console.log(`${listDimensions[0][index]} your grade is ${listDimensions[1][index]}`)
  } else {
    console.log(`Student ${name} does not exist.`)
  }
}

searchName('Juliana')
searchName('Caio')
searchName('Eduardo')

// For
const numberList = [100,200,300,400,500,600]
for (let index = 0; index < numberList.length; index++) {
    console.log(index, numberList[index])
}
// media for
let totalGrade = 0
for (let index = 0; index < listDimensionGrades.length; index++) {
    totalGrade += listDimensionGrades[index]    
}
totalGrade /= listDimensionGrades.length
console.log(`Media For ${totalGrade}`)

// media forEach
let totalGradeEach = 0
listDimensionGrades.forEach(element => {
    totalGradeEach += element
});
totalGradeEach /= listDimensionGrades.length
console.log(`Media ForEach ${totalGradeEach}`)