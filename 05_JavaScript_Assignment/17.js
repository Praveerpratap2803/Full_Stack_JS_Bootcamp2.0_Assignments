function daysInMonth(month){
    if(month === "January"||"March"||"May"||"July"||"August"||"October"||"December"){
        console.log("NUmber of days is 31");
    }else{
        if(month === "February"){
            console.log("NUmber of days is 28");
        }else{
            console.log("NUmber of days is 30");
        }
    }
}

daysInMonth("May")




