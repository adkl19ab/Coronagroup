// Vi loader her vores plugins

const mysql = require('mysql');
const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const router = require('./routes/client');

//Vi loader her vores andre JS filer

app.use(express.static('Public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

const pool = mysql.createPool({
    connectionLimit: 10,
    host: '127.0.0.1',
    user: 'root',
    password: 'Mercedes1',
    database: 'projekt2020'
});


const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Mercedes1',
    database: 'projekt2020'
});

connection.connect(function(error){
    if (!!error) {
        console.log("Error");
    } else {
        console.log("connected")
    }
});
app.use(router);
app.listen(3500, ()=> {});