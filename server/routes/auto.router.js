const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    
});

router.post('/', (req, res) => {
    console.log('in auto router', req.body);
    const queryValues = [
        req.body.firstName,
        req.body.lastName,
    ]
    const sqlText = `INSERT INTO contact (first_name, last_name) VALUES ($1, $2);`;
    pool.query(sqlText, queryValues)
    .then(() => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('error with autoform post router', error);
        res.sendStatus(500)
    })
});

module.exports = router;