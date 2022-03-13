

var ms = 0;
var sec = 0;
var min = 0;
var quizQuestionsIndex = 0;
var timerId;
var timeCount = 0;
var passCount1 = 1;
var passCount2 = 1;
var goalCount1 = 1;
var goalCount2 = 1;



// HTML Elements

// var timerEl2 = document.getElementById("time2");
var questionTextEl = document.getElementById("question-text");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById('choices');

var timerEl2 = document.getElementById("time2");
var timerEl = document.getElementById("time");
var teamHolderEl = document.getElementById("teamHolder");
var passElOne = document.getElementById("pass1");
var passElTwo = document.getElementById("pass2");
var goalElOne = document.getElementById("goal1");
var goalElTwo = document.getElementById("goal2");


var awayMsg = document.getElementById("question-text");

var awayTeam = document.getElementById("away22");
var homeTeam = document.getElementById("home22");
var homeTwo = document.getElementById("home23");
var homeThree = document.getElementById("home24");
var awayThree = document.getElementById("away24");


var startScreenEl = document.getElementById("start-screen");
var pickTeamsEl = document.getElementById("pick-screen1");
var pickAwayEl = document.getElementById("pick-screen2");
var passCountEl = document.getElementById("passCount");
var halftimeEl = document.getElementById("half-time");
var passCount2El = document.getElementById("passCount2");
var fullTimeEl = document.getElementById("full-time");


var pickTeamBtn = document.getElementById("pick");

var startMatchBtn = document.getElementById("start");
var halfTimeBtn = document.getElementById("halftiz");
var secondHalfBtn = document.getElementById("halftiz2");
var fullTimeBtn = document.getElementById("fulltiz");





var firstHalfPass = document.getElementById("htPassH");
var homeTeamEl = document.getElementById("home1");
var awayTeamEl = document.getElementById("away1");
var chooseAwayBtn = document.getElementById("chooseAway");

var chelseaBtn = document.getElementById("chelsea");






var teamOnePassBtn = document.getElementById("team1p");
var teamTwoPassBtn = document.getElementById("team2p");
var teamOneGoalBtn = document.getElementById("team1g");
var teamTwoGoalBtn = document.getElementById("team2g");

// var chelseaBtn = document.getElementById("chelsea")




var startScreenEl = document.getElementById("start-screen");
var pickTeamsEl = document.getElementById("pick-screen1");
var pickAwayEl = document.getElementById("pick-screen2");
var passCountEl = document.getElementById("passCount");
var halftimeEl = document.getElementById("half-time");
var passCount2El = document.getElementById("passCount2");
var fullTimeEl = document.getElementById("full-time");

const clubs = ["Chelsea", "Liverpool", "Manchester City", "Manchester United", "Leeds United", "Everton", "Aston Villa", "Brighton & Hove Albion", "Arsenal", "Tottenham"];
let clubEl = document.getElementById("clubs");
let clubEl2 = document.getElementById("clubs2");



// MAIN PROCESS
function pickTeams() {
    startScreenEl.setAttribute("class", "hide");
    // teamHolderEl.setAttribute("class", "show");
    pickTeamsEl.setAttribute("class", "show");


    for (let i = 0; i < clubs.length; i++) {
    function picked() {
        console.log(`${clubs[i]} bullllockkkss picked`);
        homeTeam.textContent = `${clubs[i]}`;
    };

    var buttonEl = document.createElement('button');
    console.log(clubs[i]);
    buttonEl.setAttribute("value", clubs[i]);
    buttonEl.textContent = clubs[i];
    clubEl.appendChild(buttonEl);
    buttonEl.addEventListener("click", picked);
};
};


function chooseAway() {;
    if (homeTeam.textContent) {
    // homeTeam.textContent;
    pickTeamsEl.setAttribute("class", "hide");
    pickAwayEl.setAttribute("class", "show");
    homeTwo.textContent = `${homeTeam.textContent} is Home`;
    for (let i = 0; i < clubs.length; i++) {
        function picked() {
            console.log(`${clubs[i]} bullllockkkss picked`);
            awayTeam.textContent = `${clubs[i]}`;
        };
    
        var buttonEl = document.createElement('button');
        console.log(clubs[i]);
        buttonEl.setAttribute("value", clubs[i]);
        buttonEl.textContent = clubs[i];
        clubEl2.appendChild(buttonEl);
        buttonEl.addEventListener("click", picked);
    };
    } else {
        alert("You must select a club!!");
    };
}

    
function startMatch() {
    let teamSelected = `${awayTeam.textContent}`;
    function sameTeam() {
        if (homeTeam.textContent === teamSelected) {
            alert(`${homeTeam.textContent} can't play themselves!! Pick a different team!!!`);
            e.preventDefault();
        }
    }
    sameTeam();
    pickAwayEl.setAttribute("class", "hide");
    passCountEl.setAttribute("class", "show");
    console.log("I have been clicked!!!");
    // clubEl2.textContent = `${awayTeam.textContent}`;

    function startTime() {
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
        homeThree.textContent = `${homeTeam.textContent}`;
        awayThree.textContent = `${awayTeam.textContent}`;
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
    firstHalfPass.textContent = passCount1;

}

function secondHalf() {
    halftimeEl.setAttribute("class", "hide");
    passCount2El.setAttribute("class", "show");
    // console.log(passCount1);
    function startTime(flag) {
    
        timeoutId2 = setTimeout(function() {
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
            if (sec < 10) {
                sec = '0' + sec;
            }
            if (min < 10) {
                min = '0' + min;
            }
     
            timerEl2.innerHTML = min + ':' + sec;
     
            // calling start() function recursivly to continue stopwatch
            startTime();
     
        }, 20); // setTimeout delay time 10 milliseconds
    };
    startTime();
}

function fullTime() {
    passCount2El.setAttribute("class", "hide");
    fullTimeEl.setAttribute("class", "show");




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

    chooseAwayBtn.addEventListener("click", chooseAway);

    startMatchBtn.addEventListener("click", startMatch);

    halfTimeBtn.addEventListener("click", halfTime);

    secondHalfBtn.addEventListener("click", secondHalf);

    fullTimeBtn.addEventListener("click", fullTime);

    // chelseaBtn.addEventListener("click", pickChelsea);
    






    // choicesEl.onclick = homePick;

    teamOnePassBtn.addEventListener("click", handlePass1);

    teamTwoPassBtn.addEventListener("click", handlePass2);

    teamOneGoalBtn.addEventListener("click", handleGoal1);

    teamTwoGoalBtn.addEventListener("click", handleGoal2);