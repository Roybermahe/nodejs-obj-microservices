'use strict';

const  personController = require('./controllers/personController');

module.exports = function(app) {
    app.route('/person').post(personController.person);
}
