//Part of the code adapted from James Q Quick tutorial video. See Readme file for full credit.
// ... helped me to connect js files together
import { questions } from './library.js'

const question = document.getElementById('question');
const options = Array.from(document.getElementsByClassName('answer-option'));
let questionIndex = 0;
const MAX_QUESTIONS = 5;

let currentQuestion = {};
let acceptAnswer = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// start and running the game and generating questions for quiz
function runGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = questions;
    console.log(availableQuestions);
    getNextQuestion();
}


/*displays random question from the library and answer options for each question and removes
from array question that have been asked */
function getNextQuestion() {

    questionCounter++;
    let questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

//converting to arrow function was suggested by Gitpod workspace 
    options.forEach((option) => {
        const number = option.dataset['number'];
        option.innerText = currentQuestion['option' + number];
    });
    
    availableQuestions.splice(questionIndex, 1);

    acceptAnswer = true;
};

/*
function checkAnswer(options) {
    for (button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
            let gameType = this.getAttribute("data-type");
            runGame(gameType);
        }
    }
}

runGame();