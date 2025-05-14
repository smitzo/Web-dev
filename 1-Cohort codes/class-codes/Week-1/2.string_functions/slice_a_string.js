function cutIt(str,start,end){
let newStr="";
for (let i=0;i<str.length;i++){
    if (i>=start && i<=end){
        newStr=newStr+str[i]; 
        }

    }
return newStr;
}