// given an input array, give back all even values from it
// given a users array , give back al names starting with s

const inputArr=[1,2,3,4,5];
const users=["smit", "shivam","harsh", "jay", "vedika", "suraj"]

//---------Normal way-------------
// const outputArr=[];
// for (let i=0;i<inputArr.length();i++){

//     if (inputArr[i]%2==0){
//         outputArr.push(inputArr[i]);
//     }
// }
// console.log(outputArr);

//--------FILTER------------------
function filteringLogic(i){
    if (i%2 ==0){
        return true;
    }
    else return false;
}
const outputArr=inputArr.filter(filteringLogic);
console.log(outputArr);

function nameFilter(name){
    if (name.startsWith("s")){
        return true;
    }
    else 
    return false;

}

const nameResult= users.filter(nameFilter);
console.log(nameResult);