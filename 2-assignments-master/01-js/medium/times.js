/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let start = new Date(); // start time
    let sum = 0;

    for (let i = 0; i <= n; i++) {
        sum += i;

        if (i == 100) {
            let end1 = new Date(); // end time for 100
            let time1 = (end1 - start) ; // time in seconds
            console.log("Sum till 100 takes: " + time1 + " miliseconds");
        }

        if (i == 100000) {
            let end2 = new Date(); // end time for 100000
            let time2 = (end2 - start) ;
            console.log("Sum till 100000 takes: " + time2 + " miliseconds");
        }

        if (i == 1000000000) {
            let end3 = new Date(); // end time for 1000000000
            let time3 = (end3 - start) ;
            console.log("Sum till 1000000000 takes: " + time3 + " miliseconds");
        }
    }
}
calculateTime(1000000000);
