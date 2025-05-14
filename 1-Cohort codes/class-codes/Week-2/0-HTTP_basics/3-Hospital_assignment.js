const express = require('express'); 
const app = express(); // Creates the Express application (simulates a hospital/clinic)
const port = 8000; // Sets the port number where the server will run
app.use(express.json()); // Middleware to parse JSON body in requests (needed for POST/PUT operations)

// Simulated in-memory data for users
// This global array holds user data, specifically the number of kidneys and their health status.
const users = [{
     name: 'John',
     kidneys: [
         { healthy: false }, // One unhealthy kidney
         { healthy: true }   // One healthy kidney
     ] 
}];

// Since we are storing data in memory, any time we restart the server, the data will reset to its initial state.
// This is why real applications use databases to persist data between server restarts.
//get, post, put, delete use different callback functions that have different logic to perform specific get, post, put, delete operation 


// **GET**: Check the number of kidneys and their health status
app.get("/", (req, res) => { 
    // Postman Instructions: Method: GET   URL: http://localhost:8000/   No body required.   Response: {"kidneys": 2, "numberOfHealthyKidneys": 1, "numberOfUnhealthyKidneys": 1 }

    const johnKidneys = users[0].kidneys; // Access John's kidney data
    const numberOfKidneys = johnKidneys.length; // Total number of kidneys
    let numberOfHealthyKidneys = 0;

    // Count the number of healthy kidneys
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy === true) {
            numberOfHealthyKidneys += 1;
        }
    }

    // Calculate the number of unhealthy kidneys
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    // Respond with kidney statistics
    res.json({
        "kidneys": numberOfKidneys,
        "numberOfHealthyKidneys": numberOfHealthyKidneys,
        "numberOfUnhealthyKidneys": numberOfUnhealthyKidneys
    });
});


// in get method we can use query params to send input to server
// in post method we can use body to send input to sever

// **POST**: Add a new kidney
app.post("/", (req, res) => {
   //Postman Instructions: Method: POST, URL: http://localhost:8000/, Body (JSON): { "isHealthy": true }, Response: { "msg": "Post operation completed, kidney added" }
        

    const isHealthy = req.body.isHealthy; // Retrieve the `isHealthy` value from the request body
    users[0].kidneys.push({ healthy: isHealthy }); // Add a new kidney with the specified health status

    res.json({msg: "Post operation completed, kidney added"});
});

// **PUT**: Update all kidneys to be healthy
app.put("/", (req, res) => {
    // Postman Instructions: Method: PUT, URL: http://localhost:8000/, No body required, Response:{"msg": "All kidneys updated to healthy" }

    const johnKidneys = users[0].kidneys; // Access John's kidney data

    // Loop through each kidney and update its health status to healthy
    for (let i = 0; i < johnKidneys.length; i++) {
        johnKidneys[i].healthy = true;
    }

    res.json({msg: "All kidneys updated to healthy"});
});

// **DELETE**: Remove all unhealthy kidneys
app.delete("/", (req, res) => {
    // Postman Instructions: Method: DELETE, URL: http://localhost:8000/, No body required, Response:{"msg": "Deletion completed, only healthy kidneys remain"}

    if (users.length==0 ){
        res.status(411).json({msg:"no users or kidneys found in db"});
    }
    const newKidneys = []; // Temporary array to hold only healthy kidneys

    // Filter out unhealthy kidneys
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            newKidneys.push({ healthy: true }); // Add only healthy kidneys to the new array
        }
    }

    // Replace the user's kidney list with the filtered healthy kidneys
    users[0].kidneys = newKidneys;

    res.json({
        msg: "Deletion completed, only healthy kidneys remain"
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
