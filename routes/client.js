
// Denne fil indeholder alle routerne for vores klienter på siden.

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const router = express.Router();

// Definerer vores MySQL connection funktion

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Mercedes1',
    database: 'Projekt2020'
});

router.get('/messages', (req, res) => {
    console.log('Show me some messages')
    res.end()
});

router.get('/register', function(req, res) {
    res.sendFile(path.resolve('public','register.html'));
});

router.get('/login', function(req, res) {
    res.sendFile(path.resolve('public','login.html'));
});

router.get('/consultants', function(request, response) {
    response.sendFile(path.resolve('public','HTML', 'Logget_ind', 'SkillsfilterL.html'));
});
router.get('/userskills', function(request, response) {
    response.sendFile(path.resolve('public','HTML', 'UserSkills.html'));
});
router.get('/booking', function(request, response) {
    response.sendFile(path.resolve('public','HTML', 'Logget_ind', 'booking.html'));
});

router.get('/home', function(request, response) {
    if (request.session.loggedin) {
        response.send('Welcome back, ' + request.session.username + '!');
    } else {
        response.send('Please login to view this page!');
    }
    response.end();
});

router.get("/users", function(req,resp){

    connection.query("SELECT * FROM users WHERE userType=3", function(error, rows, fields){
        if (!!error){
            console.log("Error in the query");
        } else {
            console.log("SUCCES!\n");
            //console.log(rows[0].name);
            resp.json(rows);
        }
    })
});

router.get("/skills", function(req,resp){

    connection.query("SELECT * FROM skills", function(error, rows, fields){
        if (!!error){
            console.log("Error in the query");
        } else {
            console.log("SUCCES!\n");
            //console.log(rows[0].name);
            resp.json(rows);
        }
    })
});

router.get("/usertype", function(req,resp){

    connection.query("SELECT * FROM usertype", function(error, rows, fields){
        if (!!error){
            console.log("Error in the query");
        } else {
            console.log("SUCCES!\n");
            //console.log(rows[0].name);
            resp.json(rows);
        }
    })
});

router.post('/client_create', (req, res) => {
    console.log('Trying to create a new user');

    console.log('Fornavn: ' + req.body.client_name);
    const name = req.body.client_name;
    const password = req.body.client_password;
    const userType = req.body.client_userType;
    const idSKILL = req.body.client_idSKILL;
    const Email = req.body.client_Email;

    const queryString = "INSERT INTO users (name, password, userType, idSKILL, Email) VALUES (?, ?, ?, ?, ?)";

    connection.query(queryString, [name, password, userType, idSKILL, Email], (err, results, fields) => {
        if (err) {
            console.log('Failed to create new user' + err);
            res.sendStatus(500);

        }

        console.log('Inserted a new user with id: ', results.insertId);
        res.end();
    })
    res.end();
})

router.get("/users/1", function(req,resp){

    connection.query("SELECT * FROM users", function(error, rows, fields){
        if (!!error){
            console.log("Error in the query");
        } else {
            console.log("SUCCES!\n");
            //console.log(rows[0].name);
            resp.json(rows[0]);
        }
    })
});

router.post('/auth', function(request, response) {
    var username = request.body.username;
    var password = request.body.password;

    if (username && password) {
        connection.query('SELECT * FROM users WHERE name = ? AND password = ?', [username, password], function(error, results, fields) {
            if (results.length > 0) {
                request.session.loggedin = true;
                request.session.username = username;
                response.redirect('/home');
            } else {
                response.send('Incorrect Username and/or Password!');
            }
            response.end();
        });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
});


/*
function getConnection() {
    return mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'Mercedes1',
        database: 'Projekt2020'
    })
}
*/module.exports = router;
