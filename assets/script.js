var startbtn = document.getElementById("start-button");
var timeGone = document.getElementById("time-counter");
var quizQuestions = document.getElementById("questions")
var choiceA = document.getElementById("choice-a");
var choiceB = document.getElementById("choice-b");
var choiceC = document.getElementById("choice-c");
var choiceD = document.getElementById("choice-d");

var questionIndex = 0;
var rightAnswers = 0;
var scoreTotal;
var questionNum = 0;



//create a timer using the startTime variable
var startTime = 180;
function setTimer(){
    timerInterval = setInterval(function() {
       startTime--;
       timeGone.textContent = startTime;
     
       if (startTime === 0){
         clearInterval(timerInterval);

         if (questionsIndex <questions.length -1){
            endGame();
         }

          
       }

   }, 1000);
}





startbtn.addEventListener("click", function()
{
setTimer()
});

// Questions for quiz
var questions = [
    {
     question: "What is the correct way to write an array in JavaScript?",
     possibleAnswers:["a. var cats = 'calico', 'siamese', 'maine coon', 'persian'",
     "b. var = ['calico', 'siamese', 'maine coon', 'persian']", 
     "c. var = calico, siamese, maine coon, persian",
     "d. var = 1 = calico, 2 = siamese, 3 = maine coon, 4 = persian"],
     correctAnswer: "b. var = ['calico', 'siamese', 'maine coon', 'persian']",

    },

    {
     question: "Inside what HTML element does the JavaScript go in?",
     possibleAnswers: ["a. <javascript>", "b. <js>", "c. <style>", "d. <script>"],
     correctAnswer: "<d. <script>",
    },

    {
     question: "What does HTML stand for?",
     possibleAnswers: ["a. Hyperlinks Text Markup Language", "b. Home Tool Markup Language",
     "c. Hyper Text Markup Language", "d. Home Text Marker LAnguage"],
     correctAnswer: "c. Hyper Text Markup Language",
   
    },

    {
     question: "Choose the correct HTML element for the largest heading",
     possibleAnswers: ["a. <h1>","b. <head>", "c. <heading>", "d. <h4>"],
     correctAnswer: "a. <h1>",
   
    },

    {
     question: "What does DOM stand for?",
     possibleAnswers: ["a. Document Object Model", "b. Document Objective Model", 
     "c. Document Object Module", "d. Dogs Obey Mermaids"],
     correctAnswer: "a. Document Object Model",
   
    },

    {
     question: "Which type of CSS holds the highest priority?",
     possibleAnswers: ["a. Inline", "b. External", "c. Internal", "d. All have equal priority"],
     correctAnswer: "a. Inline",
   
    },

    {
     question: "How do we add comments in CSS?",
     possibleAnswers: ["a. //comment", "b. <!comment>", "c. /*comment*/", "d. <comment/>"],
     correctAnswer:"c. /*comment*/",
   
    },

    {
     question: "Which one of these is a positioning property of CSS?",
     possibleAnswers: ["a. Sticky", "b. Stationary", "c. Relational", "d. Fixated"],
     correctAnswer: "a. Sticky",
   
    },

    {
     question: "In DOM, all the properties, methods, and events that are available to a web developer for manipulating and creating web pages are organized into:",
     possibleAnswers:["Tables", "Objects", "Classes", "Modules"], 
     correctAnswer: "b. Objects",
   
    },

    {
     question: "The 'function' and 'var' are known as:",
     possibleAnswers: ["a. Data types", "b. Keywords", "c. Elementals", "d. Declaration statements"],
     correctAnswer:  "d. Declaration statements", 
   
    },
]

function startQuiz() {
    rotateQuestions();
}

function rotateQuestions(){
    quizQuestions.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].possibleAnswers[0];
    choiceB.textContent = questions[questionIndex].possibleAnswers[1];
    choiceC.textContent = questions[questionIndex].possibleAnswer[2];
    choiceD.textContent = questions[questionIndex].possibleAnswer[3];
}

function checkAnswer (correctAnswer) {
    if (questions[questionIndex].correctAnswer === questions[questionIndex].possibleAnswers[correctAnswer]){
        rightAnswers++;


    }
}