//Create a function for getting the current time

const date = () =>{ 
let date = new Date()
let hour = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()

//Gives the 0 before a number example : if it is 3 minutes then it will show the 03 minutes, if it is 10 then it will be 10 itself.
if(minutes < 10){
    minutes = "0" + minutes
}
if(seconds < 10){
    seconds = "0" + seconds
}

//Let set the AM and PM
if(hour < 12){
    document.getElementById("clock").innerText = hour + "H:" + minutes + "M:" + seconds + "S-AM";
}
else{
    document.getElementById("clock").innerText = hour + "H:" + minutes + "M:" + seconds + "S-PM";
}

// //displays the date using clock id from html part.
// document.getElementById("clock").innerText = hour + "H:" + minutes + "M:" + seconds + "S";
}

//calls the date function here.
date();

//set's the interval for every 1s to update the time.
setInterval(date, 1000)

