const startBtn = document.getElementById('start-btn')
const highScoresbtn = document.getElementById('high-scores-btn')
const nextBtn = document.getElementById('next-btn')
const submitBtn = document.getElementById('submit-btn')

const instructSection = document.querySelectorAll('#instructions')
const quizSection = document.getElementById('quiz-game')
const resultsSection = document.getElementById('results')
const highScoresSection = document.getElementById('high-scores')

const countdown = document.getElementById('countdown')
const question = document.getElementById('question')
const choices = querySelectorAll('.choices')
const highScoreInitial = document.getElementById('initials')

function setTimer() {
    let timeLeft = 60;
    let timerInterval = setInterval(function() {
        timeLeft--;
        countdown.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}


let questionsObject = [
    {questionNumb: 1,
        question: "This property returns the number of characters that make up a string:",
        answer: "string.length",
        options: ["console.log", "append", "string.length", "Booleans"]
    },
    {questionNumb: 2,
        question: "Which of the following is NOT a primitive data type?",
        answer: "Object",
        options: ["Boolean", "String", "Object", "Number"]
    },
    {questionNumb: 3,
        question:" Which of the following represents an intentionally absent value?",
        answer: "Undefined",
        options: ["Undefined", "Null", "Error", "False"]
    },
    {questionNumb: 4,
        question: "Which of the following represents an intentionally absent value?",
        answer: "Undefined",
        options: ["Undefined", "Null", "Error", "False"]
    },
    {questionNumb: 5,
        question: "What is a function called that do not have a name value?",
        answer: "Anonymous Functions",
        options: ["Undefined Function", "Anonymous Functions", "Arrow Functions", "Expressions"]
    },
];

function showQuestions(index) {
    question.textContent = questionsObject[index][1];
    index++

} 

function startGame(event) {
    setTimer();
    showQuestions(0);
    instructSection.classList.add('hidden');
    quizSection.classList.remove('hidden');

};

startBtn.addEventListener('click', startGame);


function saveHighScore() {
   let savedInitials = initials.value;
    localStorage.setItem("savedInitials", JSON.stringify(savedInitials));

}