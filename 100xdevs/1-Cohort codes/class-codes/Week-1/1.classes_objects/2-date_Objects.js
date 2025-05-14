function dateMethods(){
    const currentDate=new Date();
    console.log("current date:", currentDate);

    console.log("Date:" + currentDate.getDate);
    console.log("Month: "+ currentDate.getMonth);
    console.log("Year: "+ currentDate.getFullYear);
    console.log("Hours: "+ currentDate.getHours);
    console.log ("Minutes: "+currentDate.getMinutes);
    console.log("Seconds:"+ currentDate.getSeconds);
    
    currentDate.setFullYear(2022);
    currentDate.setMonth(5);
    console.log("Month after setMonth: "+ currentDate.getMonth);
    console.log("Full year after setFullYear: "+ currentDate.getFullYear)


}