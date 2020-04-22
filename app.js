// Vi loader her vores plugins

const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const router = require('./routes/client')

//Vi loader her vores andre JS filer

app.use(router)
app.use(express.static('Public'))
app.use(bodyParser.urlencoded({extended: false}))

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'projekt2020'
});

connection.connect(function(error){
    if (!!error) {
        console.log("Error");
    } else {
        console.log("connected")
    }
});

app.listen(3500, ()=> {
});