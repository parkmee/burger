const mysql = require('mysql');

const connection = mysql.createConnection(process.env.JAWSDB_URL ||
    {
    host: "localhost",
    port: 3306,
    user: "root",
    database: "burgers_db"
});

connection.connect(err => {
    if (err) throw err;
    console.log(`Connection as id ${connection.threadId}`);
});

module.exports = connection;