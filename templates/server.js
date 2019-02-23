const express = require("express");
let  mongoose = require('mongoose');
const app = new express();

app.use(express.static(__dirname + '/public'));

var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/dinosaurs', function (req, res) {
    mongoose.connect('mongodb://{{load_balancer_ip}}:{{mongos_port}}@{{load_balancer_ip}}:{{mongos_port}}/{{mongodb_database}}');
    const animalSchema = new mongoose.Schema({ name: String, type: String });

    let Animal = mongoose.model('dinosaurs', animalSchema);

    Animal.find({}, '', function (err, animal) {
        return res.json(animal);
    });
});
app.use('/api', router);
app.listen("80");
