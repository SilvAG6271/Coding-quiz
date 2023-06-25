//variables created to be used
var startbtn = document.getElementById("start-button");
var timeGone = document.getElementById("time-counter");
var quizQuestions = document.getElementById("questions")
var choiceA = document.getElementById("choice-a");
var choiceB = document.getElementById("choice-b");
var choiceC = document.getElementById("choice-c");
var choiceD = document.getElementById("choice-d");
var endScore = document.getElementById("end-score");
var playerInfo = document.getElementById("player-info");
var playerInitials = document.getElementById("player-intls");
var initialBtn = document.getElementById("submitInitialBtn")
var scoreList = document.getElementById("score-list");
var choices = document.getElementById("choices");
var determineAnswer = document.getElementById("check-answer");
var endText = document.getElementById("end-text");
var highScorebtn = document.getElementById("high-score-btn");
var info = document.getElementById("info");

var questionIndex = 0;
var rightAnswers = 0;
var scoreTotal;
var questionNum = 0;
var startTime = 180;

// Questions for quiz
var questions = [
    {
     question: "What is the correct way to write an array in JavaScript?",
     possibleAnswers:["a. var cats = 'calico', 'siamese', 'maine coon', 'persian'",
     "b. var = ['calico', 'siamese', 'maine coon', 'persian']", 
     "c. var = calico, siamese, maine coon, persian",
     "d. var = 1 = calico, 2 = siamese, 3 = maine coon, 4 = persian"],
     correctAnswer: " b. var = ['calico', 'siamese', 'maine coon', 'persian']",

    },

    {
     question: "Inside what HTML element does the JavaScript go in?",
     possibleAnswers: ["a. <javascript>", "b. <js>", "c. <style>", "d. <script>"],
     correctAnswer: " d. <script>",
    },

    {
     question: "What does HTML stand for?",
     possibleAnswers: ["a. Hyperlinks Text Markup Language", "b. Home Tool Markup Language",
     "c. Hyper Text Markup Language", "d. Home Text Marker LAnguage"],
     correctAnswer: " c. Hyper Text Markup Language",
   
    },

    {
     question: "Choose the correct HTML element for the largest heading",
     possibleAnswers: ["a. <h1>","b. <head>", "c. <heading>", "d. <h4>"],
     correctAnswer: " a. <h1>",
   
    },

    {
     question: "What does DOM stand for?",
     possibleAnswers: ["a. Document Object Model", "b. Document Objective Model", 
     "c. Document Object Module", "d. Dogs Obey Mermaids"],
     correctAnswer: " a. Document Object Model",
   
    },

    {
     question: "Which type of CSS holds the highest priority?",
     possibleAnswers: ["a. Inline", "b. External", "c. Internal", "d. All have equal priority"],
     correctAnswer: " a. Inline",
   
    },

    {
     question: "How do we add comments in CSS?",
     possibleAnswers: ["a. //comment", "b. <!comment>", "c. /*comment*/", "d. <comment/>"],
     correctAnswer:" c. /*comment*/",
   
    },

    {
     question: "Which one of these is a positioning property of CSS?",
     possibleAnswers: ["a. Sticky", "b. Stationary", "c. Relational", "d. Fixated"],
     correctAnswer: " a. Sticky",
   
    },

    {
     question: "In DOM, all the properties, methods, and events that are available to a web developer for manipulating and creating web pages are organized into:",
     possibleAnswers:["a. Tables", "b. Objects", "c. Classes", "d. Modules"], 
     correctAnswer: " b. Objects",
   
    },

    {
     question: "The 'function' and 'var' are known as:",
     possibleAnswers: ["a. Data types", "b. Keywords", "c. Elementals", "d. Declaration statements"],
     correctAnswer:  " d. Declaration statements", 
   
    },
];

//function to reset quiz to initial state
function resetQuiz() {
    questionIndex = 0;
    rightAnswers = 0;
    startTime = 120;
    playerInitials.textContent = "";
   
    startbtn.setAttribute('style', 'display:block');
    endScore.setAttribute('style', 'visibility:hidden');
    quizQuestions.setAttribute('style', 'display:none');
    choices.setAttribute('style', 'visibility:hidden');
    info.setAttribute('style', 'display:block');
    endText.setAttribute('style', 'visiblity:hidden');
    playerInfo.setAttribute('style', 'visibility:hidden');
   

    
         clearInterval(timerInterval);
         timeGone.textContent = startTime;
}

