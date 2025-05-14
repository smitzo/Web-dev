//npm install zod
const zod=require('zod');
const createTodo=zod.object({   // zod validation objects
    title:zod.string().min(1),
    description:zod.string().min(1),
})

const updateTodo=zod.object({
    id:zod.string()
})

module.exports ={
    createTodo: createTodo,
    updateTodo:updateTodo
}




/*
{
    title:string,
    description:string
}
{
    id: string
}
*/ 
