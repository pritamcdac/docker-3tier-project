db = db.getSiblingDB('project_db'); // Database name
db.createCollection('items');
db.items.insertMany([
    { name: "Item 1", description: "Description of item 1" },
    { name: "Item 2", description: "Description of item 2" },
]);
