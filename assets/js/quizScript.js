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
function letsPlay() {
    nextDiv('start-quiz', 'question-bank');
    cycleQuestion();
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
function cycleQuestion() {
    currentQues++;
    if (currentQues === shuffleQuestions.length) {
        timeRem = 0;
        gameOver();
    } else {
        questionEl.textContent = shuffleQuestions[currentQues].question;
        let arr = [ans1, ans2, ans3, ans4];
        let i = 0;
        arr.forEach(element => {
            element.textContent = shuffleQuestions[currentQues].answerArray[i].answer;
            i++
        }, i);

    }
};
// setup correct vs incorrect
function handleAnswerChoice(event) {
    let correctChoice = getCorrectChoice(currentQues);
    // if correct =10 and green indicator
    if(event.target.textContent === correctChoice) {
        currentScore += 10;
        event.target.classList.add('correct')
        // if wrong -10 and red indicator
    } else {
        timeRem -= 10;
        event.target.classList.add('wrong')
    }
    // pause before new question
    setTimeout(
        () => {
            event.target.className = 'btn';
            cycleQuestion();
        }, 500);
};

function getCorrectChoice(currentQues) {
    let arr = shuffleQuestions[currentQues].answerArray;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].correct) {
            return arr[j].answer
        }
    }
};

// set up end quiz and score display
function gameOver () {
    timerEl.textContent = 0;
    nextDiv('question-bank', 'scores-page');
    finalScore = currentScore;
    finalScoreEl.textContent = finalScore;
}
// set up initials entry logged in local storage
function handleSubmit() {
    let initials = initialsEl.value;
    let highScoreList = JSON.parse(localStorage.getItem('highScores')) || [];
    highScoreList.push({ initials: initials, score: finalScore});
    // sort array by highest score
    highScoreList = highScoreList.sort((current, next) => {
        if (current.score < next.score) {
            return 1
        } else if (current.score > next.score) {
            return -1
        } else {
            return 0
        }
    });
    
    // send array to storage and go to scores page
    localStorage.setItem('highScores', JSON.stringify(highScoreList))
    window.location.href = './scores.html';
};