
// Denne fil indeholder alle routerne for vores klienter på siden.


//Importerer plugins
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const router = express.Router();
const jwt = require('jsonwebtoken');
const secret = 'verysecret';


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



// Her opretter vi en ny bruger ved hjælp af router.post
router.post('/client_create', (req, res) => {
    console.log('Trying to create a new user');

    // Vi opretter her et nyt instans af vores user-klasse, så vi kan sikre os, at informationen i databasen stemmer overens med den i vores klasser.
    let dummy = new User(
        req.body.client_name,
        req.body.client_lastname,
        req.body.client_password,
        req.body.client_Email,
        2
    )

    //Til sidst kalder vi metoden som tilføjer instansen af klassen til vores table
    console.log(dummy);
    dummy.displayUsername();
    dummy.addUser();
    res.end()
})



// Vi tilføjer her en hard-coded admin bruger til systemet
// Det er her tanken, at et bestemt antal admins bliver tilføjet til systemet når det bliver solgt.
const admin1 = new Admin('Johan','Isak','test1234','johan@lundtoft.com');
//admin1.addToTable();




// Nedenfor har vi samtlige af vores routes som Client-klassen kan tilgå.
// Vi gør her brug af Express router funktion.

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
    response.sendFile(path.resolve('View', 'changeSkill.html'));
});
router.get('/booking', function (request, response) {
    response.sendFile(path.resolve('View', 'booking.html'));
});
router.get('/admin', function (req, res) {
    res.sendFile(path.resolve('View', 'delete.html'));
});


//Nedenstående er vores end-points og deres tilhørende syntaks.

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
            resp.json(rows);
        }
    })
});


// Her opretter vi en ny bruger ved hjælp af router.post
router.post('/client_create', (req, res) => {
    console.log('Trying to create a new user');

    // Vi opretter her et nyt instans af vores user-klasse, så vi kan sikre os, at informationen i databasen stemmer overens med den i vores klasser.
    let dummy = new User(
        req.body.client_name,
        req.body.client_lastname,
        req.body.client_password,
        req.body.client_Email,
        2
    )

    console.log(dummy);
    dummy.displayUsername();
    dummy.addUser();
    res.end()
})


// her henter vi brugerne ned til siden
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


//Dette endpoint bruges til at slette
router.post('/delete2', (req, res) => {
    console.log('Trying to delete a user');

    console.log('Fornavn: ' + req.body.customer_Email);
    const Email = req.body.customer_Email;

    //Vi søger efter konsulenter efter Email i vores users-table.
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

//Dette post-request håndterer vores login-authentification.
router.post('/auth', function (request, response) {
    var Email = request.body.Email;
    var password = request.body.password;

    //Vi sammmenligner her vores input fra HTML med vores brugere i vores users-table, for at sikre at de stemmer overens.
    if (Email && password) {
        connection.query('SELECT * FROM users WHERE Email = ? AND password = ?', [Email, password], function (error, results, fields) {
            if (results.length > 0) {
                console.log('succesfully logged in');


                //Vi forsøgte her at indarbejde JWT-tokens i vores system.
                /*
                const token = jwt.sign({ user: User.user }, secret);
                response.cookie('jwt-token', token);
                response.redirect('/consultants');

                 */

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

router.get('/me', (req, res) => {
    res.json(req.user);
    debugger;
});

//Dette end-point bruges til at oprette bookings i vores system

router.post('/booking_create', (req, res) => {
    console.log('Trying to create a new booking');
    // Vi opretter her et nyt instans af vores user-klasse, så vi kan sikre os, at informationen i databasen stemmer overens med den i vores klasser.
    let dummyB = new Booking(
        req.body.consultant_name,
        req.body.consultant_email,
        req.body.consultant_starttime,
        req.body.consultant_endtime,
        req.body.consultant_date,
        req.body.client_Cname,
        req.body.client_Cphone,
        req.body.client_Cemail);
    //Til sidst kalder vi metoden som tilføjer instansen af klassen til vores table
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

//Dette endpoint opretter nye skills i vores skills table
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

//Denne funktion bruger vi til at redigere i konsulenters kompetencer.
//Det gør vi ved at søge efter konsulentens mail, hvorefter vi kan ændre i deres skillTag.

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

//Denne funktion sletter bookinger. Se HTML-filene delete.html, for at finde inputtet.
//ved hjælp af SQL-syntaksen WHERE, skal nedenstående udfyldes og bliver derefter slettet.
//Denne funktion ligner meget de øvrige SQL-funktioner i dens opbygning.

router.post('/deletebooking', (req, res) => {
    console.log('Trying to delete a booking');

console.log('Fornavn: ' + req.body.bookingClient_Email);
const deleteBookingEmail = req.body.bookingClient_Email;
const deleteBookingName = req.body.bookingClient_Name;
const deleteBookingStartTime = req.body.bookingClient_StartTime;


const Query = "DELETE FROM Booking WHERE client_email = ? AND client_name = ? AND booking_starttime = ?"

connection.query(Query, [deleteBookingEmail, deleteBookingName, deleteBookingStartTime], (err, results, fields) => {
    if (err) {
        console.log('Failed to delete a booking' + err);
        res.sendStatus(500);

    }
    console.log('Deleted a booking with id: ', results.insertId);
res.end();
})
res.end();
})

module.exports = router;



