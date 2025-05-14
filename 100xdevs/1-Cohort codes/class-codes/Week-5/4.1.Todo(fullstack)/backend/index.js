//
const express=require('express');
const{createTodo,updateTodo}=require('./types');
const{todo}=require("./db")
const cors=reuire("cors")
const app=express();
const port=3000;

/*body{
title:string,
description:string
}*/ 
app.use(cors())
app.use(express.json());
app.get("/todo",async(req,res)=>{
    const todos= await todo.find({})
    res.json({
        todos
    })
})

app.post("/todos", async(req,res)=>{

    const createPayload= req.body;
    const parsedPayload=createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        return res.status(411).json({
            msg:"you sent the wrong inputs"
        })
    }
    //put it in mongodb
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        created:false
    })

    res.json({
        msg:"todo created successfully"
    })

})

app.put("/completed",async()=>{
    const updatePayload=req.body;
    const parsedPayload=updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success){
        return res.status(411).json({
            msg:"you sent the wrong inputs",
        })
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })

    res.json({
        msg:"Todo marked as done"
    })
})

app.listen(port);