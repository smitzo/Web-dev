const express =require('express');  //express library helps us create an http server
const app =express()     //app object is returned by express() function
// console.log(app)
// console.log(typeof(app))
const bodyParser= require('body-parser')
const port = 3000

app.use(bodyParser.json());

//get, post, put, delete use different (1 or more )callback functions that have different logic to perform specific get, post, put, delete operation 

// app.get('/',function (req,res){console.log("hello from callback1")},function (req,res){console.log("hello from callback2")},
// function(req,res){
//     //console.log(req.headers.authorization)
//     res.status(401).send(<b> hello World!"</b>)
// })

app.get('/',function(req,res){
    //console.log(req.headers.authorization)
    res.status(401).send(<b> hello World!"</b>)
})


app.get("/route-handler",function(req,res){
    //headers, query params
    //run machine learning model on input
    res.json({
        name:"smit",
        age: 21
    })
})

// in get method we can use query params to send input to server
// in post method we can use body to send input to sever
// we can also use headers for that purpose

app.post("/conversations", (req,res)=>{
    //console.log(req.headers)
    //console.log(req.headers["authorization"])// to get user's authentication tokens
    const message=req.body.message;
    console.log(message)
    //do machine learning thing
    res.json({
        output:"2+2=4"
    })

})

// app.get() and app.post() are similar to function declaration but you must call the function to get your tasks done 
// so you must use app.listen() to call your functions logic

//onyl 1 process can be listened at a port at a time
// "listen" starts the http server
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})
