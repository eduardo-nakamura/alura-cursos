// array
const listCPF = ["11111111111","22222222222"]

// obj
const client = {
    name: "Andre", // key: value string
    age: 36, // key: value number
    cpf: "12345678910", // key: value string
    email: "andre@email.com" // key: value string
}

//print info
console.log(`Name: ${client.name}`)
console.log(`Age: ${client.age} years old`)
console.log(`CPF: ${client.cpf.substring(0,3)}.***.***-**`)
const keyNames = ['name','age','cpf','email']

keyNames.forEach(name => console.log(`${name.toUpperCase()}: ${client[name]}`))

// add/delete key and Value
client.phoneNumber = '11999999999'
console.log(client)
client.age = 37
console.log(client)
delete client.email
console.log(client)