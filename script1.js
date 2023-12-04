let cDay;
let cHour;
let cMin;
let cSec;
let daysLeft;
let cMonth;
let cYear;
let daysPerYear;
let daysPerFeb;


let interval = window.setInterval(function(){
     let cDate = new Date();

     cHour = cDate.getHours();
     cMin = cDate.getMinutes();
     cSec = cDate.getSeconds();
     cDay = cDate.getDate();
     cYear = cDate.getFullYear();
     cMonth = cDate.getMonth() + 1;

     document.getElementById("year").innerHTML = "New Year " + (cYear + 1)


     if (cYear % 4 == 0) {
        daysPerYear = 366;
        daysPerFeb = 29;
     } else {
        daysPerYear = 365;
        daysPerFeb = 28;
     }

     switch(cMonth){
        case 1:
            daysLeft = daysPerYear;
            break;
        case 2:
            daysLeft = daysPerYear - 31;
            break;
        case 3:
            daysLeft = daysPerYear - (31 + daysPerFeb);
            break;
        case 4:
            daysLeft = daysPerYear - (62 + daysPerFeb);
            break;
        case 5:
            daysLeft = daysPerYear - (92 + daysPerFeb);
            break;
        case 6:
            daysLeft = daysPerYear - (123 + daysPerFeb);
            break;
        case 7:
            daysLeft = daysPerYear - (153 + daysPerFeb);
            break;
        case 8:
            daysLeft = daysPerYear - (184 + daysPerFeb);
            break;
        case 9:
            daysLeft = daysPerYear - (215 + daysPerFeb);
            break;
        case 10:
            daysLeft = daysPerYear - (245 + daysPerFeb);
            break;
        case 11:
            daysLeft = daysPerYear - (276 + daysPerFeb);
            break;
        case 12:
            daysLeft = daysPerYear - (306 + daysPerFeb);
            break;
     }



     document.getElementById("days").innerHTML = daysLeft - cDay;
     document.getElementById("hours").innerHTML = 24 - cHour;
     document.getElementById("minutes").innerHTML = 60 - cMin;
     document.getElementById("seconds").innerHTML = 60 - cSec;
}, 1000);
