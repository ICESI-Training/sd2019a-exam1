console.log("client side script");
/* const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect("{{load_balancer_ip}}:{{mongos_port}}", function (err, client) {
    console.log("Connected successfully to server");

    const db = client.db("{{mongodb_database}}");
    db.auth("{{mongodb_user}}", "{{mongodb_user_password}}");
    const collection = db.getCollection("{{mongodb_collection}}");
    console.log("it works", collection.find());
    client.close();
});
 */





/* const Mongo = require('mongodb');
const client = new Mongo("{{load_balancer_ip}}:{{mongos_port}}");
const db = client.getDB("{{mongodb_database}}");
db.auth("{{mongodb_user}}", "{{mongodb_user_password}}")
const collection = db.getCollection("{{mongodb_collection}}");
console.log("it works", collection.find()); */