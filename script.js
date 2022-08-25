let myTimer = setInterval(displayTime, 1000);
let verify = null;


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
    if (verify !== null) {
        clearInterval(verify);
    }
    verify = setInterval(stopwatch, 10);
})

document.getElementById('button-stop-2').addEventListener('click', () => {
    clearInterval(verify);
})

document.getElementById('button-right-2').addEventListener('click', () => {
    clearInterval(verify);
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById("front-2").innerHTML = "00:00:00";
})

let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let displayMinutes = 0;
let displaySeconds = 0;
let displayMiliseconds = 0;

function stopwatch() {

    miliseconds++;

    if(miliseconds == 99){
        miliseconds = 0;
        seconds++;

        if(seconds == 60) {
            seconds = 0;
            minutes++;
        }
    }

    if (miliseconds < 10) {
        displayMiliseconds = "0" + miliseconds;
    } else {
        displayMiliseconds = miliseconds;
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

    let stopwatchNow = displayMinutes + ":" + displaySeconds + ":" + displayMiliseconds;
    document.getElementById("front-2").innerHTML = stopwatchNow;
}