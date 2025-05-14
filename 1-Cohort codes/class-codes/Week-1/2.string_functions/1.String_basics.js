 // shows the length of a given string
function getLength(str){   
    console.log("original string: " + str );
    console.log("length of the string is : " + str.length);
}
getLength("helloworld")

// shows the index of first occurence of a target substring or a character
function findIndexOf(str,target){   
    console.log("original string: "+ str);
    console.log("index of target sub string "+target +"is :" + str.indexOf(target))
}
findIndexOf("hello world","world");

// shows the index of last occurence of a target substring or a charcter 
function getlastIndexof(str,target){    
    console.log ("original string: "+str);
    console.log ("last index of the target substring is :"+ str.lastIndexOf(target));

}
getlastIndexof("hello world world world world","world");

//slices a string
function getSlice(str,start,end){
    console.log ("original string: "+str);
    console.log("After slice: "+ str.slice (start,end));
}
getSlice("hello world",2,5);

//replaces a string
function replaceString(str,target,replacement){
    str="hello world"
    console.log(str.replace("world","javascript"))
}

//splits a string into parts seperated by a seperator
function splitString(str,seperator){
    console.log ("original string: "+str);
    console.log("After split: "+ str.split(seperator));
}
splitString("hello world", " ");

//trims a string
function trimString(){
    

}

function toUpper(){
    console.log ("original string: "+str);
    console.log("Uppercase result is "+ str.toUpper)
}
toUpper("my name is smit")
