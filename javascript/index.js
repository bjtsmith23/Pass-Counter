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


var passElOne = document.getElementById("pass1");
var passElTwo = document.getElementById("pass2");
var goalElOne = document.getElementById("goal1");
var goalElTwo = document.getElementById("goal2");


var chelsea = document.getElementById("chelsea");

var startScreenEl = document.getElementById("start-screen");
var pickScreenEl = document.getElementById("pick-screen1");
var passCountEl = document.getElementById("passCount");
var halftimeEl = document.getElementById("half-time");
var fullTimeEl = document.getElementById("full-time");
var passCount2El = document.getElementById("passCount2");

var homeTeamEl = document.getElementById("home1");

var pickTeamBtn = document.getElementById("pick");
var startMatchBtn = document.getElementById("start");
var halfTimeBtn = document.getElementById("halftiz");
var secondHalfBtn = document.getElementById("halftiz2");

var fullTimeBtn = document.getElementById("fulltiz");

var teamOnePassBtn = document.getElementById("team1p");
var teamTwoPassBtn = document.getElementById("team2p");
var teamOneGoalBtn = document.getElementById("team1g");
var teamTwoGoalBtn = document.getElementById("team2g");

// var chelseaBtn = document.getElementById("chelsea")



// MAIN PROCESS
function pickTeams() {
    startScreenEl.setAttribute("class", "hide");
    pickScreenEl.setAttribute("class", "show");
    console.log("Chelsea");
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
};

function halfTime() {
    passCountEl.setAttribute("class", "hide");
    halftimeEl.setAttribute("class", "show");
    console.log(passCount1);

}

function secondHalf() {
    halftimeEl.setAttribute("class", "hide");
    passCount2El.setAttribute("class", "show");
    // console.log(passCount1);
}

function fullTime() {
    passCount2El.setAttribute("class", "hide");


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

    function chooseChelsea() {
        // homeTeamEl.textContent = chelsea;
        console.log('Hi there!!');
        // homeTeamEl.innerHTML = ''; 
      };

    pickTeamBtn.addEventListener("click", pickTeams);

    startMatchBtn.addEventListener("click", startMatch);

    halfTimeBtn.addEventListener("click", halfTime);

    secondHalfBtn.addEventListener("click", secondHalf);

    fullTimeBtn.addEventListener("click", fullTime);
    








    teamOnePassBtn.addEventListener("click", handlePass1);

    teamTwoPassBtn.addEventListener("click", handlePass2);

    teamOneGoalBtn.addEventListener("click", handleGoal1);

    teamTwoGoalBtn.addEventListener("click", handleGoal2);