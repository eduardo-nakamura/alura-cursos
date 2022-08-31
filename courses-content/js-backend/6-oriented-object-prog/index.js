import User, { Admin, Teacher } from './class.js';

const newUser = new User('Juliana','Ju', 'ju@ju', '2010/10/10');
const newAdmin = new Admin('Admin','User', 'admin@admin', '2006/06/06');
const newTeacher = new Teacher('Professor','Pardal', 'prof-pardal@prof', '2005/05/05');


// console.log(newAdmin.createCourse('Banana', 69))

// console.log(newTeacher.approveStudent('Dewey', 'Something'))

console.log(newUser.printInfo())
newAdmin.nameUser = 'Neste'
// newAdmin.emailUser = 'Amdin@email.com'
console.log(newAdmin.printInfo())