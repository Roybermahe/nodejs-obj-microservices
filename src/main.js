const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

routes(app);

app.listen(port, function() {
    require('./database/providerConnection');
    console.log(' Server start in port: ' + port);
});