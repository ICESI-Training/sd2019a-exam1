const client = new Mongo();

const db = client.getDB("{{mongodb_database}}");

db.createCollection("{{mongodb_collection}}", function(err, result) {
    if (err) throw err;
    console.log("Collection is created!");
    // close the connection to db when you are done with it
    db.close();
});

const  collection = db.getCollection("{{mongodb_collection}}");
collection.deleteMany({})
collection.insertMany([{ name: 'Tyrannosaurus' }, { name: 'Velociraptor' }, { name: 'Spinosaurus' }, { name: 'Triceratops' }], (err, result) => {

});

const adminDb = client.getDB("admin");
/* adminDb.createUser(
    {
        user: "{{ mongodb_admin_user }}", 
        pwd: "{{mongodb_admin_password}}",
        roles: [{ role: "webAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase"]
    }
); */

adminDb.removeUser("{{mongodb_user}}");
adminDb.createUser(
    {
        user: "{{mongodb_user}}",
        pwd: "{{mongodb_user_password}}",
        roles: [{ role: "read", db: "{{mongodb_database}}" }]
    }
);
adminDb.getUsers();
