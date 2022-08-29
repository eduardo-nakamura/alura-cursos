// prototype Properties
function Client(name, cpf,email,balance){
    this.name = name
    this.cpf = cpf
    this.email = email
    this.balance = balance
    this.deposit = function(value){
        this.balance += value
    }
}

const andre = new Client("André", '12345678912', 'andre@gmail.com', 100)
console.log(`Client`)
console.log(andre)

// altering prototype
function ClientSaving(name, cpf,email,balance, savingBalance){
    Client.call(this,name,cpf,email,balance)
    this.savingBalance = savingBalance
}
const ju = new ClientSaving("Ju", '98765432178', 'ju@gmail.com', 100, 200)
console.log(`Client Saving`)
console.log(ju)
ClientSaving.prototype.depositSaving = function(value){
    this.savingBalance += value
}
ju.depositSaving(500)
console.log(ju.savingBalance)