

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
var passCount3 = 1;
var passCount4 = 1;
var goalCount3 = 1;
var goalCount4 = 1;



// HTML Elements

// var timerEl2 = document.getElementById("time2");
var questionTextEl = document.getElementById("question-text");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById('choices');

var timerEl2 = document.getElementById("time2");
var timerEl = document.getElementById("time");
// var teamHolderEl = document.getElementById("teamHolder");

// first half stats
var passElOne = document.getElementById("pass1");
var passElTwo = document.getElementById("pass2");
var goalElOne = document.getElementById("goal1");
var goalElTwo = document.getElementById("goal2");

// second half stats
var passElThree = document.getElementById("pass3");
var passElFour = document.getElementById("pass4");
var goalElThree = document.getElementById("goal3");
var goalElFour = document.getElementById("goal4");


var awayMsg = document.getElementById("question-text");

var awayTeam = document.getElementById("away22");
var homeTeam = document.getElementById("home22");
var awayTeam = document.getElementById("away22");
var homeTwo = document.getElementById("home23");
var homeThree = document.getElementById("home24");
var awayThree = document.getElementById("away24");
var homeFour = document.getElementById("home25");
var awayFour = document.getElementById("away25");
var homeFive = document.getElementById("home26");
var awayFive = document.getElementById("away26");
var homeSix = document.getElementById("home27");
var awaySix = document.getElementById("away27");


var startScreenEl = document.getElementById("start-screen");
var teamHolderEl = document.getElementById("team-holder");
var pickTeamsEl = document.getElementById("pick-screen1");
var pickAwayEl = document.getElementById("pick-screen2");
var passCountEl = document.getElementById("passCount");
var halftimeEl = document.getElementById("half-time");
var passCount2El = document.getElementById("passCount2");
var fullTimeEl = document.getElementById("full-time");


var pickTeamBtn = document.getElementById("pick");

var startMatchBtn = document.getElementById("start");
var backBtn = document.getElementById("back");


var halfTimeBtn = document.getElementById("halftiz");
var secondHalfBtn = document.getElementById("halftiz2");
var fullTimeBtn = document.getElementById("fulltiz");
var logGameBtn = document.getElementById("logGame");





var firstHalfPass = document.getElementById("htPassH");
var firstHalfPassA = document.getElementById("htPassA");
var firstHalfGoal = document.getElementById("htGoalH");
var firstHalfGoalA = document.getElementById("htGoalA");
var secHalfPass = document.getElementById("ftPassH");
var secHalfPassA = document.getElementById("ftPassA");
var secHalfGoal = document.getElementById("ftGoalH");
var secHalfGoalA = document.getElementById("ftGoalA");







var homeTeamEl = document.getElementById("home1");
var awayTeamEl = document.getElementById("away1");
var chooseAwayBtn = document.getElementById("chooseAway");

var chelseaBtn = document.getElementById("chelsea");






var teamOnePassBtn = document.getElementById("team1p");
var teamTwoPassBtn = document.getElementById("team2p");
var teamOneGoalBtn = document.getElementById("team1g");
var teamTwoGoalBtn = document.getElementById("team2g");
var teamThreePassBtn = document.getElementById("team3p");
var teamFourPassBtn = document.getElementById("team4p");
var teamThreeGoalBtn = document.getElementById("team3g");
var teamFourGoalBtn = document.getElementById("team4g");

// var chelseaBtn = document.getElementById("chelsea")






const clubs = ["Chelsea", "Liverpool", "Manchester City", "Manchester United", "Leeds United", "Everton", "Aston Villa", "Brighton & Hove Albion", "Arsenal", "Tottenham Hotspur", "West Ham United", "Wolverhampton Wanderers", "Crystal Palace", "Southampton", "Brentford", "Burnley", "Norwich City", "Watford", "Newcastle United", "Leicester City"];
let clubEl = document.getElementById("clubs");
let clubEl2 = document.getElementById("clubs2");



// MAIN PROCESS
function pickTeams() {
    startScreenEl.setAttribute("class", "hide");
    pickTeamsEl.setAttribute("class", "show");


    for (let i = 0; i < clubs.length; i++) {
        function picked() {
            let teamPicked = `${clubs[i]}`;
            if (teamPicked) {
                console.log(`${clubs[i]} bullllockkkss picked`);
                homeTeam.textContent = `${clubs[i]}`;
                chooseAway();
            };

        };

        var buttonEl = document.createElement('button');
        console.log(clubs[i]);
        buttonEl.setAttribute("value", clubs[i]);
        buttonEl.textContent = clubs[i];
        clubEl.appendChild(buttonEl);
        buttonEl.setAttribute("id", "cloob");
        buttonEl.addEventListener("click", picked);
    };
};

function repickHomeTeam() {
    pickAwayEl.setAttribute("class", "hide");
    pickTeamsEl.setAttribute("class", "show");
    preventDefault();
}


