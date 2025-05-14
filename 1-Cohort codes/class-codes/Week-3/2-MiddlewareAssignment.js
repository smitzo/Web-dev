const express=require('express')



app=express();
app.use(express.json())

var numOfRequests =0 
function countNumOfRequests(req,res,next){
    numOfRequests++;
    console.log("Number of requests: ", numOfRequests);
    next();
}

function avgTimeToHandleRequests(req,res,next){

}

app.use(countNumOfRequests);    // this middleware will now be used for every route

app.get("/",(req,res)=>{
    res.send("Hello  Smit");
})


app.listen(3000); 