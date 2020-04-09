const path = require('path')
const express = require('express') //require express module
const app = express() //calls express function to start new express app
app.listen(3000,()=>{
    console.log("App listening on port 3000")
})
app.get('/',(req,res)=>{
    res.json({
        name:'Greg Lim'
    })
})
app.get('/about',(req,res)=>{
    res.json({
        name:'Greg Lim'
    })
})
