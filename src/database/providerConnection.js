require('reflect-metadata');
var typeorm = require("typeorm");
var EntitySchema = typeorm.EntitySchema;
const uri = "mongodb+srv://royber:9rLEgQkVFIdFL68k@pruebamongo.jlmxz.mongodb.net/testMongo?retryWrites=true&w=majority"
var ObjectID = require('mongodb').ObjectID;

typeorm.createConnection({
    type: 'mongodb',
    url: uri,
    logging: true,
    synchronize: true,
    ssl: true,
    useUnifiedTopology: true,
    entities: [ 
        new EntitySchema(require('../entitys/person.json'))
    ]
})
.then(function(connection) {
    return connection.getMongoRepository('person');
})
.then(function(mongoRepository){
    var person = [{
        _id: new ObjectID(),
        name: "royber",
        age: 12
    }];
    console.log('connected');
    mongoRepository.save(person).then(function() {
        console.log('guardado');
    }).catch(function(err) {
        console.log(err);
    });
})
.catch(function (error) {
    console.log(error);
});