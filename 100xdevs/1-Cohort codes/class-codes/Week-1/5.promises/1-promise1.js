
function smitAsyncFunction() {   // Step 2: Create a new Promise. A Promise takes a function with two parameters: resolve and reject.
   
    let p = new Promise(function(resolve, reject) {
      
      setTimeout(function() {// Step 3:  asynchronous task (e.g., reading a file or fetching data)
        resolve("Babu got the ketchup!");  // Step 4: After 3 seconds, the task completes successfully, and we call resolve().the promise is now said to be resolved with value "Babu got the ketchup"
      }, 3000); 
    });
    return p; // Step 5: Return the Promise so we can chain it later
  }
  
 
  function callback(result) {  // Step 6: Define a function to be called when the Promise is resolved
    console.log(result); // This will print "Babu got the ketchup!" when the Promise is fulfilled
  }
  
  let p = smitAsyncFunction(); // Call the async function that returns a Promise
  
  // Step 7: Attach a `.then()` method to handle the result when the Promise is resolved
  p.then(callback); // This calls `callback(result)` when the Promise resolves
  