const express = require('express');
const zod = require('zod'); // Import Zod, a library for schema validation
const app = express();

app.use(express.json()); // Middleware to parse JSON payloads from incoming requests


const schema = zod.array(zod.number());// Define the schema using Zod. This schema expects an array of numbers. It ensures that the input matches this structure.
const port = 3000;

// POST endpoint to handle health-checkup . Expected input: an array of numbers (e.g., [1, 2, 3])
// Zod is used to validate the input and return an error message if the validation fails.
app.post("/health-checkup", (req, res) => {
    const kidneys = req.body.kidneys; // Extract `kidneys` from the request body
    const response = schema.safeParse(kidneys);// Validate the input using Zod's `safeParse` method

    if (!response.success) {// If validation fails, send a 411 response with an error message
        return res.status(411).json({
            msg: "Input is invalid. Please send an array of numbers.",
        });
    }

    else {
        const kidneyLength = kidneys.length;// If validation succeeds, calculate and return the length of the array
        res.send({
            message: `You have ${kidneyLength} kidneys.`,
            validatedInput: kidneys,
        });
    }

});

/* Endpoint:
POST http://localhost:3000/health-checkup

Body (Examples):
Valid Input: 
{"kidneys": [1, 2, 3]}
Response:
{"message": "You have 3 kidneys.", "validatedInput": [1, 2, 3]}

Invalid Input:
Example 1 (String instead of array): { "kidneys": "not-an-array" }
Example 2 (Array with non-numeric values):{"kidneys": [1, "a", true]}
Response:
{"msg": "Input is invalid. Please send an array of numbers."} 
*/


app.listen(port, () => {  
    console.log(`server is running on port ${port}`)
})
