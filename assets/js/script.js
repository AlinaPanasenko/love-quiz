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


/*Displays random question from the library and answer options for it. Then removes said question
from array*/


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
}

/*Delay of starting the new game
setTimeout(function(){


}, 500); 
*/

let buttons = document.getElementsByTagName("button");



// //Check answer and react with changing collor of clicked button
//     for (let button of buttons) {
//     button.addEventListener("click", function checkAnswer() {
        
//         //My mentor helped me with this part of the code ("==" instead of "===")
//         let correctOption = currentQuestion['answer'];
//         if (this.getAttribute("data-number") == correctOption) {
//             button.style.backgroundColor = 'green';
//             incrementScore();
//             console.log("here is checkAnswer");
//         } else {
//             button.style.backgroundColor = 'red';
//             incrementWrongAnswer();
//     }

//     defaultButtonsColor();
// });
// }

//Check answer and react with changing collor of clicked button

function checkAnswer(event) {
    //My mentor helped me with this part of the code ("==" instead of "===")
    let correctOption = currentQuestion['answer'];
    const button = event.target;
    if (button.getAttribute("data-number") == correctOption) {
        button.style.backgroundColor = 'green';
        incrementScore();
        console.log("here is checkAnswer");
    } else {
        button.style.backgroundColor = 'red';
        incrementWrongAnswer();
    }
    defaultButtonsColor();
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

//Gets the current score from the DOM and increments it by 1 
function incrementScore () {

    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}

//Gets the current incorrect answer from the DOM and increments it by 1 
function incrementWrongAnswer() {
    
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}

runGame();