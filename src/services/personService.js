const Employee = require('../models/employee');
var Person = require('../models/employee');

var PersonMapping = {
    loadPerson: function(req, res) {
        return new Employee(req.body.name, req.body.lastname, req.body.age, req.body.id);
    }
}

module.exports = PersonMapping;