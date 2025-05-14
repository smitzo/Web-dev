const express = require("express");
const app = express();

let n = 10;
function sum(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans += i;
    }
    return ans;
}

//get, post, put, delete use different callback functions that have different logic to perform specific get, post, put, delete operation 
// app.get('/',function (req,res){console.log("hello from callback1")},function (req,res){console.log("hello from callback2")},
// function(req,res){
//     //console.log(req.headers.authorization)
//     res.status(401).send(<b> hello World!"</b>)
// })

app.get("/", (req, res) => {
    const queryN = req.query.n; // query parameter is similar to doctor saying that if you want diagnosis/result come with x-ray report as input
    if (queryN) {
        const n = parseInt(queryN);
        if (!isNaN(n)) {
            const ans = sum(n);
            res.send(`hi sum of numbers from 1 till ${n} is ${ans}`);
        } else {
            res.send("Invalid 'n' value provided.");
        }
    } else {
        res.send("'n' query parameter is missing.");
    }
});

// in get method we can use query params to send input to server
// in post method we can use body to send input to sever
// we can also use headers for that purpose

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

//?n is denoting query parameter
// if i write localhost:3000/?n=10 the output would be "hi your ans is 55"