const express=require("express")
const app=express()

const port=3000

app.get('/sum', function(req,res){

    
    res.send("hello world")
})
    
app.get('/interest', function(req,res){

    res.send("hello")
})

