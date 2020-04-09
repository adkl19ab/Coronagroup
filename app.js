const express = require('express');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql');


app.use(morgan('combined'));

app.get('/users/:idUSERS', (req, res)=>{
    console.log("Fetching user with idUSERS:" + req.params.idUSERS)

    const connection = mysql.createConnection({
        //change to your own host
        host: 'DESKTOP-QJC3050',
        user: 'root',
        // change for your own database
        database: 'Local instance MySQL80'
    })
connection.query("SELECT * FROM projekt2020.tables.users", (err, rows, fields) =>{
    console.log("I think we fetched users successfully")
    res.json(rows)
})
   // res.end();
})


app.get("/", (req, res) => {
    console.log("Responding to root route")
    res.send("Lad mig spille warzone")
});

app.get("/users", (req, res) => {
   var user1 = {firstName: "Adam", lastName: "Klint"}
   const user2 = {firstName: "Johan", lastName: "Isak"}
   res.json([user1, user2])
});

app.listen(4000, ()=> {
   console.log("Svinet er oppe og køre")
});