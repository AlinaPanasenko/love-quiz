
//Tutor helped me to connect js files together
import { questions } from './library.js';

const question = document.getElementById('question');
const options = Array.from(document.getElementsByClassName('answer-option'));
let currentQuestion = {};
let availableQuestions = [];

//Part of the code adapted from James Q Quick tutorial video. See Readme file for full credit.

//Starts and running the game and generating questions for quiz
function runGame() {
    availableQuestions = questions;
    getNextQuestion();
}


/*Displays random question from the library and answer options for it. Then removes said question
from array*/

function getNextQuestion() {

//questionCounter++;
    let questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

//converting to arrow function was suggested by Gitpod workspace 
    options.forEach((option) => {
        const number = option.dataset['number'];
        option.innerText = currentQuestion['option' + number];
    });
    
    availableQuestions.splice(questionIndex, 1);
}

let buttons = document.getElementsByTagName("button");

//Check answer and react with changing collor of clicked button
function checkAnswer(event) {

    //My mentor helped me with this part of the code ("==" instead of "===")
    let correctOption = currentQuestion['answer'];
    const button = event.target;
    if (button.getAttribute("data-number") == correctOption) {
        button.style.backgroundColor = 'green';
        incrementCorrectAnswer();

    } else {
        button.style.backgroundColor = 'red';
        incrementWrongAnswer();
    }

//Timeout to let the user to see what was the right answer to the question
    setTimeout(defaultButtonsColor, 1500);
    countQuestionAnswered();
}

for (let button of buttons) {
    button.addEventListener("click", checkAnswer);
}

/*Return background colour of the button to the default one after the answer check*/

function defaultButtonsColor() {
    for (let buttonColor of buttons){
    buttonColor.style.backgroundColor ='#5A7A98';
  }

    getNextQuestion();
}

/*These parts of the code were taken from the Love Maths project of the Code Institute */

//Gets the current score from the DOM and increments it by 1 
function incrementCorrectAnswer() {

    let oldScore = parseInt(document.getElementById('correct').innerText);
    document.getElementById('correct').innerText = ++oldScore;
}

//Gets the current incorrect answer from the DOM and increments it by 1 
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}


//Counts questions that have been answered and questions remaining in the array
function countQuestionAnswered() {

    let questionCounter = parseInt(document.getElementById('question-answered').innerText);

    document.getElementById('question-counter').innerText = questions.length;
    document.getElementById('question-answered').innerText = ++questionCounter;
}


runGame();