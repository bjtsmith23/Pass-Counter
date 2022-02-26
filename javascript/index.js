var timerId;
var timeCount = 0;
var team1PC = 0;
var team2PC = 0;



// HTML Elements
var timerEl = document.getElementById("time");
var startScreenEl = document.getElementById("start-screen");
var startBtn = document.getElementById("start");
var teamOneP = document.getElementById("team1p")
var teamTwoP = document.getElementById("team2p")
var passCountEl = document.getElementById("passCount");

// MAIN PROCESS
function startMatch() {
    startScreenEl.setAttribute("class", "hide");
    passCountEl.setAttribute("class", "show");

    timerId = setInterval(timerStart, 1000);

};

// function filterTime() {
//     var minutes = Math.floor(timeCount / 60);
//     var seconds = timeCount - minutes * 60;
// };

function timerStart() {
    
    timeCount++;
    timerEl.textContent = timeCount;

    
}

function handlePass1() {
    var addPass = team1PC + 1;
    teamOneP.textContent = addPass;

}

function handlePass2() {
    var anotherPass = team2PC + 1;
    console.log(anotherPass);
    teamOneP.textContent = anotherPass;

}

startBtn.addEventListener("click", startMatch);

teamOneP.addEventListener("click", handlePass1);

teamTwoP.addEventListener("click", handlePass2)