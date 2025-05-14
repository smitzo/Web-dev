// we use callbacks to follow DRY (dont repeat yourself) function 
//callback function is a generic funciton that is passed as a parameter into another function
//Q1 SUM OF SQUARES AND SUM OF CUBES FUNCTION

function sumOfSomething(a,b,callbackfunc){

  return callbackfunc(a)+ callbackfunc(b);  // always return callback function or else it will return undefined
}
function square(n){
    return n*n;
}
const cube=(n)=>{return n**3;}


console.log("sum of squares is : " + sumOfSomething (5,10,square) )
console.log("sum of cubes is : " + sumOfSomething(5,10,cube) )

/* instead of writing multiple functions like sumofsquares , sumofcubes , sumofquads i create a generic function
or template like function: sumofsomething . This saves many line of code

 function sumofsquares(a,b){
  let square1=square(a)
    let square2=square(b)
    return square1+square2
 }

 function sumofcubes(a,b){
  let square1=cube(a)
    let square2=cube(b)
    return cube1+cube2
 }

*/

//Q2 Write a function named calculate that takes two numbers and a callback function as parameters. 
//The callback function should be invoked with the sum of the two numbers. 
//Call the calculate function with two numbers and a callback function that prints the sum.

function calculate(num1, num2, callback) {
    // Your code here to calculate the sum of num1 and num2
    // Invoke the callback function with the sum as an argument
    let sum=num1+num2;
    return callback(sum)

  }
  
  // Callback function
  function printSum(sum) {
    console.log("The sum is:", sum);
  }
  
  // Call the calculate function with two numbers and the printSum callback
  calculate(3, 7, printSum);



//Q3. Write a function named greetUser that takes a user's name and a callback function as parameters. 
//The callback function should be invoked with a greeting message that includes the user's name. 
//Call the greetUser function with a name and a callback function that prints the greeting and store it in a list.

function greetUser(name,callbackfunc){

    console.log("hello "+ {name})
    return callbackfunc(name);
}

const userlist=[]
function putInList(name){
    
    userlist.push(name);
}

greetUser("smit",putInList);
greetUser("shivam",putInList);
greetUser("harsh",putInList);
greetUser("jay",putInList);

console.log(userlist);
  