
// Denne fil indeholder alle routerne for vores klienter på siden.


//Importerer plugins
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const router = express.Router();

//Importerer vores klasser
const classImport = require('../Model/class.js')
const User = classImport.User;
const Admin = classImport.Admin;
const Booking = classImport.Booking;


// Definerer vores MySQL connection funktion

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Projekt2020'
});

const admin1 = new Admin('Johan','Isak','test1234','johan@lundtoft.com');
//admin1.addToTable();

router.get('/messages', (req, res) => {
    console.log('Show me some messages')
    res.end()
});

router.get('/register', function (req, res) {
    res.sendFile(path.resolve('View', 'register.html'));
});

router.get('/login', function (req, res) {
    res.sendFile(path.resolve('View', 'login.html'));
});

router.get('/consultants', function (request, response) {
    response.sendFile(path.resolve('View', 'HTML', 'Logget_ind', 'SkillsfilterL.html'));
});
router.get('/userskills', function (request, response) {
    response.sendFile(path.resolve('View', 'HTML', 'UserSkills.html'));
});
router.get('/booking', function (request, response) {
    response.sendFile(path.resolve('View', 'HTML', 'Logget_ind', 'booking.html'));
});
router.get('/admin', function (req, res) {
    res.sendFile(path.resolve('View', 'delete.html'));
});


router.get('/home', function (request, response) {
    if (request.session.loggedin) {
        response.send('Welcome back, ' + request.session.username + '!');
    } else {
        response.send('Please login to view this page!');
    }
    response.end();
});

router.get("/users", function (req, resp) {

    connection.query("SELECT * FROM users WHERE userType=3", function (error, rows, fields) {
        if (!!error) {
            console.log("Error in the query");
        } else {
            console.log("SUCCES!\n");
            //console.log(rows[0].name);
            resp.json(rows);
        }
    })
});

router.get("/skills", function (req, resp) {

    connection.query("SELECT * FROM skills", function (error, rows, fields) {
        if (!!error) {
            console.log("Error in the query");
        } else {
            console.log("SUCCES!\n");
            //console.log(rows[0].name);
            resp.json(rows);
        }
    })
});

router.get("/usertype", function (req, resp) {

    connection.query("SELECT * FROM usertype", function (error, rows, fields) {
        if (!!error) {
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

    let dummy = new User(
        req.body.client_name,
        req.body.client_lastname,
        req.body.client_password,
        req.body.client_userType,
        req.body.client_idSKILL,
        req.body.client_Email
    )

    console.log(dummy);
    dummy.displayUsername();
    dummy.addUser();
    res.end()
})

router.get("/users/1", function (req, resp) {

    connection.query("SELECT * FROM users", function (error, rows, fields) {
        if (!!error) {
            console.log("Error in the query");
        } else {
            console.log("SUCCES!\n");
            //console.log(rows[0].name);
            resp.json(rows[0]);
        }
    })
});

router.post('/delete2', (req, res) => {
    console.log('Trying to delete a user');

    console.log('Fornavn: ' + req.body.customer_Email);
    const Email = req.body.customer_Email;

    const Query = "DELETE FROM users WHERE Email = ?"

    connection.query(Query, [Email], (err, results, fields) => {
        if (err) {
            console.log('Failed to delete a user' + err);
            res.sendStatus(500);

        }
        console.log('Deleted a user with id: ', results.insertId);
        res.end();
    })
    res.end();
})


router.post('/auth', function (request, response) {
    var username = request.body.username;
    var password = request.body.password;

    if (username && password) {
        connection.query('SELECT * FROM users WHERE name = ? AND password = ?', [username, password], function (error, results, fields) {
            if (results.length > 0) {
                request.session.loggedin = true;
                request.session.username = username;
                response.redirect('/consultants');
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

router.post('/booking_create', (req, res) => {
    console.log('Trying to create a new booking');

    let dummyB = new Booking(

        req.body.consultant_name,
        req.body.consultant_email,
        req.body.consultant_time,
        req.body.consultant_date,
        req.body.client_Cname,
        req.body.client_Cphone,
        req.body.client_Cemail);

    dummyB.addBooking();
    res.end();

});

router.get("/Bookings", function (req, resp) {

    connection.query("SELECT * FROM Booking", function (error, rows, fields) {
        if (!!error) {
            console.log("Error in the query");
        } else {
            console.log("SUCCES!\n");
            //console.log(rows[0].name);
            resp.json(rows);
        }
    })
});

router.post('/skill_create', (req, res) => {
    console.log('Trying to create a new skill');

    console.log('name: ' + req.body.skill_name);
    const skillName = req.body.skill_name;

    const QuerySkill = "INSERT INTO skills (skill) VALUES (?)";

    connection.query(QuerySkill, [skillName], (err, results, fields) => {
        if (err) {
            console.log('Failed to create a new booking' + err);
            res.sendStatus(500);

        }

        console.log('Inserted a new booking with id: ', results.insertId);
        res.end();
    })
    res.end();
})

router.post('/skill_change', (req, res) => {
    console.log('Trying to change a skill skill');

    console.log('name: ' + req.body.newSkill_name);
    const newSkillName = req.body.newSkill_name;
    const myEmail = req.body.myEmail;

    const QueryNewSkill = "UPDATE users SET idSKILL= ? WHERE Email= ?";

    connection.query(QueryNewSkill, [newSkillName, myEmail], (err, results, fields) => {
        if (err) {
            console.log('Failed to create a new booking' + err);
            res.sendStatus(500);

        }

        console.log('Inserted a new booking with id: ', results.insertId);
        res.end();
    })
    res.end();
})

module.exports = router;



