# Coding-Quiz

## Description

This project is a coding quiz web application that test users on their JavaScript knowledge based on the following acceptance criteria:
```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```


 This application was built with HTML, CSS, and JavaScript with Web APIs as the focus. As I worked on creating this quiz, I ran into a series of roadblocks that caused me to refactor the code a few times to streamline the functionality of the quiz.

I had issues with the quiz cycling through the array of questions and answers without affecting nearby code. I also struggled with getting the code to close after the last question, and store the high scores. When refactoring the code, I found that it was helpful to separate functions and event listeners to smaller and simpler blocks of codes. I learned that details to syntax and structure is important as minor details and placements can crash an entire function or event.

Here's the [deployed site](https://www.kassing3.github.io/Coding-Quiz/) to view.



## Usage

To start the quiz, click the "Start Quiz" button. Once the quiz begins, users will go through a series of questions to select an answer. If the correct answer is chosen, the button will turn green, and the user will get 10 points for that answer. If the answer is wrong, the button will turn red and the user will deduct points and time. Once the quiz is complete, users can submit their high score and see their scored listed in the "High Scores" window.

![Mockup of Coding Quiz](./assets/images/Coding%20Quiz%20Mock%20Up.png)

## Credits

A huge thank you to my tutors, TAs, and learning assistants for helping me gain a better understanding of concepts and refactor the code. 
