const minAge = 18
const clientAge = 16

// if

if(clientAge >= minAge){
    console.log('Beer')
} else {
    console.log('Milk')
}

// ternary: condition ? true : false
console.log(clientAge >= minAge ? 'Beer' : 'Milk')