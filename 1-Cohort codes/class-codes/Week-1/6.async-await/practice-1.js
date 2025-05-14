// 1. Simulating an API Call with a Promise
// Imagine you are simulating a real-world scenario where data is fetched from an API (like a user profile).Simulate a 2-second delay for this API call.
// Write a function getUserData() that simulates fetching user data (like name and age) after a 2-second delay using a Promise. 
//Then, create another function displayUserData() that uses async/await to call getUserData() and logs the user data when it’s received.

function getUserDataAsync() {
    let users = [
        { firstName: "Smit", lastName: "Joshi", age: 21 },
        { firstName: "Shivam", lastName: "Joshi", age: 25 },
        { firstName: "Jay", lastName: "Joshi", age: 25 },
        { firstName: "Harsh", lastName: "Joshi", age: 23 }
    ];

    let data = []
    data= users.map(user => user.firstName);

    // for (i in users){
    //     data.push(users[i].firstName)
    // } 

    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(data);  // Simulating a delay of 3 seconds
        }, 3000);
    });
}

function fetchData() {
    getUserDataAsync().then(function (data) {
        console.log("Fetched data successfully:", data);
    });
}

fetchData();


// 2. Executing Asynchronous Operations in Sequence
// Context: Suppose you have two independent asynchronous tasks that need to happen one after the other. For example, you want to fetch user info, then fetch the user's posts, but only after you get the user info.

// Question:
// Write two asynchronous functions: fetchUserInfo() that returns a Promise resolving with user details after 1 second, and fetchUserPosts() that resolves with the user's posts after 1.5 seconds. Then, create a function fetchAllData() that executes these two functions sequentially using async/await and logs both results in order.

// 3. Handling Errors in Async Operations
// Context: In real-world applications, network errors or other failures can occur while making asynchronous requests. Handling these errors properly is critical.

// Question:
// Write a function fetchDataWithError() that returns a Promise. The function should have a 50% chance of success (use Math.random()), resolving with some data or rejecting with an error. Create another function handleFetch() that uses async/await to call fetchDataWithError() and logs either the data or the error. Use a try-catch block to handle the rejection gracefully.

// These questions will help you practice creating and handling Promises, as well as using async/await for better control flow and error handling.