const Quiz = [
    {
        question: "Who is the first member of the Strawhat pirates",
        answers:
            [{
                A: "Nami",
                correct: false
            },
            {
                B: "Usopp",
                correct: false
            },
            {
                C: 'Zoro',
                correct: true
            },
            { D: 'Franky', correct: false }]
    },
    {
        question: "What is the name of Luffy's devil fruit?",
        answers:
            [{ A: "Hito-Hito no mi", correct: true },
            { B: "Gomu-Gomu no mi", correct: false },
            { C: 'Mera-Mera no mi', correct: false },
            { D: 'Bara-Bara no mi', correct: false }]
    },
    {
        question: "What is Nami's dream?",
        answers:
            [{ A: "To become a brave warrior of the sea", correct: false },
            { B: "To become more powerful", correct: false },
            { C: 'To draw a map of the world', correct: true },
            { D: 'To find the All-Blue', correct: false }]
    },
    {
        question: "Who is Ace's father",
        answers:
            [{ A: "Roger", correct: true },
            { B: "Garp", correct: false },
            { C: 'Dadan', correct: false },
            { D: 'Kizaru', correct: false }]
    },
    {
        question: "Who is the most wanted man in One Piece?",
        answers:
            [{ A: "Monkey D Dragon", correct: true },
            { B: "Shanks", correct: false },
            { C: 'Trafalgar D Law', correct: false },
            { D: 'Monkey D Luffy', correct: false }]
    },
    {
        question: "Where did Zoro get Enma?",
        answers:
            [{ A: "Sabaodi Arcepelago", correct: true },
            { B: "Elbaf", correct: false },
            { C: 'Skypia', correct: false },
            { D: 'Wano', correct: true }]
    }
]

let score = 0;
let quizIndex = 0;
let answer;

const answerButton = document.querySelectorAll('.answer-button');

const showResult = () => {

    document.getElementById('quest').classList.add('hidden');

    document.querySelector('.score').textContent = `Score: ${score}/${Quiz.length}`;
}
const checkAnswer = () => {

    Quiz[quizIndex].answers.forEach((option => {
        if (option.correct) {
            answer = option[Object.keys(option)[0]]
        }
    }))
}

const nextQuiz = () => {
    document.querySelector('.quiz-question').textContent = Quiz[quizIndex].question;

    Quiz[quizIndex].answers.forEach((options, index) => {
        answerButton[index].textContent = options[Object.keys(options)[0]]
    })
}

const init = () => {
    // Start Game
    document.getElementById('start').addEventListener('click', () => {

        document.getElementById('home').classList.add('hidden');
        document.getElementById('quest').classList.remove('hidden');

        nextQuiz();
    })
    //Display next question and check answer
    answerButton.forEach((button) => {

        button.addEventListener('click', () => {
            checkAnswer()
            if (button.textContent == answer) {
                score++;
            }

            quizIndex++

            if (quizIndex < Quiz.length) {
                nextQuiz()
            }
            else {
                showResult();
            }
        })
    })
}

window.onload = init;