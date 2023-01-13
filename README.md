# Love Quiz

Love Quiz is an interactive website for people who love quizzes.
It contains questions from multiple areas of knowledge: history, chemistry, literature etc. Each question has four answer options to choose from.
This website targets adults and curious children with diverse interests and a love for games.

![Responsive Mockup](assets/images/mockup.png)

## Features 

### Wireframe

<img src="assets/images/wireframe.png">

### Existing Features

- __The Header__

  - The header shows the name of the game and contains a message encouraging to play.

![Header](assets/images/header.png)

- __Score area__

  - Contains counters for correct and wrong answers, also separate counter to keep track of the number of answered and remaining questions.

  ![Score](assets/images/score.png)

- __Question Area__

  - Contains question clearly visible through contrasting font on a light pleasing-to-eye background. New questions appear automatically after the previous one has beeng answered because of JavaScript code.
  - When I play quiz games as a user, I find it irritating to perform additional clicks to "Play" or "Next Game" buttons. I choose not to add these buttons and to use a delay of displaying the next question.

![Question Area](assets/images/question.png)

- __Answers Section__

  - Contains four buttons with answer options. When the user chooses the right answer button change background colour to green. If the player chose the wrong answer button change background colour to red. After the user clicks on the button, a new question appears.
  - On smaller screens four buttons line up in a column.

![Answers Section](assets/images/answers.png)

### Features Left to Implement
- Where there is time, I would like to add table score and more questions. 


## Technologies

- JavaScript
  - The mechanics of the website was implemented using a javascript, which ensured interactivity

- HTML
  - The structure of the website was developed using HTML as the main language.

- CSS
  - The website was styled using custom CSS in an external file in separate folder.

- GitHub
  - Was used as a workspace for developing of the website.

- GitPod
  - Tool used to commit and push code to GitHub during the development of the website.

- Git
  - Tool used to commit and push code to GitHub during the development of the website.



## Testing 

- This quiz game website weas tested on Google Chrome and Microsoft Edge browsers.
- The website is responsive, looks good and functions on all standard screen sizes implemented in the devtools device toolbar.
- Lighthouse testing from Google Chrome device toolbar confirms that website is accesible and has exelent performance.
<img src="assets/images/lighthouse_desktop.png">
- Lighthouse shows 100% Accessibility on mobile test as well.
<img src="assets/images/lighthouse_mobile.png">


### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org)

  <img src="assets/images/HTML_Validator.png">When I play quiz games as a user, I find it irritating to perform additional clicks to "Play" or "Next Game" buttons. I choose not to add these buttons and to use a delay of displaying the next question.


- CSS
  - No errors or warnings were returned when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/)

  <img src="assets/images/CSS_Validator.png">

- JavaScript
  - No errors were found when passing through the JavaScript Validator.
[JSHint](https://jshint.com/)
  <img src="assets/images/JS_Validator.png">

## Fixed Bugs 
- There was a problem with the if statement condition in chekAnswer function. During the session with the mentor, it became clear that the reason was in strict comparison operator. After changing it from "====" to "==" the function began to be executed.
<img src="assets/images/if_statement.png">
- Also, there was a problem with displaying of changing the background colour of the answer buttons. During the tutor session tutor explained that I wouldn't be able to see colour change without setting the timeout method first.
<img src="assets/images/timeout.png">

## Unfixed Bugs
- No unfixed bugs.

## Deployment

- Website was created using the GitPod code editor and pushed to GitHub to the remote repository ‘forest-bathing’.
- Website was deployed to GitHub pages.

The live link can be found here - https://alinapanasenko.github.io/love-quiz/


## Credits 

- runGame and getNextQuestion functions were adapted from James Q Quick tutorial "Build a Quiz App", part 3, which you can find by this link: 
https://www.youtube.com/watch?v=zZdQGs62cR8&t=359s&ab_channel=JamesQQuick
- Importing library of questions array was performed with a help of the tutor support.
- checkAnswer function was performed with help from the mentor.
- Incrementing score for right and wrong answers was copied from the Love Math Project of Code Institute.

### Content 

- Questions and answers were found by Google on the Internet.
