// add const variables for timer element, question element, answer choices, final score, initials element, high scores, and random question shufle
const timerEl = document.getElementById('timer');
const questionEl = document.getElementById('question');
const ans1 = document.getElementById('ans1');
const ans2 = document.getElementById('ans2');
const ans3 = document.getElementById('ans3');
const ans4 = document.getElementById('ans4');
const finalScoreEl = document.getElementById('final-score');
const initialsEl = document.getElementById('initials');
const highScoresListEl = document.getElementById('highscores-list')
const shuffleQuestions = shuffleQues();

// add let variables for timer, score, question and final score
let timeRem = 75;
let currentScore = 0;
let currentQues = -1;
let finalScore;

// create function to move thru divs
function nextDiv(current, next) {
    document.getElementById(current).classList.add('hide');
    document.getElementById(next).removeAttribute('class');
};

// start game function to start timer and queue first question
function startQuiz() {
    nextDiv('start-quiz', 'question-bank');
    nextQuestion();
    startTimer();

};

// set up timer function
function startTimer() {
    timerEl.textContent = timeRem;
    let timerInterval = setInterval(
        () => {
            timeRem--;
            timerEl.textContent = timeRem;
            if (timeRem <= 0) {
                clearInterval(timerInterval);
                gameOver();
            }
        }, 1000);
};

// set up question cycle function
// setup correct vs incorrect
// set up end quiz and score display
// set up initials entry logged in local storage