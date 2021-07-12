
const question = document.getElementById ("question");
const choices = Array.from(document.getElementsByClassName ("choice-text"));
let currentQuestion = {};
let acceptingAnswers = false;
let score= 0;
let questionCounter = 0;
finalScore = document.getElementById('scores');



let availableQuestions = [ 
    {
     
        question: "How many calories are in 1 gram of proteins? ",
        choice1: '9 calories',
        choice2: '3 calories',
        choice3:  '8 calories',
        choice4:   '4 calories',
        correctAnswer: 2,
    },
     {
        question: "Which of the following food types contain more proteins per gram?",
        choice1: 'eggs',
        choice2: 'salmon',
        choice3:  'breast chicken',
        choice4:    'whole milk',
        correctAnswer: 3, 
    },
        
            
     {
        question: "Which of the following facts is true?",
        choice1: 'Caffeine is a mild diuretic', 
        choice2:  'Women who are pregnant should limit their alcohol intake to 500mg/day',
        choice3:  'Most vitamin A is obtained through the action of sunlight on skin during the summer months',
        choice4:  'Coeliac disease is a bowel disease triggered by lactose',
        correctAnswer: 1,
     },

            
     {
        question: "How many calories are in 1 gram of carbohydrate? ",
        choice1: '5.5 calorie',
        choice2:  '1 calories',
        choice3:  '5 calories',
        choice4:  '3.75 calories',
        correctAnswer:  2,
     },
                        
         
     {
        question: "Which of the following food types contain more carbohydrate per gram?",
        choice1: 'Spaghetti', 
        choice2:  'Lentils',
        choice3:  'brown rice',
        choice4:  'Raisins',
        correctAnswer: 4,
        
     }, 
]

//CONSTANTS

const MAX_QUESTIONS = 4;

startQuiz = () => {
    questionCounter = 0;
    score= 0;
    
   getNewQuestion();
};

getNewQuestion = () => {
    questionCounter++;

    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        
        finalScore.innerText = score;
        let quizDiv= document.getElementById ("quiz")
        let endScore=document.getElementById('finalScore')
        quizDiv.classList.add('hiden');
        endScore.classList.remove('hiden');


        console.log(finalScore);
    }
    
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
      currentQuestion = availableQuestions [questionIndex];
      question.innerText = currentQuestion.question;

      choices.forEach(choice => {
          const number = choice.dataset ["number"];
          choice.innerText = currentQuestion ["choice" + number];
      });

      availableQuestions.splice(questionIndex, 1);
      console.log(availableQuestions);
      acceptingAnswers = true;

};

choices.forEach (choice =>  {
    choice.addEventListener ("click", e =>
    {if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice= e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        console.log(selectedAnswer, currentQuestion.correctAnswer) ;
        if (parseInt(currentQuestion.correctAnswer) === parseInt(selectedAnswer) ) {
            score++
            console.log(score);
        }
        getNewQuestion();

    });
}); 

    
startQuiz();


    
        