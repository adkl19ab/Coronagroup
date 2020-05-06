
// her importerer vi alle vores plugins
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const router = require('./client.js')

const auth = require('../View/Js/auth');

// Definerer vores MySQL connection funktion
// opretter connection til vores mySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Projekt2020'
});

// en router til at oprette konsulenter
router.post('/consultant_create', (req, res) => {
    console.log('Trying to create a new user');

    let dummyC = new Consultant(
        req.body.consultantName,
        req.body.consultantLastname,
        req.body.consultantPassword,
        req.body.consultantEmail,
        req.body.consultantidSkill,
    )

    console.log(dummyC);
    dummyC.addConsultant();
    res.end()
})




