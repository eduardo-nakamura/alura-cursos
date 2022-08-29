// Classes
class Person {
    constructor(name, familyName, cpf, email) {
        this.name = name
        this.familyName = familyName
        this.cpf = cpf
        this.email = email
    }

    fullname() {
        console.log(`${this.name} ${this.familyName}`)
    }
}

//inheritance
class Programmer extends Person { // extends class Person
    constructor(name, familyName, cpf, email, language) {
        super(name, familyName, cpf, email) // inherit
        this.language = language
    }
}

const dev = new Programmer("Andre", "Silve", "123456", "andre@email.com", "Javascript")
console.table(dev)


class Client {
    constructor(name, cpf, email, balance) {
        this.name = name
        this.balance = balance
        this.cpf = cpf
        this.email = email
    }
    depositBalance(value) {
        this.balance += value
    }
    showBalance() {
        console.log(this.balance)
    }
    printNameEmail(clientType) {
        console.log(`${clientType} - nome: ${this.name}, email: ${this.email}`)
    }
}
const client = new Client("Andre", "123456", "andre@email.com", 66)
console.table(client)
client.depositBalance(34)
client.showBalance()

// call()
function printNameEmailCall(clientType) {
    console.log(`${clientType} - nome: ${this.name}, email: ${this.email}`)
}
const clientCall1 = {
    name: "Carlos",
    email: "c@email.com"
}

const clientCall2 = {
    name: "Fred",
    email: "f@email.com"
}
printNameEmailCall.call(clientCall1, "Premium Client")
printNameEmailCall.call(clientCall2, "Student Client")

//apply()
function printNameEmailApply(clientType, ag) {
    console.log(`${clientType} from ${ag} - nome: ${this.name}, email: ${this.email}`)
}

const clienteApply1 = {
    name: "Carlos",
    email: "c@email.com"
}

const clienteApply2 = {
    name: "Fred",
    email: "f@email.com"
}

const clienteSpecial = ["Premium Client", "Rio de Janeiro"]
const clienteStudent = ["Student Client", "Fortaleza"]
printNameEmailApply.apply(clienteApply1, clienteSpecial)
printNameEmailApply.apply(clienteApply2, clienteStudent)

//bind
const char = {
    name: "Princesa Leia",
    printName: function () {
        return `This character name is ${this.name}`
    }
}
const personagemGenerico = char.printName // name undefined
console.log(personagemGenerico())

const personagemDefinido = personagemGenerico.bind(char)
console.log(personagemDefinido())

class Saving extends Client {
    constructor(name, cpf, email, balance, savings) {
        super(name, cpf, email, balance)
        this.savings = savings
    }

    depositSavings(value) {
        this.savings += value
    }
}

const userSaving = new Saving("Andre", "123456", "andre@email.com", 500, 600)

console.table(userSaving)
userSaving.depositSavings(400)
userSaving.depositBalance(500)
console.table(userSaving)