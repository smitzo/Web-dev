var arr=[1,2,3,4,5,6,7,8,9,10];
var max=arr[0];
var reversearr=[];

function printEven (arr){

    console.log("even number are:")

    for (let i=0;i<arr.length;i++){
    
        if (arr[i]%2==0) {
            console.log(arr[i]);
        }
        
    }

}

function findMax(arr){

    for (let i=0;i<arr.length;i++){

        if (arr[i]>max){
            max=arr[i];
        }
        
    }
    console.log("maxnumber is : "+ max)

}

function reverseArray(arr){

    console.log("reversed array is:")

    for (let i=0;i<arr.length-1;i++){

        reversearr.push(arr[arr.length-i-1]);
        console.log(reversearr[i]+ " ");
    }


}

printEven(arr);
findMax(arr);
reverseArray(arr);




