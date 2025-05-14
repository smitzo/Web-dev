function onDone(){
    console.log ("this is ondone function");
}
setTimeout(onDone,3000);    // a clock is maintained for 3 seconds, after which onDone() ,a callback function is called
/*

setTimeout is a built-in asynchronous function in JavaScript that allows us to schedule the execution of a function after a
certain delay (measured in milliseconds).

example: a function onDone is passed as  1st argument to setTimeout. This function will be called after the specified time delay.
The 2nd argument is 1000, represents the time delay in milliseconds (1000 ms = 1 second). it means that setTimeout will wait
for 1 second before executing the onDone function.

onDone function: This function will not run immediately. It will only be executed after 1 second due to the delay specified in setTimeout.

What Happens Behind the Scenes: JS is single-threaded, meaning it can only execute one task at a time. To handle operations 
like time delays or I/O (input/output) without blocking the main execution, it uses an event loop and callback queue.

When setTimeout(onDone, 1000) is called:
JS immediately starts a timer for 3 second (3000 milliseconds).
Meanwhile, the rest of your code continues executing without waiting for the timer to finish (this is asynchronous nature of setTimeout).
Once the timer completes after 3 second, the onDone function is added to the callback queue.
The event loop checks the main execution thread. If it’s idle (i.e., no blocking code is running), it takes the function from the callback queue (onDone) and executes it, which in this case logs the message "this is ondone function".

Asynchronous Behavior: The main point of using setTimeout is to defer the execution of a function without stopping the rest of the code from running. 
The code outside setTimeout (if any) would keep executing normally, and after the delay (1 second in this case), the onDone function would be triggered. */

function findSum(n){
    let ans=0;
    for (let i=0;i<n;i++){
        ans+=i;
    }
    return ans;
}

//sync
function findSumTill100Sync(){

    console.log("sync "+ findSum(100));
}
findSumTill100Sync();
console.log("hello world sync");

// async 
function findSumTill100Async(){

    console.log("async "+ findSum(100));
}

setTimeout(findSumTill100Async, 1000)
console.log("hello world async");


