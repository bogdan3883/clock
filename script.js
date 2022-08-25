let myTimer = setInterval(displayTime, 1000);
let int = null;


function displayTime() {
    const time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let timeNow = hours + ":" + minutes + ":" + seconds;
    document.getElementById("front").innerHTML = timeNow;
}
displayTime();



document.getElementById('button-left').addEventListener('click', () => {

    let on = document.getElementById("container-2");
    let off = document.getElementById("container");

    if (on.style.display == "none") {
        on.style.display = "block";
        off.style.display = "none";
    } else {
        on.style.display = "none";
        off.style.display = "block";
    }
})

document.getElementById('button-left-2').addEventListener('click', () => {

    let on = document.getElementById("container-2");
    let off = document.getElementById("container");

    if (on.style.display == "block") {
        on.style.display = "none";
        off.style.display = "block";
    }
})

document.getElementById('button-play-2').addEventListener('click', () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(stopwatch, 1000);
})

document.getElementById('button-stop-2').addEventListener('click', () => {
    clearInterval(int);
})

document.getElementById('button-right-2').addEventListener('click', () => {
    clearInterval(int);
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById("front-2").innerHTML = "00:00:00";
})

let hours = 0;
let minutes = 0;
let seconds = 0;
let displayHours = 0;
let displayMinutes = 0;
let displaySeconds = 0;

function stopwatch() {

    seconds++;

    if(seconds == 60){
        seconds = 0;
        minutes++;

        if(minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    if (seconds < 10) {
        displaySeconds = "0" + seconds;
    } else {
        displaySeconds = seconds;
    }

    if (minutes < 10) {
        displayMinutes = "0" + minutes;
    } else {
        displayMinutes = minutes;
    }

    if (hours < 10) {
        displayHours = "0" + hours;
    } else {
        displayHours = hours;
    }

    let stopwatchNow = displayHours + ":" + displayMinutes + ":" + displaySeconds;
    document.getElementById("front-2").innerHTML = stopwatchNow;
}