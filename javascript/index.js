var timerId;
var timeCount = 0;
// var teamOneP = 0;
var passCount1 = 1;
var passCount2 = 1;
var goalCount1 = 1;
var goalCount2 = 1;



// HTML Elements
var timerElMin = document.getElementById("time");
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
   
    timerElMin.textContent = timeCount++;

}

// function timerFilter() {
  
//     if (timerId < 60) {
//         timerElSec.textContent = timeCount;
//     } else {
//         timerElMin.textContent = timeCount / 60;
//         timerElSec.textContent = timeCount % 60;
//     };
// };        


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