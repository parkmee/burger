// dependencies
const express = require('express');
const burger = require('../models/burger.js');

// router
const router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll(data => {
        const burgerObj = {
            burger: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj);
    });
});

router.post('/api/burger', (req, res) => {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burgerName, false
    ], result => {
        res.json({
            id: result.insertId
        });
    });
});

router.put('/api/burger/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
    console.log(`condition: ${condition}`);

    burger.updateOne({
        burger_name: req.body.burgerName
    }, condition, result => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;