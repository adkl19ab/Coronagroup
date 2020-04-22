// Vi loader her vores plugins

const express = require('express');
const app = express();
const mysql = require('mysql');

//Vi loader her vores andre JS filer

const router = require('./routes/client')
app.use(router)

const bodyParser = require('body-parser')

app.use(express.static('Public'))

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

app.use(bodyParser.urlencoded({extended: false}))

function getConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'Projekt2020'
    })
}



app.listen(3500, ()=> {
});