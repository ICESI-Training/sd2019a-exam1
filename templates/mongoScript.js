const client = new Mongo();

const db = client.getDB("{{mongodb_database}}");

db.createCollection("{{mongodb_collection}}", function (err, result) {
    if (err) throw err;
    console.log("Collection is created!");
    db.close();
});

const collection = db.getCollection("{{mongodb_collection}}");
collection.deleteMany({})
collection.insertMany([
    { name: 'Tyrannosaurus', type: "ee" },
    { name: 'Velociraptor', type: "ee" },
    { name: 'Spinosaurus', type: "ee" },
    { name: 'Triceratops', type: "ee" }
], (err, result) => { });

db.removeUser("{{mongodb_user}}");
db.createUser(
    {
        user: "{{mongodb_user}}",
        pwd: "{{mongodb_user_password}}",
        roles: [{ role: "read", db: "{{mongodb_database}}" }]
    }
);

