// dependencies
const express = require('express');
const burger = require('../models/burger');

// router
const router = express.Router();

router.get('/', (req, res) => {
    burger.all(data => {
        const burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj);
    });
});

router.post("/api/burger", function (req, res) {
    burger.create([
        "burger_name",
        "devoured"
    ], [
        req.body.burger_name,
        false
    ], result => {
        res.json({ id: result.insertId });
    });
});

router.put('/api/burger/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
    console.log(`condition: ${condition}`);

    burger.update(req.body, condition, result => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;