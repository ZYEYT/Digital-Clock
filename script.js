function showTime(){

    let date = new Date();
    let hours = date.getHours();//0-23
    let minutes = date.getMinutes()//0-59
    let seconds = date.getMinutes()//0-59

let formatHours = convertForest(hours)
hours = checkTime(hours)
hours = addZero(hours)
minutes = addZero(minutes)
seconds = addZero(seconds)
document.getElementById('clock').innerHTML = '$'
}
function convertFormat(time){
let format = 'AM'
if (time >= 12){
    format = 'PM'
}
return format;
}
function checkTime(time){
if(time>12){
    time=time - 12;
}
return time
}
function addZero(time){
    if (time<10){
        time = "0" + time;
    }
    return time
}

showTime()
setInterval(showTime,1000)