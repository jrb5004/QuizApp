const STORE = [
    {
        questionNumber: 1,
        question: 'Who is the only Nittany Lion player to have ever won the Heisman Trophy?',
        option1: 'Saquon Barkley',
        option2: 'Lavar Arrington',
        option3: 'John Cappelletti',
        option4: 'Franco Harris',
        correctOption: 'John Cappelletti',
    },

    {
        questionNumber: 2,
        question: 'How many fans were in attendendance at Beaver Stadium when a record-breaking crowd showed up to Penn State\'s 27-26 loss to Ohio State on 9/29/18?',
        option1: '111,000',
        option2: '94,000',
        option3: '82,000',
        option4: '107,000',
        correctOption: '111,000',
    },

    {
        questionNumber: 3,
        question: 'Which of the following Penn State quarterbacks are NOT among the programs top 5 leaders in career passing yards?',
        option1: 'Christian Hackenberg',
        option2: 'Kerry Collins',
        option3: 'Zack Mills',
        option4: 'Matt McGloin',
        correctOption: 'Kerry Collins',
    },

    {
        questionNumber: 4,
        question: 'Which standout running back holds the all time record for career rushing yards at Penn State?',
        option1: 'Curtis Enis',
        option2: 'Ki-Jana Carter',
        option3: 'Saquon Barkely',
        option4: 'Evan Royster',
        correctOption: 'Evan Royster',
    },

    {
        questionNumber: 5,
        question: 'What is the annual salary of current head coach James Franklin?',
        option1: '4.5 mil',
        option2: '5.6 mil',
        option3: '6.1 mil',
        option4: '3.8 mil',
        correctOption: '5.6 mil',
    },

    {
        questionNumber: 6,
        question: 'Who was the head coach of the team directly before Joe Paterno?',
        option1: 'Bob Higgins',
        option2: 'Huge Bezdek',
        option3: 'Pop Golden',
        option4: 'Rip Engle',
        correctOption: 'Rip Engle',
    },

    {
        questionNumber: 7,
        question: 'How many former Penn State players are enshrined in the NFL Hall of Fame?',
        option1: '6',
        option2: '11',
        option3: '4',
        option4: '2',
        correctOption: '6',
    },

    {
        questionNumber: 8,
        question: 'In what year did Penn State last win a college football national champtionship?',
        option1: '1991',
        option2: '1980',
        option3: '2001',
        option4: '1986',
        correctOption: '1986',
    },

    {
        questionNumber: 9,
        question: 'Which kicker holds the all time program record for career field goals made?',
        option1: 'Kevin Kelly',
        option2: 'Robbie Gould',
        option3: 'Sam Ficken',
        option4: 'Collin Wagner',
        correctOption: 'Kevin Kelly',
    },

    {
        questionNumber: 10,
        question: 'How many times has Penn State defeated Ohio sate in their 34 total meetings?',
        option1: '11',
        option2: '9',
        option3: '14',
        option4: '18',
        correctOption: '14',
    }
];

let questionNumber = 0;
let scoreCount = 0;

function handleKickoffButton() {
    $('.js-start-button').on('click', event => { 
        $('.js-start-page').remove();  
        updateQuestionCount();
        displayQuestion(STORE[questionNumber - 1]);
        $('.js-quiz-form').css('display', 'block');
    });
}

function displayQuestion(question) {
    console.log(question);
    $('.quiz-form').html(
        `<form class="inner-quiz-form">
        <h2>${question.question}</h2>
        <fieldset>
        <input type="radio" name="option" value="${question.option1}" checked>${question.option1}<br>
        <input type="radio" name="option" value="${question.option2}">${question.option2}<br>
        <input type="radio" name="option" value="${question.option2}">${question.option3}<br>
        <input type="radio" name="option" value="${question.option2}">${question.option4}<br>
        <button class="submit-button">Submit</button>
        </fieldset>
        </form>`);
}


function updateQuestionCount() {
    questionNumber ++;
    $('.question-number').text(questionNumber);
}



function handleSubmitButton() {
    $('.quiz-form').on('click', '.submit-button', event => {
        event.preventDefault();
        let selection = $("input[name='option']:checked").val();
        let correctAnswer = `${STORE[questionNumber - 1].correctOption}`;
        if (selection === correctAnswer) {
            correctAnswerFeedback();
            increaseScore();
        }
        else {
            wrongAnswerFeedback();
        }
    });

    function correctAnswerFeedback() {
        $('.quiz-form').html(
            `<div class="feedback">
            <h2>You Got It!</h2>
            <img src='images/correctanswer.jpg' alt='championship'>
            <button class='next-button'>Next</button>
            </div>`);
    }

    function wrongAnswerFeedback() {
        let rightAnswer = `${STORE[questionNumber - 1].correctOption}`;
        $('.quiz-form').html(
            `<div class="feedback">
            <h2>Wrong! Be better!</h2>
            <img src='images/wronganswer.jpg' alt='james franklin angry'>
            <p>The right answer is ${rightAnswer}.</p> 
            <button class='next-button'>Next</button>
            </div>`);
    }

    function increaseScore() {
    scoreCount ++;
    $('.current-score').text(scoreCount);
    }
}

function handleNextButton() {
        $('.quiz-form').on('click', '.next-button', event => {
            if(questionNumber === 10) {
                provideFinalScore();
            }
            else {
                nextQuestion();
    }
});
}

function provideFinalScore() {
    $('li').remove();
    $('.quiz-form').html(
        `<div class="feedback">
        <h2>Scoreboard</h2>
        <p>You scored ${scoreCount}/10.  Lets go STATE!</p> 
        <img src='images/logoimage.png' alt='logo'> 
        <button class='restart-button'>Restart</button>
        </div>`);
}

function nextQuestion() {
    event.preventDefault();
    updateQuestionCount();
    displayQuestion(STORE[questionNumber - 1]);
}
    
    

function handleRestartButton() {
    $('.quiz-form').on('click', '.restart-button', event => {
        let questionNumber = 1;
        let scoreCount = 0;
        $('li').css('display', 'block');
        updateQuestionCount();
        displayQuestion(STORE[questionNumber - 1]);
    });

    
}

function initiateQuiz() {

    handleKickoffButton();
    handleSubmitButton();
    handleNextButton();
    handleRestartButton();
}

$(initiateQuiz);