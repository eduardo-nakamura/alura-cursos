const client = {
    name: "Andre", 
    age: 36, 
    cpf: "12345678910", 
    email: "andre@email.com",
    phoneNumbers: ["1199999999","11933333333"],
    balance: 100,
    deposit: function(value){
        this.balance += value
    }
}
// access client phone numbers
console.log(`${client.name}'s phone numbers: ${client.phoneNumbers}`)

// add dependants person to cliente, with name, age and relationship
client.dependants = [{name: "Andrea", dateOfBirth: '20/03/2015', realationship: "Daughter"}]
client.dependants[0].name = "Sara Lee"
// console.log(client.dependants)

// add another dependant
client.dependants.push({name: "Mary Lou", dateOfBirth: '20/03/2019', realationship: "Daughter"})
console.log(client)
// add filter by DOB
const youngestDaughter = client.dependants.filter(depend => depend.dateOfBirth === '20/03/2019')
console.log(youngestDaughter[0].name)

// deposit value
console.log(client.balance)
client.deposit(-50)
console.log(client.balance)