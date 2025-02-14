
let timeLeft = document.querySelector(".time-left");

let questionCounter = 0;

let timer = null;
let timerLeft = 15;
let totalquestions=0;
const resettimer = () => {
    clearInterval(timer);
    timerLeft = 10;
    timeLeft.textContent = `${timerLeft}s`;
};

const starttimer = () => {
    timer = setInterval(() => {
        timerLeft--;
        timeLeft.textContent = `${timerLeft}s`;

        if (timerLeft <= 0) {
            clearInterval(timer);
            if (questionCounter < totalquestions) {
                GenerateQuestion();
            } else {
                showQuizResult();
            }
        }
    }, 1000);
};

let currentQuestionIndex = 0;
let score = 0;
let askedQuestions = [];
let selectedCategory = null;
const categoryButtons = document.querySelectorAll(".category-option");
categoryButtons.forEach(button => {
    button.addEventListener("click", function () {
        categoryButtons.forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
        selectedCategory = button.textContent;
        
    });
});

const getRandomQuestion = () => {
    const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === selectedCategory.toLowerCase()).questions;
    if (askedQuestions.length === categoryQuestions.length) {
        askedQuestions = [];
    }
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * categoryQuestions.length);
    } while (askedQuestions.includes(randomIndex));
    askedQuestions.push(randomIndex);
    return categoryQuestions[randomIndex];
};

const answerOptions = document.querySelector(".answer-options");
const questionStatus = document.querySelector(".number-of-count");
const nextButton = document.querySelector(".next-button");
const GenerateQuestion = () => {
    if (questionCounter >= totalquestions) {
        showQuizResult();
        return;
    }
    const currentQuestion = getRandomQuestion();
    if (!currentQuestion) return;

    resettimer();
    starttimer();
    console.log(currentQuestion);
    questionCounter++;
    questionStatus.textContent = `${questionCounter}/${totalquestions}`;
    answerOptions.innerHTML = "";
    nextButton.style.display = "none";
    document.querySelector(".question-text").textContent = currentQuestion.question;
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.classList.add("answer-option");
        li.textContent = option;
        li.addEventListener("click", function () {
            clearInterval(timer);
            if (index === currentQuestion.correctanswer) {
                li.classList.add("correct");
                score++;
            } else {
                li.classList.add("incorrect");
                const correctOption = Array.from(answerOptions.children).find((child, i) => i === currentQuestion.correctanswer);
                if (correctOption) {correctOption.classList.add("correct");}
            }
            nextButton.style.display = "block";
            Array.from(answerOptions.children).forEach(child => {
                child.style.pointerEvents = "none";
            });
        });
        answerOptions.appendChild(li);
    });
};
const displayContainer = document.querySelector(".display-container");
const scoreContainer = document.querySelector(".score-container");
const userScore = document.querySelector(".user-score");
const showQuizResult = () => {
    displayContainer.style.display = "none";
    scoreContainer.style.display = "block";
    userScore.textContent = `Your score is ${score}/${totalquestions}`;

    const scorecomment=document.querySelector(".score-comment");
    if (score / totalquestions <= 0.7) {
        scorecomment.textContent=`Try again! You can do even better🙌😊`;
    }else{
        scorecomment.textContent=`Excellent!🎉👏`;
    }
};
const configContainer = document.querySelector(".config-container");
const startQuizButton = document.querySelector(".start-quiz-button");
const errorMessage = document.querySelector(".error-message");
startQuizButton.addEventListener("click", function () {
    const questioncountinput =document.querySelector(".question-count-input");
    totalquestions=parseInt(questioncountinput.value,10);
    console.log("Valeur de totalquestions:", totalquestions);
    if (!selectedCategory || totalquestions < 1 || totalquestions > 35) {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Veuillez sélectionner une catégorie et entrer un nombre valide de questions (entre 1 et 35).";
    } else {
        configContainer.style.display = "none";
        displayContainer.style.display = "block";
        GenerateQuestion();
        nextButton.addEventListener("click", GenerateQuestion);
    }
});

let restartButton = document.querySelector(".restart-button");
restartButton.addEventListener("click", function () {
    errorMessage.textContent="";
    scoreContainer.style.display = "none";
    configContainer.style.display = "block";
    displayContainer.style.display = "none"; 
    score = 0;
    questionCounter = 0;
    askedQuestions = [];
    userScore.textContent = "Demo Score"; 
    document.querySelector(".score-comment").textContent = "";
    categoryButtons.forEach(btn => btn.classList.remove("selected"));
    selectedCategory = null; 
    answerOptions.innerHTML = ""; 
    totalquestions = 0; 
    questionStatus.textContent = `0 of 0`; 

    const questioncountinput = document.querySelector(".question-count-input");
    questioncountinput.value = '15'; 
});
