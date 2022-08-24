let myTimer = setInterval(displayTime, 1000);




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