function chooseAway() {
    ;
    if (homeTeam.textContent) {
        // homeTeam.textContent;
        pickTeamsEl.setAttribute("class", "hide");
        pickAwayEl.setAttribute("class", "show");
        homeTwo.textContent = `${homeTeam.textContent} is Home`;
        for (let i = 0; i < clubs.length; i++) {
            function picked() {
                console.log(`${clubs[i]} has been picked as away team`);
                awayTeam.textContent = `${clubs[i]}`;
                startMatch();
            };

            var buttonEl = document.createElement('button');
            // console.log(clubs[i]);
            buttonEl.setAttribute("value", clubs[i]);
            buttonEl.textContent = clubs[i];
            clubEl2.appendChild(buttonEl);
            buttonEl.setAttribute("id", "cloob");
            buttonEl.addEventListener("click", picked);
        };
    } else {
        alert("You must select a club!!");
    };


}










function startMatch() {
    if (awayTeam.textContent) {
        function sameTeam() {
            let teamSelected = `${awayTeam.textContent}`;
            if (homeTeam.textContent === teamSelected) {
                alert(`${homeTeam.textContent} can't play themselves!! Pick a different team!!!`);
                e.preventDefault();
            };
        };
        sameTeam();
    } else if (!awayTeam.textContent) {
        alert("You must select an Away Side!!!");
        e.preventDefault();
    };


    pickAwayEl.setAttribute("class", "hide");
    passCountEl.setAttribute("class", "show");
    console.log("I have been clicked!!!");
    // clubEl2.textContent = `${awayTeam.textContent}`;
    homeThree.textContent = `${homeTeam.textContent}`;
    awayThree.textContent = `${awayTeam.textContent}`;


    let seconds = 0;
    let minutes = 0;

    // Define vars to hold display value for
    let displaySeconds = 0;
    let displayMinutes = 0;




    function startTime() {

        seconds++;
        console.log("started");

        if (seconds / 60 === 1) {
            seconds = 0;
            minutes++;
    }
        if (minutes / 60 === 1) {
            minutes = 0;
    }
        

        if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    }
        else{
        displaySeconds = seconds;
    }

        if (minutes < 10) {
        displayMinutes = "0" + minutes.toString()
    }

    timerEl.textContent = displayMinutes + ':' + displaySeconds;
    }
    
    window.setInterval( startTime, 1000 );
}

    function halfTime() {
        passCountEl.setAttribute("class", "hide");
        halftimeEl.setAttribute("class", "show");
        console.log(passCount1);
        homeFour.textContent = `${homeTeam.textContent}`;
        awayFour.textContent = `${awayTeam.textContent}`;
        firstHalfPass.textContent = passCount1 - 1;
        firstHalfPassA.textContent = passCount2 - 1;
        firstHalfGoal.textContent = goalCount1 - 1;
        firstHalfGoalA.textContent = goalCount2 - 1;


    }

    function secondHalf() {
        halftimeEl.setAttribute("class", "hide");
        passCount2El.setAttribute("class", "show");
        // console.log(passCount1);
        function startTime(flag) {

            timeoutId2 = setTimeout(function () {
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

                homeFive.textContent = `${homeTeam.textContent}`;
                awayFive.textContent = `${awayTeam.textContent}`;
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
        homeSix.textContent = `${homeTeam.textContent}`;
        awaySix.textContent = `${awayTeam.textContent}`;
        secHalfPass.textContent = passCount1 + passCount3 - 2;
        secHalfPassA.textContent = passCount2 + passCount4 - 2;
        secHalfGoal.textContent = goalCount1 + goalCount3 - 2;
        secHalfGoalA.textContent = goalCount2 + goalCount4 - 2;




    }


    function saveScores() {
        console.log('saveScores');

    }


    function logGame() {
        fullTimeEl.setAttribute("class", "hide");
        // logGameEl.setAttribute("class", "show");

        console.log(homeTeam.textContent);
        console.log(awayTeam.textContent);
        console.log(passCount3);
        console.log(goalCount3);
        saveScores();
        // `${homeTeam.textContent}`
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

    function handlePass3() {
        passElThree.textContent = passCount3++;
    }

    function handlePass4() {
        passElFour.textContent = passCount4++;
    }

    function handleGoal3() {
        goalElThree.textContent = goalCount3++;
    }

    function handleGoal4() {
        goalElFour.textContent = goalCount4++;
    }


    pickTeamBtn.addEventListener("click", pickTeams);

    startMatchBtn.addEventListener("click", startMatch);

    halfTimeBtn.addEventListener("click", halfTime);

    secondHalfBtn.addEventListener("click", secondHalf);

    fullTimeBtn.addEventListener("click", fullTime);

    logGameBtn.addEventListener("click", logGame);

    // chelseaBtn.addEventListener("click", pickChelsea);

    backBtn.addEventListener("click", repickHomeTeam);





    // choicesEl.onclick = homePick;

    teamOnePassBtn.addEventListener("click", handlePass1);

    teamTwoPassBtn.addEventListener("click", handlePass2);

    teamOneGoalBtn.addEventListener("click", handleGoal1);

    teamTwoGoalBtn.addEventListener("click", handleGoal2);

    teamThreePassBtn.addEventListener("click", handlePass3);

    teamFourPassBtn.addEventListener("click", handlePass4);

    teamThreeGoalBtn.addEventListener("click", handleGoal3);

    teamFourGoalBtn.addEventListener("click", handleGoal4);