/*say you are going at doctor's clinic . After entering the door, you'll first need to provide you aadhar/insurance info -> give blood test -> Bp check ->then go to
doctor's cabin. the question is how to do auth checks i.e how to check whether user is capable to pay or not (insurance hai ki nahi)
and how to ensure user inputs  (BP/blood tests */

// we use middlewares to do pre-checks 1.authentication 2.input validation  

//--------------OPTIMAL METHOD authenticate and input validation using MIDDLEWARES (improves code reusability   )-----------------------------

const express = require('express'); 
const app = express(); // Creates an Express application instance.
const port = 8000; // Defines the port number where the server will listen for requests.

// Middleware are basically Functions which we need to declare . express does the job of calling the middleware for us

app.use(express.json()); // Middleware to parse JSON body in incoming requests. This ensures the request body is automatically parsed into a JavaScript object
// if the Content-Type is 'application/json'. Without this, you'd have to manually parse the JSON.

// ------------------------------------
// Middleware Definitions
// ------------------------------------

// 1. Authenticate User Middleware 
/**
 * Middleware to authenticate users.
 * 
 * - **Purpose**: To ensure only authorized users access the route.
 * - **How It Works**: 
 *   1. Extracts `username` and `password` from the request headers.
 *   2. Validates them against predefined values (here: "smit" and "1234").
 *   3. If invalid, it stops the cycle by sending a 403 Forbidden response.
 *   4. If valid, it calls `next()` to proceed to the next middleware or route handler.
 * 
 * - **Key Points**:
 *   - Middleware is reusable across multiple routes.
 *   - Header-based authentication is simple for demonstration but not secure for production.
 */
function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    // Check if credentials match.
    if (username !== "smit" || password !== "1234") {
        res.status(403).json({ msg: "Incorrect username or password." });
        return; // Ends the middleware execution.
    }
    next(); // Proceeds to the next middleware or route handler.
}

// 2. Kidney Input Validation Middleware
/**
 * Middleware to validate kidney-related input.
 * 
 * - **Purpose**: Ensures the `kidneyId` parameter is valid (either 1 or 2).
 * - **How It Works**:
 *   1. Parses the `kidneyId` from query parameters.
 *   2. Checks if it's either 1 or 2.
 *   3. If invalid, it stops the cycle by sending a 403 Forbidden response.
 *   4. If valid, it calls `next()` to proceed to the next middleware or route handler.
 * 
 * - **Key Points**:
 *   - Highlights how middleware can handle input validation.
 *   - Demonstrates reusability for kidney-specific routes.
 *   - Parses numeric input safely using `parseInt`.
 */
function kidneyMiddleware(req, res, next) {
    const kidneyId = parseInt(req.query.kidneyId, 10); // Convert query string to an integer.

    if (kidneyId !== 1 && kidneyId !== 2) {
        res.status(403).json({ msg: "Invalid kidney ID. Allowed values are 1 or 2." });
        return; // Ends the middleware execution.
    }
    next(); // Proceeds to the next middleware or route handler.
}

// ------------------------------------
// Route Handlers
// ------------------------------------

// Health Checkup Route
app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
    /**
     * **What Happens Here**: * 1. `userMiddleware` authenticates the user. * 2. `kidneyMiddleware` validates the input for kidney-related data.
     * 3. If both pass, this handler sends a success response. */
    res.status(200).json({  msg: "Authentication and input validation passed successfully." });
});

// Kidney Checkup Route
app.get("/kidney-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
    /**
     * Similar to the health-checkup route, but tailored for kidney checkups.
     */
    res.status(200).json({ msg: "Authentication and input validation passed successfully for kidney checkup."});
});

// Heart Checkup Route
app.get("/heart-checkup", userMiddleware, (req, res) => {
    /**
     * **What Happens Here**: 1. Only `userMiddleware` is used as authentication is required. 2. No additional input validation is done for this route.*/
    res.status(200).json({ msg: "Authentication passed successfully for heart checkup."});
});

// ------------------------------------
// Advanced Middleware: Middleware Returning a Function
// ------------------------------------

/**
 * Middleware can also return functions.
 * 
 * - **Why Do This**: If middleware requires dynamic configuration (e.g., role-based access, conditional checks).
 * - **Example**: A userMiddleware that validates user credentials based on dynamic rules.
 */
function dynamicUserMiddleware(config) {
    return function(req, res, next) {
        const username = req.headers.username;
        const password = req.headers.password;

        if (username !== config.username || password !== config.password) {
            res.status(403).json({ msg: "Incorrect username or password." });
            return;
        }
        next();
    };
}

//Example Usage:
app.get("/dynamic-checkup", dynamicUserMiddleware({ username: "admin", password: "admin123" }), (req, res) => {
    res.status(200).json({ msg: "Dynamic user validation passed!" });
});


// suppose we have a middleware that returns a function like:
// function userMiddleware() {

//     return function (req, res, next){

//         const username = req.headers.username; // Extract username from headers.
//         const password = req.headers.password; // Extract password from headers.
    
//         if (username !== "smit" || password !== "1234") {
//             res.status(403).json({ msg: "Incorrect username or password." }); // If authentication fails, return a 403 Forbidden response.
//             return; // Prevent further execution.
//         }
//         next(); // Authentication passed, move control to the next middleware or route handler.
//     }
// }

// if our middleware returns a function, then instead of writing middleware function name as parameter in route handler like: 
// "app.get("/heart-checkup", userMiddleware, (req, res) => { 
//     res.status(200).json({ msg: "Authentication passed successfully for heart checkup."});
// });"
// we'd need to call our middleware insside the route handler
// app.get("/heart-checkup", userMiddleware(), (req, res) => { 
//     res.status(200).json({ msg: "Authentication passed successfully for heart checkup."});
// });

// ------------------------------------
// Start the Express Server
// ------------------------------------

// Starts the server and listens on the specified port.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
