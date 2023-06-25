var container = document.getElementById("high-scores-list");
var clearBtn = document.getElementById("clear-btn")



   
function viewHighScores(){
    
    var scoresArr = sessionStorage.getItem("scores");
    var scores = scoresArr ? JSON.parse(scoresArr) : [];
    
  

   if (scores.length === 0){
    container.textContent = "No high scores yet.";
       return;
    }

    scores.sort (function(a, b) {
        return b.score - a.score;
    });

    var topScores = scores.slice(0, 10);

  

    for (i = 0; i < topScores.length; i++) {
        var eachScore = document.createElement("li");
        eachScore.innerHTML = scores[i].Initials + " : " + scores[i].score;
        container.appendChild(eachScore);
  
   }
  

  }

  viewHighScores();

  clearBtn.addEventListener("click", function() {
     localStorage.clear()
  })