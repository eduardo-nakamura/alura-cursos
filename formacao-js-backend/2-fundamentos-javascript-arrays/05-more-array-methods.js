const names = ['João', 'Juliana', 'Caio', 'Ana']
const grades = [7, 4.5, 8, 7.5]

const notPass = names.filter((_, index) => grades[index] < 5)

console.log(`notPass: ${notPass}`)

// calculate grades each class
const classJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const classJava = [6, 5, 8, 9, 5, 6]
const classPython = [7, 3.5, 8, 9.5]

function calcAvg(params) {
    let total = params.reduce((prev, current) => prev + current,0)
    return total / params.length
}

const avgJs = classJs.reduce((prev, current) => prev + current,0) / classJs.length

const gradesClasses = [calcAvg(classJs), calcAvg(classJava),calcAvg(classPython)]
console.log(`Average Grade JS: ${avgJs}`)
console.log(`Average Grade  JS: ${gradesClasses[0]}`)
console.log(`Average Grade Java: ${gradesClasses[1]}`)
console.log(`Average Grade Python: ${gradesClasses[2]}`)
