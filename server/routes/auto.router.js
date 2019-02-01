const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    
});

router.post('/', (req, res) => {
    console.log('in auto router', req.body);
    const q = req.body;
    const queryValues = [
        q.firstName,
        q.lastName,
        q.email,
        q.phone,
        q.street,
        q.unit,
        q.city,
        q.state,
        q.zip,
        q.gender,
        q.dob,
        q.license,
        q.maritalStatus,
        q.creditScore,
        q.currentAutoInsurance,
        q.insured,
        q.tickets
    ]
    const sqlText = `INSERT INTO contact (
        first_name, 
        last_name,
        email_address,
        phone_number,
        street,
        unit,
        city,
        state,
        zip,
        gender,
        date_of_birth,
        valid_license,
        marital_status,
        credit_score,
        auto_insurance,
        insured_30_days,
        tickets,
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17,);`;
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