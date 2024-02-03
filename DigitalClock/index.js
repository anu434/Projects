const hourE1=document.getElementById("hour");

const MinutesE1=document.getElementById("Minutes");
const Seconds=document.getElementById("Seconds");
const AMPM=document.getElementById("AMPM");

function updateClock(){
    let now=new Date()
    let h=now.getHours()
    let m=now.getMinutes()
    let s=now.getSeconds()
    let AMPM="AM"
    if(h>12){
        h=h-12
        AMPM="PM"
    }
hourE1.innerText=h;
MinutesE1.innerText=m;
Seconds.innerText=s;
AMPM,(innerText=AMPM);
}

updateClock()