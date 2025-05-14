const express=require('express')
const app=express()
app.use(express.json())
const port=3000

// expected input is an array , but user might enter a string or integer or bool as an input. so we need to handle that with an error messqge 
app.post("/health-checkup", (req,res)=>{

    const kidneys=req.body.kidneys;
    const kidneyLength=kidneys.length;
    res.send("you have " + kidneyLength + " kidneys")
});


//global catches is an error handling middleware that gives a better/readable user friendly error message. we dont need to write 
//error message everytime an incorrect input is encountered. global catches does that for us.
app.use(function(err,req,res,next){
    res.status(400).send("sorry something is wrong up with our server")
})

// go to postman send a put request with invalid input in the body and youll get the error message "sorry something is wrong up with our server"
app.listen(port, () => {  
    console.log(`server is running on port ${port}`)
})
