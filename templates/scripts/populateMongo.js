const client = new Mongo();
const mongodb_database = '{{mongodb_database}}',
    mongodb_collection = '{{mongodb_collection}}',
    mongodb_user = '{{mongodb_user}}',
    mongodb_user_password = '{{mongodb_user_password}}'

const db = client.getDB(mongodb_database);

db.createCollection(mongodb_collection, function (err, result) {
    if (err) throw err;
    console.log("Collection is created!");
    db.close();
});

const collection = db.getCollection(mongodb_collection);
collection.deleteMany({})
collection.insertMany([
    { name: 'Tyrannosaurus', type: "Carnivorous" },
    { name: 'Velociraptor', type: "Carnivorous" },
    { name: 'Spinosaurus', type: "Carnivorous" },
    { name: 'Triceratops', type: "Herbivorous" },
    { name: 'Stegosaurus', type: "Herbivorous" }
], (err, result) => { });

// Access using the node.js bash
db.removeUser(mongodb_user);
db.createUser(
    {
        user: mongodb_user,
        pwd: mongodb_user_password,
        roles: [{ role: "read", db: mongodb_database }]
    }
);
// Access using the browser fetch to endpoint
const adminDb = client.getDB("admin");
adminDb.removeUser(mongodb_user);
adminDb.createUser(
    {
        user: mongodb_user,
        pwd: mongodb_user_password,
        roles: [{ role: "read", db: mongodb_database }]
    }
);


