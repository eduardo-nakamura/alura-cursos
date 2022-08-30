export default class User {
    #name
    #email
    #dob
    #role
    #active
    #familyName
    constructor(name, familyName, email, dob, role, active = true) {
        this.#name = name
        this.#familyName = familyName
        this.#email = email
        this.#dob = dob
        this.#role = role || 'student'
        this.#active = active
    }
    get nameUser() { return `${this.#name} ${this.#familyName}` }
    get familyNameUser() { return this.#familyName }
    get emailUser() { return this.#email }
    get dobUser() { return this.#dob }
    get roleUser() { return this.#role }
    get activeUser() { return this.#active }
    // set new values
    set nameUser(newName) {
        if (newName === '') {
            throw new Error('Name is Empty')
        }
        this.#name = newName
    }
    set familyNameUser(newName2) {
        if (newName2 === '') {
            throw new Error('Family Name is Empty')
        }
        this.#familyName = newName2
    }

    printInfo() {
        return `${this.nameUser}, ${this.emailUser}, ${this.dobUser}, ${this.roleUser}, ${this.activeUser}`
    }
}

export class Admin extends User {
    constructor(name, familyName, email, dob, role = 'Admin', active = true) {
        super(name, familyName, email, dob, role, active)
    }

    printInfo() {
        return `${this.nameUser}, ${this.roleUser}, ${this.activeUser}`
    }

    createCourse(courseName, studentsNum) {
        return `Course ${courseName} created by ${this.nameUser}. ${studentsNum} students allowed`
    }
}

export class Teacher extends User {
    constructor(name, familyName, email, dob, role = 'Teacher', active) {
        super(name, familyName, email, dob, role, active)
    }

    approveStudent(nameStudent, className) {
        return `${nameStudent} passed ${className}`
    }
}