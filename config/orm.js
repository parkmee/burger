const connection = require('../config/connection.js');

const printQuestionMarks = (num) => {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

const orm = {
    selectAll: (table, cb) => {
        const qryString = `SELECT * FROM ??`;
        connection.query(qryString, [table], (err, data) => {
            if (err) throw err;
            //console.log(data);
            cb(data);
        });
    },

    insertOne: (table, columns, values, cb) => {
        values = [values]; // values must be a nested array of arrays for the query syntax below to work
        const qryString = `INSERT INTO ${table} (${columns.toString()}) VALUES ?`;
        connection.query(qryString, [values], (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },
    
    updateOne: (table, objValue, condition, cb) => {
        const qryString = `UPDATE ${table} SET ${objValue} WHERE ${condition}`;
        console.log(qryString);
        connection.query(qryString, (err, data) => {
            if (err) throw err;
            console.log(data);
            cb(data);
        });
    }
}

module.exports = orm;