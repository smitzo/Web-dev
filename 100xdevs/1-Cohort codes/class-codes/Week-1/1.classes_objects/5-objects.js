// Object Methods Explanation
function objectMethods(obj) {
    console.log("Original Object:", obj);
  
    let keys = Object.keys(obj);
    console.log("After Object.keys():", keys);
  
    let values = Object.values(obj);
    console.log("After Object.values():", values);
  
    let entries = Object.entries(obj);
    console.log("After Object.entries():", entries);
  
    let hasProp = obj.hasOwnProperty("property");
    console.log("After hasOwnProperty():", hasProp);
  
    let newObj = Object.assign({}, obj, { newProperty: "newValue" });
    console.log("After Object.assign():", newObj);
  
  
  }
  
  // Example Usage for Object Methods
  const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  };
  
  objectMethods(sampleObject);
  
  //Wap to find name of persons who are female in an array of complex objects.

var users= [    //users is an array of objects
    {
        name:"Smit" ,
        age:20, 
        gender:"male"
    },
    {
        name:"shivam",
        age:25,
        gender:"male"
    },
    {
        name:"rusvi",
        age:"25",
        gender:"female"
    },    
    {
        name:"Viha",
        age:"21",
        gender:"female"
    }

]
function printFemaleNames(users){

    for (let i=0; i<users.length;i++){
        if (users[i]["gender"]=="female"){
            console.log(users[i]["name"]+" is female")
        }
    } 

}
printFemaleNames(users);


