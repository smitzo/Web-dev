//Write a function reverseString that takes a string as a parameter and returns the reversed version of that string.
function reverseString (string1)
{
    var string1arr=string1.split("");
    var string2arr=[];
    var len =string1arr.length

    for (let i=0;i<len;i++){

        string2arr[len-1-i]=string1arr[i];

    }
    var string2=string2arr.join("")
    return string2
}
console.log(reverseString("hello"))