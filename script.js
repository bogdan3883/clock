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


function myFunction() {
    var x = document.getElementById("container-2");
    let y = document.getElementById("container");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "block";
    }
  }


  function stopwatch() {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let displayHours = 0;
    let displayMinutes = 0;
    let displaySeconds = 0;

    seconds++;

    if(seconds / 60 == 1){
        seconds = "00";
        minutes++;

        if(minutes / 60 == 1) {
            minutes = 0;
            hours++;
        }
    }

    if (seconds < 10){
        displaySeconds = "0" + seconds;
    } else {
        displaySeconds = seconds;
    }

    if (minutes < 10){
        displayMinutes = "0" +minutes;
    } else {
        displayMinutes =minutes;
    }

    if (hours < 10){
        displayHours = "0" + hours;
    } else {
        displayHours = hours;
    }
    document.getElementById("front-2").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
    
  }
  window.setInterval(stopwatch, 1000);