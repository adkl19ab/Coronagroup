
// Denne fil indeholder alle routerne for vores klienter på siden.

const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const path = require('path');

router.get('/messages', (req, res) => {
    console.log('Show me some messages')
    res.end()
});
/*
router.get('/register', function(req, res) {
    res.sendFile(path.join('/Public/register.html'));
});
*/

router.get('/register', function(request, response) {
    response.sendFile(path.resolve('public','register.html'));
});

router.get('/consultants', function(request, response) {
    response.sendFile(path.resolve('public','HTML', 'Logget_ind', 'SkillsfilterL.html'));
});



router.get("/users", function(req,resp){

    const connection = getConnection()

    connection.query("SELECT * FROM users", function(error, rows, fields){
        if (!!error){
            console.log("Error in the query");
        } else {
            console.log("SUCCES!\n");
            //console.log(rows[0].name);
            resp.json(rows);
        }
    })
})

router.post('/client_create', (req, res) => {
    console.log('Trying to create a new user')

    const connection = getConnection()

    console.log('Fornavn: ' + req.body.client_name)
    const name = req.body.client_name
    const password = req.body.client_password
    const userType = req.body.client_userType
    const idSKILL = req.body.client_idSKILL

    const queryString = "INSERT INTO users (name, password, userType, idSKILL) VALUES (?, ?, ?, ?)";

    connection.query(queryString, [name, password, userType, idSKILL], (err, results, fields) => {
        if (err) {
            console.log('Failed to create new user' + err)
            res.sendStatus(500)
            return
        }

        console.log('Inserted a new user with id: ', results.insertId);
        res.end()
    })
    res.end()
})

router.get("/users/1", function(req,resp){

    const connection = getConnection()

    connection.query("SELECT * FROM users", function(error, rows, fields){
        if (!!error){
            console.log("Error in the query");
        } else {
            console.log("SUCCES!\n");
            //console.log(rows[0].name);
            resp.json(rows[0]);
        }
    })
})

function getConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'Projekt2020'
    })
}


module.exports = router