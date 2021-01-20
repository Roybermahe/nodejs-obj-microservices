'use strict';

var persons = require('../services/personService');

var personController = {
    person: function (req, res) {
        var person = persons.loadPerson(req, res);
        res.json(person);
    }
}

module.exports = personController;