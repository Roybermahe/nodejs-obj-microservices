var Person = require('./person');

function Employee(name, lastname, age, id) {
    Person.call(this,name, lastname, age, id);
    this.dept = "general";
}

module.exports = Employee;