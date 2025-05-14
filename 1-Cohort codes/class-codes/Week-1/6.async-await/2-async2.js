const path=require("path")
const fs=require("fs")
const filepath = path.join(__dirname, 'abc.txt');
function smitReadAsync(){
    console.log("inside SmitReadAsync")

    var p =new Promise(function (resolve,reject){
        
        fs.readFile(filepath,(err,data)=>{
            if (err){
                reject("error:"+err);
            }
            else {
                resolve ("text file is:" + data.toString());
            }
        });
    });

    return p;
}

async function main(){
    console.log("inside main function")
    try{
        let value= await smitReadAsync();
        console.log(value);
    }

    catch(error){
        console.log(error)
    }

}

main();