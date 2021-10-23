const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswer = false;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

let questions = [
  {
    question: "Cual es mi nombre?",
    choice1: "Carlos",
    choice2: "Luis",
    choice3: "Diego",
    choice4: "Marco",
    answer: 1,
  },
  {
    question: "Cual es mi edad?",
    choice1: "Carlos",
    choice2: "Luis",
    choice3: "Diego",
    choice4: "Marco",
    answer: 2,
  },
  {
    question: "Cual es mi ciudad?",
    choice1: "Carlos",
    choice2: "Luis",
    choice3: "Diego",
    choice4: "Marco",
    answer: 3,
  },
  {
    question: "Cual es mi universidad?",
    choice1: "Carlos",
    choice2: "Luis",
    choice3: "Diego",
    choice4: "Marco",
    answer: 4,
  },
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 4;
startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestion = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestion.length === 0 || questionCounter >= MAX_QUESTIONS) {
    return window.location.assign("/end.html");
  }

  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestion.length);
  currentQuestion = availableQuestion[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
  });

  availableQuestion.splice(questionIndex, 1);
  acceptingAnswer = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswer) return;

    acceptingAnswer = false;
    const selectedChoice = e.target;
    const selectAnswer = selectedChoice.dataset['number'];
    console.log(selectAnswer)
    console.log(currentQuestion.answer)
    
  
    const classToApply = selectAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
    console.log(classToApply)

    selectedChoice.parentElement.classList.add(classToApply)

    setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion()
        
    }, 1000);

  




    getNewQuestion();
  });
});
startGame();
