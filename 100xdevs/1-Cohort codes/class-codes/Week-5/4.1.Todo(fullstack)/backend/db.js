//database schema
//npm install mongoose
/*
Todo{
    title:string;
    description:string;
    completed:boolean
}
    */ 
const mongoose=require("mongoose");

//keep this a secret in .env file . this url should not be publically visible
mongoose.connect("mongodb+srv://admin:Smit%402812@cluster0.1tvzrfi.mongodb.net/todos")

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos',todoSchema);
module.exports={
    todo

}