/*Q1: Sequential Task Execution with Callbacks
Create a function runTasksSequentially that accepts an array of asynchronous tasks (functions) and a callback. 
Each task is a function that takes a callback and completes asynchronously (e.g., using setTimeout). 
The tasks should be executed one after another, in sequence. When all tasks are done, the final callback should be executed.

Example Use Case:
You have 3 tasks (async functions) that print messages after random delays, and the final callback should print "All tasks completed."*/
const add=(a,b)=>{return a+b;}
const sub= (a,b)=>{return a-b;}
const mul=(a,b)=>{return a*b;}

let arrOfTasks=[add,sub,mul];
function runTasksSequentially (arrOfTasks,callback){

    const callback= ()=>{
        console.log("All tasks completed.");
    }

}

/*Q2: Retry Logic with Callbacks
Implement a function retry that accepts an asynchronous task (which might fail) and a callback. The function should 
attempt to execute the task up to a specified number of retries if it fails. Once it succeeds or exhausts all retries,
the callback should be called with the result or an error message.

Example Use Case:
The asynchronous task might simulate a network request that sometimes fails. If it fails, retry the task up to 3 times before finally giving up and passing an error to the callback.
*/


/*Assignment 3: Event Emitter with Callbacks
Problem: Implement an EventEmitter class that allows you to register event listeners (callbacks) and emit events that invoke the registered callbacks. The class should have the following methods:

on(event, callback): Registers a listener for the specified event.
emit(event, data): Invokes all listeners for the specified event, passing in optional data.
off(event, callback): Removes a specific listener for the event.
Example Use Case:

Create an event emitter that listens for events like "dataReceived" and "error". When emit("dataReceived") is called, all registered listeners for that event should be invoked.
*/