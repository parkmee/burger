const orm = require('../config/orm.js');

const burger = {
    all: cb => {
        orm.selectAll("burgers", res => {
            cb(res);
        });
    },

    create: (columns, values, cb) => {
        orm.insertOne("burgers", columns, values, res => {
            cb(res);
        });
    },

    update: (object, condition, cb) => {
        objValue = `devoured = ${object.devoured}`;
        orm.updateOne("burgers", objValue, condition, res => {
            cb(res);
        });
    }
}

module.exports = burger;