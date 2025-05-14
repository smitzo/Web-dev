// Function "putCopyRightToFile" to add copyright text to the file and invoke the callback after the process is done
const fs = require('fs'); 
const path =require('path');
const filepath=path.join(__dirname,'0-abc.txt')

function putCopyRightToFile(callbackFunc) {

   
    fs.readFile(filepath, "utf-8", function (err, data) {    // Reading the contents of the file asynchronously

        if (err) {      // Error handling for file reading
            console.error("Error reading file:", err);
            return; // If there is an error, exit the function
        }
        
        data = data + " (copyrights by Smit 2023) ";    // Append copyright information to the read data     
        
        fs.writeFile(filepath, data, function (err) {   // Writing the updated data back to the file
            
            if (err) {  // Error handling for file writing
                console.error("Error writing file:", err);
                return; 
            }

            callbackFunc(); // Once the write operation is complete, invoke the callback function
        });
    });
}

putCopyRightToFile(function () {    // Calling the function and passing a callback to display a message when the process is complete
    console.log("Copyright has been added to the file");
});
