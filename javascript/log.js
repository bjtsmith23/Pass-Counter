function displayStats() {
    
        console.log('displayStats');


        var highscores = JSON.parse(localStorage.getItem('scores'));
    
        
    
        for (var i = 0; i < highscores.length; i++ ) {
            var liEl = document.createElement('li');
            liEl.textContent = highscores[i].score;
    
            document.getElementById('highscores').appendChild(liEl);
        }
    }
    
    displayStats();
