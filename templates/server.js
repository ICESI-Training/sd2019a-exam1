const express = require("express");
const app = new express();

app.use(express.static(__dirname + '/public'));

const router = express.Router(); // get an instance of the express Router

router.get('/dinosaurs', (req, res) => {
    const MongoClient = require('mongodb').MongoClient;
    const url = 'mongodb://{{mongodb_user}}:{{mongodb_user_password}}@{{database_ip}}:{{mongos_port}}/';

    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        let dbo = db.db("{{mongodb_database}}");
        dbo.collection("{{mongodb_collection}}").find({}).toArray((err, result) => {
            if (err) throw err;
            db.close();
            return res.json(result);
        });
    });
});
app.use('/api', router);
app.listen("80");
