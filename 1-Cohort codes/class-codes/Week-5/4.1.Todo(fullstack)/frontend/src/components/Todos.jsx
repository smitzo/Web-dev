/*todos={
title:"go gym",
description:"go to gym"
}*/ 
export function Todos({todos}){

    return  <div>
        {/* <h1>Go to gym</h1>
        <h2>you need to go to the gym</h2>
        <button>Mark as completed</button> */}

        {todos.map(function(todo){
            return <div> 
                
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed==true?"completed":"Mark as complete"}</button>
                </div>
        })}
    </div>
}