var timerId;
var timeCount = 0;
// var teamOneP = 0;
var passCount1 = 1;
var passCount2 = 1;



// HTML Elements
var timerEl = document.getElementById("time");
var passElOne = document.getElementById("pass1");
var passElTwo = document.getElementById("pass2");
var startScreenEl = document.getElementById("start-screen");

var startBtn = document.getElementById("start");
var teamOnePassBtn = document.getElementById("team1p");
var teamTwoPassBtn = document.getElementById("team2p");

var passCountEl = document.getElementById("passCount");

// MAIN PROCESS
function startMatch() {
    startScreenEl.setAttribute("class", "hide");
    passCountEl.setAttribute("class", "show");

    timerId = setInterval(timerStart, 1000);

};

function timerStart() {
    timerEl.textContent = timeCount++;
    
    
}


function handlePass1() {
    passElOne.textContent = passCount1++;
}

function handlePass2() {
    passElTwo.textContent = passCount2++;
}

startBtn.addEventListener("click", startMatch);

teamOnePassBtn.addEventListener("click", handlePass1);

teamTwoPassBtn.addEventListener("click", handlePass2);