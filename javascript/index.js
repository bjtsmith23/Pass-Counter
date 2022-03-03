var ms = 0;
var sec = 0;
var min = 0;

var timerId;
var timeCount = 0;
// var teamOneP = 0;
var passCount1 = 1;
var passCount2 = 1;
var goalCount1 = 1;
var goalCount2 = 1;



// HTML Elements
var timerEl = document.getElementById("time");
// var timerElSec = document.getElementById("times");
var passElOne = document.getElementById("pass1");
var passElTwo = document.getElementById("pass2");
var goalElOne = document.getElementById("goal1");
var goalElTwo = document.getElementById("goal2");

var startScreenEl = document.getElementById("start-screen");
var pickScreenEl = document.getElementById("pick-screen");
var passCountEl = document.getElementById("passCount");

var pickTeamBtn = document.getElementById("pick");
var startMatchBtn = document.getElementById("start");
var teamOnePassBtn = document.getElementById("team1p");
var teamTwoPassBtn = document.getElementById("team2p");
var teamOneGoalBtn = document.getElementById("team1g");
var teamTwoGoalBtn = document.getElementById("team2g");



// MAIN PROCESS
function pickTeams() {
    startScreenEl.setAttribute("class", "hide");
    pickScreenEl.setAttribute("class", "show");
    console.log("im clicked!!");
};

function startMatch() {
    pickScreenEl.setAttribute("class", "hide");
    passCountEl.setAttribute("class", "show");
    console.log("I have been clicked!!!");
    function startTime(flag) {
    timeoutId = setTimeout(function() {
        ms = parseInt(ms);
        sec = parseInt(sec);
        min = parseInt(min);
 
        ms++;
 
        if (ms == 100) {
            sec = sec + 1;
            ms = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (ms < 10) {
            ms = '0' + ms;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }
        if (min < 10) {
            min = '0' + min;
        }
 
        timerEl.innerHTML = min + ':' + sec;
 
        // calling start() function recursivly to continue stopwatch
        startTime();
 
    }, 10); // setTimeout delay time 10 milliseconds
}   
startTime();
}












    function handlePass1() {
        passElOne.textContent = passCount1++;
    }

    function handlePass2() {
        passElTwo.textContent = passCount2++;
    }

    function handleGoal1() {
        goalElOne.textContent = goalCount1++;
    };

    function handleGoal2() {
        goalElTwo.textContent = goalCount2++;
    }

    pickTeamBtn.addEventListener("click", pickTeams);

    startMatchBtn.addEventListener("click", startMatch);

    teamOnePassBtn.addEventListener("click", handlePass1);

    teamTwoPassBtn.addEventListener("click", handlePass2);

    teamOneGoalBtn.addEventListener("click", handleGoal1);

    teamTwoGoalBtn.addEventListener("click", handleGoal2);