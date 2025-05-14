
function getDataAsync() { // async operation (like fetching data)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched!");   //promise is  resolved with value "Data fetched"
        }, 3000);  // 3-second delay
    });
}

// Async function using the promise
async function fetchData() {
    console.log("Fetching data...");
    //const result= getDataAsync();  // logs promise{pending}
    const result = await getDataAsync();  // Waits for the promise to resolve (no need to write callbacks or    .then() when you use await)
    console.log(result);  // Logs the resolved value
}

fetchData();  // Call the async function

// the control flow for the `fetchData` function using Promises and `async`:

// 1. `fetchData()` starts and logs "Fetching data...".
// 2. `await getData` pauses the `fetchData` function until `getData()` resolves the promise.
//    - Inside `getData()`, the `setTimeout()` is triggered, simulating a 2-second delay.
//    - After 2 seconds, `resolve()` is called, and the promise is resolved with the value "Data fetched!".
// 3. Once the promise is resolved, `await` resumes the execution of `fetchData`, storing the result.
// 4. `fetchData()` logs the resolved value, "Data fetched!".

// The flow is sequential and looks synchronous due to `await`.