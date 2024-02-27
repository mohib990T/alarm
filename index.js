window.addEventListener('load', time);

function time() {
    let a = new Date();
    let hrs = a.getHours();
    let minutes = a.getMinutes()
    let seconds = a.getSeconds();
    (hrs < 10) ? hrs = `0${hrs}` : hrs;
    (minutes < 10) ? minutes = `0${minutes}` : minutes;
    (seconds < 10) ? seconds = `0${seconds}` : seconds;
    let amPm = (hrs > 11 && hrs <= 23) ? "PM" : "AM";

    document.getElementById('hr').innerHTML = hrs;
    document.getElementById('minute').innerHTML = minutes;
    document.getElementById('second').innerHTML = seconds;
    document.getElementById('ampm').innerHTML = amPm;

    setTimeout(time, 1000)
}


//Getting time value from here
let setWakeUpTime = document.querySelector('#setWakeUpTime');
let setLunchTime = document.querySelector('#setLunchTime');
let setNapTime = document.querySelector('#setNapTime');
let setNightTime = document.querySelector('#setNightTime');

//getting access to html outbox time html space from here
let wakeupdata = document.getElementById('wakeupdata');
let lunchtimedata = document.getElementById('lunchtimedata');
let naptimedata = document.getElementById('naptimedata');
let sleeptimedata = document.getElementById('sleeptimedata');
let submitButton = document.querySelector('button');
let message = document.getElementById("message");
let imageMessage = document.getElementById("imageMessage");

//Applying time value from here.
function getTimeData() {
    wakeupdata.innerHTML = setWakeUpTime.value;
    lunchtimedata.innerHTML = setLunchTime.value;
    naptimedata.innerHTML = setNapTime.value;
    sleeptimedata.innerHTML = setNightTime.value;
    let a = new Date();
    let hrs = a.getHours();
    let minutes = a.getMinutes()
    let seconds = a.getSeconds();
    let amPm = (hrs > 11 && hrs <= 23) ? "PM" : "AM";

    document.getElementById('hr').innerHTML = hrs;
    document.getElementById('minute').innerHTML = minutes;
    document.getElementById('second').innerHTML = seconds;
    document.getElementById('ampm').innerHTML = amPm;

    let z = `${hrs} ${amPm}-${hrs + 1} ${amPm}`

    if (setWakeUpTime.value == z) {
        message.innerHTML = "GRAB SOME HEALTHY BREAKFAST";
        imageMessage.src = "wakeup.jpg"


    }
    if (setLunchTime.value == z) {
        message.innerHTML = "LET'S HAVE SOME LUNCH"
        imageMessage.src = "lunch time vector.jpg"
    }
    if (setNapTime.value == z) {
        message.innerHTML = "GET SOME TEA"
        imageMessage.src = "napImage.png"

    }
    if (setNightTime.value == z) {
        message.innerHTML = "GO TO BED AND SLEEP"
        imageMessage.src = "night image.jpg"

    }
}