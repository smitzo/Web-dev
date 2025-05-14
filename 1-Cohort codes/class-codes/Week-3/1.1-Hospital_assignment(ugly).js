/*say you are going at doctor's clinic . After entering the door, you'll first need to provide you aadhar/insurance info -> give blood test -> Bp check ->then go to
doctor's cabin. the question is how to do auth checks i.e how to check whether user is capable to pay or not (insurance hai ki nahi)
and how to ensure user inputs  (BP/blood tests */


//----------UGLY/BAD METHOD authenticate and input validation at every GET/POST/DELETE/PUT method (violates DRY principle)-----------------------------
const express = require('express'); 
const app = express(); // Creates an Express application instance.
const port = 8000; // Defines the port number where the server will listen for requests.

app.use(express.json()); // Middleware to parse JSON body in incoming requests.

// **GET**: Health Checkup Endpoint
app.get("/health-checkup", (req, res) => { 
    /**POSTMAN STEPS FOR CHECKING
     * Query parameters and headers:
     * - kidneyId: A query parameter representing the kidney ID (1 or 2).  http://localhost:8000/health-checkup?kidneyId=1
     * - username: A header containing the username for authentication.
     * - password: A header containing the password for authentication.
     */

    // 1. Authentication Check (Username and Password)
    const username = req.headers.username; 
    const password = req.headers.password; 

    if (username !== "smit" || password !== "1234") {
        // If the username or password is incorrect, respond with 403 Forbidden.
        res.status(403).json({ msg: "Invalid username or password" });
        return; 
    }  
    console.log("Authentication successful. Username and password are valid.");

    // 2. Input Validation for Kidney ID
    const kidneyId = parseInt(req.query.kidneyId, 10); // Extract and parse kidneyId from query parameters.

    if (kidneyId !== 1 && kidneyId !== 2) {
        res.status(411).json({ msg: "Invalid kidney ID input. Allowed values are 1 or 2." });
        return; 
    } 
    
    console.log("Input validation successful. Kidney ID is valid.");

    // 3. Successful Response
    res.status(200).json({ 
        msg: "Authentication and input validation passed successfully"
    });
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


