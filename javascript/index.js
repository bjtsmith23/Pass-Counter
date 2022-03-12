// var questions = [
//     {
//         text: "Who is club is at Home in today's Match?",
//         choices: ["Manchester City", "Liverpool", "Chelsea", "Arsenal", "Manchester United", "West Ham United", "Tottenham", "Wolverhampton", "Southampton", "Crystal Palace", "Aston Villa", "Leicester City", "Brighton & Hove", "Newcastle United", "Brentford", "Leeds United", "Everton", "Burnley", "Watford", "Norwich"],
//     },
//     {
//         text: "Which club is the Away side?",
//         choices: ["Manchester City", "Liverpool", "Chelsea", "Arsenal", "Manchester United", "West Ham United", "Tottenham", "Wolverhampton", "Southampton", "Crystal Palace", "Aston Villa", "Leicester City", "Brighton & Hove", "Newcastle United", "Brentford", "Leeds United", "Everton", "Burnley", "Watford", "Norwich"]
//     }
// ]

var ms = 0;
var sec = 0;
var min = 0;
var quizQuestionsIndex = 0;
var timerId;
var timeCount = 0;
// var teamOneP = 0;
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




// MAIN PROCESS
function pickTeams() {
    startScreenEl.setAttribute("class", "hide");
    // teamHolderEl.setAttribute("class", "show");
    pickTeamsEl.setAttribute("class", "show");
   


};

function chooseAway() {
    console.log(`${homeTeam.textContent}`);
    if (homeTeam.textContent) {
    // homeTeam.textContent;
    pickTeamsEl.setAttribute("class", "hide");
    pickAwayEl.setAttribute("class", "show");
    homeTwo.textContent = `${homeTeam.textContent} is the Home Team!!!`;
    } else {
        alert("You must select a squaqq");
    };
}




        

        
    function pickChelsea() {
        var teamSelected = "Chelsea";
        // var choiceValue = event.getAttribute('value');
        // console.log(choiceValue);
        // console.log("Chelsea");
        homeTeam.textContent = teamSelected;

    }

    function pickLiverpool() {

    }

    function pickChelseaA() {
        console.log("Chelsea away");
        var teamSelected = "Chelsea";
        // var choiceValue = event.getAttribute('value');
        // console.log(choiceValue);
        // console.log("Chelsea");
        awayTeam.textContent = teamSelected;

    }
   

    


    
function startMatch() {
    pickAwayEl.setAttribute("class", "hide");
    passCountEl.setAttribute("class", "show");
    console.log("I have been clicked!!!");
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

}

function secondHalf() {
    halftimeEl.setAttribute("class", "hide");
    passCount2El.setAttribute("class", "show");
    // console.log(passCount1);
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
     
            timerEl2.innerHTML = "45" + min + ':' + sec;
     
            // calling start() function recursivly to continue stopwatch
            startTime();
     
        }, 10); // setTimeout delay time 10 milliseconds
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