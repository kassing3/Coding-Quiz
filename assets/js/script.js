const startBtn = document.getElementById('start-btn')
const highScoresbtn = document.getElementById('high-scores-btn')
const nextBtn = document.getElementById('next-btn')
const submitBtn = document.getElementById('submit-btn')

const instructSection = document.querySelector('#instructions')
const quizSection = document.getElementById('quiz-game')
const resultsSection = document.getElementById('results')
const highScoresSection = document.getElementById('high-scores')

const countdown = document.getElementById('countdown')
const question = document.getElementById('question')
const choices = document.querySelector('.choices-list')
const highScoreInitial = document.getElementById('initials')
const highScoreResult = document.getElementById('message-score')



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
        question: "What is a function called that do NOT have a name value?",
        answer: "Anonymous Functions",
        options: ["Undefined Function", "Anonymous Functions", "Arrow Functions", "Expressions"]
    },
];

function setTimer() {
    let timeLeft = 60;
    let timerInterval = setInterval(function() {
        timeLeft--;
        countdown.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            resultsSection.classList.remove('hidden');
            quizSection.classList.add('hidden');
        };

    }, 1000);
};



function startGame(event) {
    instructSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    showQuestions();
    setTimer();
};

let index = 0;
let score = 0;

function showQuestions() {
    question.textContent = questionsObject[index].question;
    
    for (let i = 0; i < 4; i++) {
        let choiceEl = document.createElement('li');
        choiceEl.textContent = questionsObject[index].options[i];
        choiceEl.classList.add('choices');
        choices.appendChild(choiceEl);

        choiceEl.addEventListener('click', function() {
            if (choiceEl.textContent === questionsObject[index].answer) {
                choiceEl.style.backgroundColor = 'green';
                score = score + 5
                console.log(score);
            } else {
                choiceEl.style.backgroundColor = 'red';
                if (score > 0) {
                    score = score - 5;
                    console.log(score);
                };  
            };  
        });
    };

    nextBtn.addEventListener('click', function () {
        while (choices.hasChildNodes()) {
            choices.removeChild(choices.lastChild);
            };
        index++;
        showQuestions();
    });

    highScoreResult.textContent = score;

 };

 

startBtn.addEventListener('click', startGame);

// submitBtn.addEventListener('click', function () {   
//     let savedInitials = initials.value;
//     localStorage.setItem("savedInitials", JSON.stringify(savedInitials));
//     localStorage.setItem(score, JSON.stringify(score));
// });

// highScoresbtn.addEventListener('click' function() {
//     instructSection.classList.add('hidden');
//     highScoresSection.classList.remove('hidden')
// })
