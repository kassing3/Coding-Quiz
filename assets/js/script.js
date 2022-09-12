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


const highScoreInitialsInput = document.getElementById('initials')
const highScoreNumInput = document.getElementById('message-score')

const highScoreInitials= document.getElementById('initials-result')
const highScoreResult = document.getElementById('score')



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
        question: "____ is a container of data at a that is stored within the computer's memory.",
        answer: "Variable",
        options: ["Variable", "Console", "Element", "Value"]
    },

    {questionNumb: 5,
        question: "Which logical operator check two values and returns true if both values are truth?",
        answer: "&&",
        options: ["!", "||", "//", "&&"]
    },

    {questionNumb: 6,
        question: "What is a function called that do NOT have a name value?",
        answer: "Anonymous Functions",
        options: ["Undefined Function", "Anonymous Functions", "Arrow Functions", "Expressions"]
    },

    {questionNumb: 7,
        question: "A function found in the ___ scope, can be used anywhere in the program.",
        answer: "Global",
        options: ["Local", "Universe", "Data", "Global"]
    },

    {questionNumb: 8,
        question: "Elements in an array are arrange by ___ values.",
        answer: "Index",
        options: ["Method", "Position", "Index", "Key"]
    },

    {questionNumb: 9,
        question: "JavaScript arrays are ___, which means the value they contain can change.",
        answer: "Mutable",
        options: ["Global", "Local", "Constant", "Mutable"]
    },

    {questionNumb: 10,
        question: "Which operator can be used to invert a Boolean Value?",
        answer: "!",
        options: ["!", "||", "//", "&&"]
    },
];

// QUIZ CODE

let timeLeft = 60;
let index = 0;
let score = 0;

function setTimer() {
    let timerInterval = setInterval(function() {
        timeLeft--;
        countdown.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval)
        };
    }, 1000);
};

function quizEnd() {
    clearInterval(timerInterval);
    resultsSection.classList.remove('hidden');
    quizSection.classList.add('hidden');
    highScoreNumInput.textContent = score;
    highScoreReport.highScoreNum.push(score);
    localStorage.setItem('score', JSON.stringify(score));
};


function showQuestions() {
    let currentQuestion = questionsObject[index];
    let questionEl = document.getElementById('question');
    questionEl.textContent = currentQuestion.question;

    choices.innerHTML = '';

    for (var i = 0; i < currentQuestion.options.length; i++) {
        var option = currentQuestion.options[i];
        var optionNode = document.createElement('button');
        optionNode.setAttribute('class', 'choices');
        optionNode.setAttribute('value', option);
        optionNode.textContent = option;
        choices.appendChild(optionNode);
    }

    choices.addEventListener('click', questionClick);


};

function questionClick(event) {
    var buttonEl = event.target;

    if (!buttonEl.matches('.choices')) {
        return;
    };

    if (buttonEl.value !== questionsObject[index].answer) {
        timeLeft -= 5;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
        score -= 5;
        console.log(score);
        buttonEl.style.backgroundColor = 'red';
    } else {
        buttonEl.style.backgroundColor = 'green';
        score += 10;
        console.log(score);
    };

};

function nextQuestion (event) {

}



// optionNode.addEventListener('click', questionClick());

// nextBtn.addEventListener('click', nextQuestion);
//    function showQuestions () {
//     question.textContent = questionsObject[index].question;
    
//     for (let i = 0; i < 4; i++) {
//         let choiceEl= document.createElement('li');
//         choiceEl.textContent = questionsObject[index].options[i];
//         choiceEl.classList.add('choices');
//         choices.appendChild(choiceEl);
//         choiceEl.addEventListener('click', function(event) {
//             if (choiceEl.textContent === questionsObject[index].answer) {
//                 choiceEl.style.backgroundColor = 'green';
//                 score = score + 5;
//                 console.log(score);
//             } else {
//                 choiceEl.style.backgroundColor = 'red';
//                 if (score > 0) {
//                     score = score - 5;
//                     console.log(score);
//                 };  
//                 timeLeft = timeLeft - 5;
//             };
//     })};
//     index++;

//     nextBtn.addEventListener('click', nextQuestion);

//     // if (timeLeft <= 0 || index === questionsObject.length) {
//     //     quizEnd();
//     // } else {
//     //     nextQuestion();
//     // };
//    };

   
   



//  function nextQuestion() {

//     if (choices.hasChildNodes()) {
//         choices.innerHTML = '';
        
//         showQuestions();
//     } 
    
//     // while (choices.hasChildNodes()) {
//     //     choices.removeChild(choices.lastChild);
//     // };
//     // index++
//     // showQuestions();
    
// };
    


function startGame(event) {
    instructSection.classList.add('hidden');
    quizSection.classList.remove('hidden');

    showQuestions();
    setTimer();
};


startBtn.addEventListener('click', startGame);


// HIGH SCORE CODE

let highScoreReport = {
    highScoreInt: [],
    highScoreNum:[]
};


function showHighScore() {
    instructSection.classList.add('hidden');
    quizSection.classList.add('hidden');
    highScoresSection.classList.remove('hidden');

    for (let i = 0; i < highScoreReport.highScoreInt.length; i++) {
        for (let j = 0; j < highScoreReport.highScoreInt.length; j++ ) {
            let int = highScoreReport.highScoreInt[i];
            let num =  highScoreReport.highScoreInt[j];

            let intEl = document.createElement('li');
            intEl.textContent = int;
            highScoreInitials.appendChild(intEl)

            let scoreEl= document.createElement('li');
            scoreEl.textContent = num;
            highScoreResult.appendChild(scoreEl);
        
        };
    };


};

submitBtn.addEventListener("submit", function(event) {
    event.preventDefault();

    localStorage.setItem('initials', JSON.stringify(highScoreInitialsInput.value));
    highScoreReport.highScoreInt.push(highScoreInitialsInput.value);

    

});

// submitBtn.addEventListener('submit', function(event) {
//     event.preventDefault();

//     let highScoreReport = {
//         highScoreInt: [],
//         highScoreNum: [highScoreNumInput.value.trim()],
//     };
//     highScoreReport.highScoreInt.push(highScoreInitialsInput.value)

//     localStorage.setItem("highScoreReport", JSON.stringify(highScoreReport));
// });


// function getHighScores() {
//     instructSection.classList.add('hidden');
//     quizSection.classList.add('hidden');
//     highScoresSection.classList.remove('hidden');

//     let initials = localStorage.getItem("highScoreReport");
//     let scoreLi = document.createElement('li');
//     scoreLi.textContent =  initials;


//     for (let i = 0; i < highScoreReport.highScoreInt.length; i++) {
//         let scoreOutput = highScoreReport.highScoreInt[i];
        
//         let scoreLi = document.createElement('li');
//         scoreLi.textContent =  initials;
//         highScoreInitials.appendChild(scoreEl);
//     }

// };

highScoresbtn.addEventListener('click', showHighScore);
