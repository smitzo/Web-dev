/*  Wrapping an async function in my custom function

function myOwnSetTimeout(fn,duration){
    setTimeout(fn,duration);
}

myOwnSetTimeout(function(){
    console.log("hi there")
},1000)

*/

// Using Promises (promises are synctactical sugar which makes code look lil bit better)

function myOwnSetTimeout(callback,duration){
    setTimeout(callback,duration);
}
function promisifiedSetTimeOut(duration){
    const p =new Promise(function(resolve){
        setTimeout(resolve,duration);
    });
    return p;   

}
myOwnSetTimeout(function(){
    console.log("after set timeout")
},1000)
const ans=promisifiedSetTimeOut(1000);
console.log(ans)