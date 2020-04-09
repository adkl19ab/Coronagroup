const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('combined'));


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