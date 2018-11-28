const connection = require('../config/connection.js');

const printQuestionMarks = (num) => {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

/* const objToSql = ob => {
    let arr = [];
    for (key in ob) {
        const value = ob[key];
        if (Objective.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(' ') >= 0) {
                value = `'${value}'`;
            }
            arr.push(`${key} = ${value}`);
        }
    }
    return arr.toString();
} */

const orm = {
    selectAll: (table, cb) => {
        const qryString = `SELECT * FROM ${table}`;
        connection.query(qryString, (err, data) => {
            if (err) throw err;
            console.log(data);
            cb(data);
        });
    },

    insertOne: (table, columns, values, cb) => {
        const qryString = `INSERT INTO ${table} (${columns.toString()}) VALUES (${printQuestionMarks(values.length)})`;
        console.log(qryString);
        connection.query(qryString, values, (err, data) => {
            if (err) throw err;
            console.log(data);
            cb(data);
        });
    },
    
    updateOne: (table, ojbValue, condition, cb) => {
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