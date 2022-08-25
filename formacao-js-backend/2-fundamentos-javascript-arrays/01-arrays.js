const grades = [10, 6.5, 8, 7.5]
const grades2 = [10, 10, 10, 10]

const media = (gradesArr) => {        
    let total = 0
    for(let i = 0; i < gradesArr.length; i++){
        total += gradesArr[i]        
    }    
    // return total / 4    
    console.log(`Grade is ${total / 4}`)
};

media(grades)
media(grades2)

// add elements
const gradesA = [10, 6, 8]
// if length is 3, push 7
if(gradesA.length === 3) {gradesA.push(7)}
media(gradesA)

// remove elements
const gradesB = [10, 7, 8, 5, 10]
// if length is 5, remove last number
if(gradesB.length === 5) {gradesB.pop()}
media(gradesB)

// concat()
const gradeConcat = grades.concat(grades2) // [10, 6.5,  8, 7.5, 10,  10, 10,  10]
const gradeFilter = gradeConcat.filter(grd => grd > 7) // [10,  8, 7.5, 10, 10, 10,  10]
const gradeFind = gradeConcat.find(grd => grd === 7.5) // 7.5
const gradeFindIndex = gradeConcat.findIndex(grd => grd === 6.5) // index 1
const gradeIndexOf = gradeConcat.indexOf(10) // index 0 first 10
const gradeLastIndexOf = gradeConcat.lastIndexOf(10) // index 7 last 10
gradeConcat.forEach(element => console.log(element)); // print each element
const gradePop = gradeConcat.pop() // remove last element 10
const gradeShift = gradeConcat.shift() // remove first element 10
const gradePush = gradeConcat.push(4) // add number 4 in last position
const gradeUnshift = gradeConcat.unshift(4) // add number 4 in first position
const gradeReverse = gradeConcat.reverse() // reverse order
const gradeSlice = gradeConcat.slice(2) // remove second element 6.5


// reduce array to sum all elements 4 + 6.5 + 8 + 7.5 + 10 + 10 + 10 + 4
const sumWithInitial = gradeConcat.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
);

console.log(gradeConcat.sort((a, b) => a + b )) // sort ascend
console.log(gradeConcat.sort((a, b) => a - b )) // sort descendung

