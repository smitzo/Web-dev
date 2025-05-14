//create a terminal clock(HH:MM:SS)

function terminalClock(HH,MM,SS){

function decrementorLogic(){

    if(SS>0){
        SS--;
    }
    else 
        SS=59

    if (MM>0){
        MM--;
    }
    else 
        MM=59;
    if ()

        
        

    }
}

    for (let i=HH*1000*3600+MM*1000*60+SS*1000; i>=0; i--){
        setTimeout(()=>{console.log(HH+":"+MM+":"+SS)},decrementorLogic )
    }
}