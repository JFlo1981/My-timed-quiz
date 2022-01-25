// add const variables for timer element, question element, answer choices, final score, initials element, high scores, and random question shufle
const timerEl = document.getElementById('timer');
const questionEl = document.getElementById('question');
const answerOne = document.getElementById('answer-1');
const answerTwo = document.getElementById('answer-2');
const answerThree = document.getElementById('answer-3');
const answerFour = document.getElementById('answer-4');
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
// start game function to start timer and queue first question
// set up timer function
// set up question cyle function
// setup corrct vs incorrect
// set up end quiz and score display
// set up initals entry logged in local storage