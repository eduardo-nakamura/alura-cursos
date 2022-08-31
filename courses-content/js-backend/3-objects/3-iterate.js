const client = {
    name: "Andre", 
    age: 36, 
    cpf: "12345678910", 
    email: "andre@email.com",
    phoneNumbers: ["1199999999","11933333333"],
    dependants: [
        {name: "Andrea", dateOfBirth: '20/03/2015', realationship: "Daughter"},
        {name: "Mary Lou", dateOfBirth: '20/03/2019', realationship: "Daughter"}
    ],
    balance: 100,
    deposit: function(value){
        this.balance += value
    }
}
const client2 = {
    name: "Andrew", 
    age: 36, 
    cpf: "12345678910", 
    email: "andre@email.com",
    phoneNumbers: ["1199999999","11933333333"],
    balance: 100,
    deposit: function(value){
        this.balance += value
    }
}

const client3 = {
    name: "Andre 3000", 
    age: 36, 
    cpf: "12345678910", 
    email: "andre@email.com",
    phoneNumbers: ["1199999999","11933333333"],
    dependants: [
        {name: "Hey", dateOfBirth: '20/03/2015', realationship: "Daughter"},
        {name: "Ya", dateOfBirth: '20/03/2019', realationship: "Daughter"}
    ],
    balance: 100,
    deposit: function(value){
        this.balance += value
    }
}

let form = ""
// iterate client for info
for (let info in client) {
    if(typeof client[info] === "object" || typeof client[info] === "function"){
        continue
    } else {
        form += `
        ${info}: ${client[info]}`
    }
    
}

console.log(form)

// check for dependants and send msg is dependants detected

function offerInsurance(obj){
    let propsClient = Object.keys(obj)
    if (propsClient.includes("dependants")){
        console.log("Offer Insurance to Dependants")
    } else {
        console.log("NO DEPENDANTS?")
    }
}
offerInsurance(client)
offerInsurance(client2)

// EXTRACT dependants from clients / spread operator
const clients = [client,client2,client3]
const listDependants = [...clients[0].dependants,  ...clients[2].dependants]
console.table(listDependants)