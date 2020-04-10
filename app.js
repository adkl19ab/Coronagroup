const express = require('express');
const app = express();
//const morgan = require('morgan');
const mysql = require('mysql');
//app.use(morgan('combined'));

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

app.listen(4000, ()=> {
});