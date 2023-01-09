//Part of the code adapted from James Q Quick tutorial video. See Readme file for full credit.
// ... helped me to connect js files together
import { questions } from './library.js'

const question = document.getElementById('question');
const options = Array.from(document.getElementsByClassName('answer-option'));
let questionIndex = 0;
const MAX_Questions = 5;

let currentQuestion = {};
let acceptAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// start and running the game and generating questions for quiz
function runGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = questions;
    console.log(availableQuestions);
    startNewQuiz();
}

function startNewQuiz() {

    questionCounter++;
    let questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    
}

runGame();