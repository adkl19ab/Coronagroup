// Vi loader her vores plugins

const mysql = require('mysql');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/client')

//Vi loader her vores andre JS filer

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
app.use(router)
app.listen(3500, ()=> {
});