//create a timer using the startTime variable
function setQuiz(){
    questionIndex = 0;
    startTime = 120;
    playerInitials.textContent = "";
   
    startbtn.setAttribute('style', 'display:none');
    endScore.setAttribute('style', 'visibility:hidden');
    quizQuestions.setAttribute('style', 'display:block');
    choices.setAttribute('style', 'visibility:visible');
    info.setAttribute('style', 'display:none');
   

    timerInterval = setInterval(function() {
       startTime--;
       timeGone.textContent = startTime;
     
       if (startTime === 0){
         clearInterval(timerInterval);

         if (questionIndex < questions.length -1){
            endGame();
         }

          
       }

   }, 1000);

   startQuiz();
};

function startQuiz() {
    rotateQuestions();
}
//function to rotate through questions 
function rotateQuestions(){
    quizQuestions.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].possibleAnswers[0];
    choiceB.textContent = questions[questionIndex].possibleAnswers[1];
    choiceC.textContent = questions[questionIndex].possibleAnswers[2];
    choiceD.textContent = questions[questionIndex].possibleAnswers[3];
    quizQuestions.setAttribute('style', 'color:white');

if (questionIndex === questions.length - 1) {
    clearInterval(timerInterval);
}

}
/*function created to check if picked answer is correct, send alert to player telling if they 
got question right*/

function checkAnswer (correctAnswer) {
    if (questions[questionIndex].correctAnswer === questions[questionIndex].possibleAnswers[correctAnswer]){
        rightAnswers++;
        determineAnswer.textContent = "Correct";
        determineAnswer.setAttribute('style', 'color:white');
    }
    //subtracts time if wrong answer and alerts user that question is wrong
    else{
        startTime -=15;
        timeGone.textContent = startTime;
        determineAnswer.textContent = "Incorrect. The answer is" + questions[questionIndex].correctAnswer;
        determineAnswer.setAttribute('style', 'color:white');
    }
    //goes through questions until all answered and then ends game
    questionIndex++;


    if (questionIndex<questions.length){
        rotateQuestions();
    } else {
            endGame();
        }
    }
    
    // function to check if answer is correct based upon button pushed
    function pickA() {checkAnswer(0)};
    function pickB() {checkAnswer(1)};
    function pickC() {checkAnswer(2)};
    function pickD() {checkAnswer(3)};

    function endGame() {
        quizQuestions.setAttribute('style', 'display:none');
        choices.setAttribute('style', 'display:none');
        endScore.setAttribute('style', 'display:block');
        endText.setAttribute('style', 'visibility:visible');
        playerInfo.setAttribute('style', 'visibility:visible');
        endScore.textContent = rightAnswers;
    }
   
   
    
   // function to save the high scores
   function highScoreEntry (event) {
        event.preventDefault();
    

     if (playerInitials.value === ""){
        alert("Please enter your initials."); 
        return;
     }
    //cpnvert player input to uppercase
     var initials = playerInitials.value.toUpperCase();
     //get high scores info from local storage
     var savedScores = localStorage.getItem("high scores");
     var scoresArr;

    if (savedScores === null) {
     scoresArr = [];
    } else {
     scoresArr = JSON.parse(savedScores)
   }
   //create object where the names are initials and score
   var playerScore = {
     Initials: initials,
     score: endScore.textContent
    };

   scoresArr.push(playerScore);

   var scoreArrString = JSON.stringify(scoresArr);
   window.localStorage.setItem("high scores", scoreArrString);

  
     }
    //function to push info to high score page so list of initials will show up there
    function pageTwo(){
        var savedScores = localStorage.getItem("high scores");
        var scoresArr = savedScores ? JSON.parse(savedScores) : [];
        sessionStorage.setItem("scores", JSON.stringify(scoresArr));

        window.location.href = "highscores.html";
    }

   //event listener added to pick answer
    startbtn.addEventListener("click", setQuiz )
    choiceA.addEventListener("click", pickA);
    choiceB.addEventListener("click", pickB);
    choiceC.addEventListener("click", pickC);
    choiceD.addEventListener("click", pickD);
    
    //event listener to start highScoreEntry event
    initialBtn.addEventListener("click", function(event){
        highScoreEntry(event);
        resetQuiz();
    });

    

    //event listener to start the view high scores entry event
    highScorebtn.addEventListener("click", pageTwo);
      

  