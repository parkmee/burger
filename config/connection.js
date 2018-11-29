const mysql = require('mysql');

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL); 
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        database: "burgers_db"
    })
}

connection.connect(err => {
    if (err) throw err;
    console.log(`Connection as id ${connection.threadId}`);
});

module.exports = connection;