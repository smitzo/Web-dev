/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

// function wait(n) {
// }

// module.exports = wait;



function wait(n) {
    // Create a new Promise
    let p = new Promise(function(resolve) {
        // Use setTimeout to resolve the promise after n seconds
        setTimeout(() => {
            resolve();
        }, n * 1000);
    });
    return p; // Return the promise
}

// Call the wait function and handle the resolved promise
wait(3).then(function(result) {
    console.log(result); // Logs "resolved promise" after 3 seconds
    console.log("done successfully");
});


module.exports = wait;
