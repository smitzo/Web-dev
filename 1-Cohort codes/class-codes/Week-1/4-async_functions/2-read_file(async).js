const fs = require("fs");  // Import the built-in 'fs' (file system) module to handle file operations
const path = require('path');  // Import 'path' module to handle and manipulate file paths

const filepath = path.join(__dirname, '0-abc.txt');// Construct the absolute path to the file '0-abc.txt' using path.join() and __dirname (__dirname refers to the current directory of the script)

function onDone(err, content) {         // Callback function to be executed when the file read is complete
    if (err) {                          // Error handling: If there's an error, log it and return
        console.error("Error reading file:", err);
        return;
    }
    else {
    console.log(content.toString());  // If no error, log the content of file (Convert the buffer to a string for readability)
    }
}

// Asynchronous file read operation
fs.readFile(filepath, onDone);  // This initiates the reading of '0-abc.txt'. When reading is complete, it calls the 'onDone' function The callback function 'onDone' handles the result of the read operation

console.log("hi there1"); // This line gets printed immediately because fs.readFile is asynchronous.hi there' will print first, and the file contents will be printed later when the read is complete

let sum=0;
for (let i=0;i<1000000000;i++){
    sum=sum+i;
}
console.log(sum);
console.log("hi there2");

// if the code got executed synchronously/serially/line by line output would be : 1.hello world from smit joshi 2. hi there1 3. 499999999067109000 4. hi there2