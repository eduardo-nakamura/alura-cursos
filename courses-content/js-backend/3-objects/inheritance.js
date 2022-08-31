class Client {
    constructor(name,email,cpf,balance){
        this.name =name
        this.email =email
        this.cpf =cpf
        this.balance =balance
    }

    deposit(value){
        this.balance += value
    }

    showBalance(){
        console.log(`Total: ${this.balance}`)
    }
}

class Saving extends Client {
    constructor(name, email, cpf, balance, savings){
        super(name, email, cpf, balance)
        this.savings = savings
    }

    depositSavings(value){
        this.savings += value
    }
}

const andre = new Saving("Andre", "a@mail.com", "12312312312", 100, 200)
console.table(andre)
andre.deposit(50)
andre.depositSavings(50)
console.table(andre)