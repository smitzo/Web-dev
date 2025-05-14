const express = require('express');
const zod = require('zod'); // Import Zod, a library for schema validation
const app = express();

app.use(express.json()); // Middleware to parse JSON payloads from incoming requests

// Define the schema using Zod. This schema expects an array of numbers. It ensures that the input matches this structure.

function validateInput(obj){
    const schema=zod.object({
        email:zod.string().email(),
        password:zod.string().min(8),
        country:zod.literal("IN").or(zod.literal("US")),
    })
    const response = schema.safeParse(obj);
    console.log(response);
    return response;

}

// validateInput({
//     email: "joshismit2812@gmail.com",
//     password: "123456789",
//     country: "IN",
// })

app.post("/login", (req,res)=>{
    const response=validateInput(req.body);
    if (!response.success){
        res.status(411).json({
            msg:"invalid inputs"
        })
    }else{
        res.status(200).json({
            msg:"logged in succesfully"
        })
    }
})

 /* output{
  success: true,
  data: {
    email: 'joshismit2812@gmail.com',
    password: '123456789',
    country: 'IN'
  }
} */

  app.listen(3000,function(){
    console.log(`running at http://localhost:3000`)
  })
