const connection = require('../config/connection.js');

const printQuestionMarks = (num) => {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

const objToSql = ob => {
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
}

const orm = {
    selectAll(table, cb) {
        const qryString = `SELECT * FROM ${table}`;
        connection.query(qryString, (err, data) => {
            if (err) throw err;
            console.log(data);
            cb(data);
        });
    },

    insertOne(table, cols, vals, cb) {
        const qryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`;
        console.log(qryString);
        connection.query(qryString, vals, (err, data) => {
            if (err) throw err;
            console.log(data);
            cb(data);
        });
    },
    
    updateOne(table, objColVals, condition, cb) {
        const qryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;
        connection.query(qryString, (err, data) => {
            if (err) throw err;
            console.log(data);
            cb(data);
        });
    }
}

module.exports = orm;