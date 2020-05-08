// Vi loader her vores plugins

const mysql = require('mysql');
const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const router = require('./controller/client.js');
const consultantRouter = require('./controller/consultant.js');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const secret = 'verysecret';



//Vi loader her vores andre JS filer

app.use(express.static('View'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'projekt2020'
});


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

router.use((req, res, next) => {
    if (req.cookies && req.cookies['jwt-token']) {
        const decoded = jwt.verify(req.cookies['jwt-token'],
            secret);

        connection.query('SELECT * FROM users WHERE idUSERS = $1',
            [decoded.idUSERS]).then(result => {
            req.User = result.rows[0];
            next();
            });
        } else {
        next();
    }
});

app.use(router);
app.use(consultantRouter);
//app.use(cookieParser());
app.listen(3500, ()=> {});