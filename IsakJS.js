const express = require('express');
const app = express();
//const morgan = require('morgan');
const mysql = require('mysql');
//app.use(morgan('combined'));

const bodyParser = require('body-parser')

app.use(express.static('isakPublic'))

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

app.get("/users", function(req,resp){
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
app.use(bodyParser.urlencoded({extended: false}))

app.post('/client_create', (req, res) => {
    console.log('Trying to create a new user')
    console.log('How do we get the form data???')

    console.log('Fornavn: ' + req.body.client_name)
    const name = req.body.client_name
    const password = req.body.client_password
    const userType = req.body.client_userType
    const idSKILL = req.body.client_idSKILL



function getConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'Projekt2020'
    })
}
const queryString = "INSERT INTO users (name, password, userType, idSKILL) VALUES (?, ?, ?, ?)";

    getConnection().query(queryString, [name, password, userType, idSKILL], (err, results, fields) => {
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

app.get("/users/1", function(req,resp){
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

/*
app.get('/users/:idUSERS', (req, res)=>{
    console.log("Fetching user with idUSERS:" + req.params.idUSERS);


    res.json(rows)
        console.log("I think we fetched users successfully")
})
//res.end();


app.get("/", (req, res) => {
    console.log("Responding to root route")
    res.send("Lad mig spille warzone")
});

app.get("/users", (req, res) => {
   var user1 = {firstName: "Adam", lastName: "Klint"}
   const user2 = {firstName: "Johan", lastName: "Isak"}
   res.json([user1, user2])
});
*/

app.listen(3500, ()=> {
});