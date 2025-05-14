const fs = require("fs");
const path = require("path");
const readline = require("readline");
const filepath = path.join(__dirname, "Todo.txt");
const express = require('express');
const app = express();
const port = 3000;

let todosList = [
    {
        title: 't1',
        desc: 'd1'
    }
];

// Middleware to parse JSON
app.use(express.json());

// GET endpoint
app.get('/', (req, res) => {
    res.status(200).json({ message: "Todo List", todos: todosList });
});

// POST endpoint
app.post("/post-todo", (req, res) => {
    const { title, desc } = req.body;

    // Validate request body
    if (!title || !desc) {
        return res.status(400).json({ message: "Please provide both title and description" });
    }

    // Add new todo
    todosList.push({ title, desc });
    res.status(201).json({ message: "Posted new todo successfully", todos: todosList });
});

app.put("/update-todo",(req,res) => {
    const { id, title, desc } = req.body
    const indexOfTodo=indexof(title====)

});

app.delete("/delete-todo",(req,res)=>{
    const { id } = req.body
    
})

// Start the server
app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
