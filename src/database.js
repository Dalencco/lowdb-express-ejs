const low = require('lowdb');
const FileSync = require("lowdb/adapters/FileSync");

let db;

async function createConnection() {
    const adapter = new FileSync('db.json');
    db = await low(adapter);
    db.defaults({ tasks: [] }).write();
};

const getConnection = () => db;

module.exports = {
    createConnection,
    getConnection
};