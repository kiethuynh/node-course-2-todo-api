//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    /*db.collection('Todos').find({_id: new ObjectID('5b7a09b823dd09044855af97')}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });*/

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
        
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    /*db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2))
    })*/

    /*db.collection('Users').insertOne({
        name: 'Andy',
        age: '37',
        location: 'Kapolei'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2))
        console.log(result.ops[0]._id.getTimestamp());
    })*/

    //client.close();
})