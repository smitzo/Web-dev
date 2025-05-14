/* Q1: Array Operations with Callbacks
Problem: Create a function processArray that takes two arguments: an array and a callback function. The function should iterate 
through the array and apply the callback to each element, returning a new array with the modified values.

Example use cases:
If the callback squares each number, the output array should contain the squares.
If the callback adds 5 to each number, the output array should reflect that.*/


 

// let arr1=[1,2,3,4,5,6,7,8,9,10];
// const processArray= (arr,callback)=>{

//   return callback(arr);

// }

// function squares(arr){

//   for (let i=0;i<arr.length;i++){
//     arr[i]=arr[i]**2;
//     console.log(arr[i]);
//   }
// }

// processArray(arr1,squares);


/* Q2: Custom forEach Implementation
Problem: Implement a function customForEach that mimics JavaScript’s built-in forEach method. It should take an array and
a callback function, and for each element in the array, call the callback with the element and its index.

Goal: Ensure that the callback receives both the element and its index when iterating*/
let arr2=[1,2,3,4,5,6]
const customForEach = (arr,callback)=>{
  for (let i=0;i<arr.length;i++){
    return callback(arr[i],i);
  }
}

const printElement= (arr,i)=>{

    console.log("element at "+i+"th index is: "+arr2[i]);
}

customForEach(arr2,printElement);