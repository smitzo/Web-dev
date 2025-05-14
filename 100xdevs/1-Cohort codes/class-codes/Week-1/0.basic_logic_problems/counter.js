//create a decrement counter counting from 30 to 0


function counter (x){

    for (let i=x; i>=0;i--){

        setTimeout(()=>{console.log(i)}, (x-i)*1000);
    
    }
}
counter(30)
