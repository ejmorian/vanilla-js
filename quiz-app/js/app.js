const options = document.querySelectorAll('.answer');
const [answerA, answerB, answerC, answerD] = options;

const Quiz = [
    {
        question: "what is 1 + 1?",
        A: "3",
        B: "4",
        C: "8",
        D: "2",
    },
    {
        question: "what is 10 * 1?",
        A: "2",
        B: "4",
        C: "3",
        D: "7",
    },
    {
        question: "what is 100 / 1?",
        A: "3",
        B: "4",
        C: "8",
        D: "2",
    },
    {
        question: "what is 10 + 1?",
        A: "3",
        B: "4",
        C: "3",
        D: "2",
    },
]

const checkAnswer = () => {

}


const displayQuiz = async () => {
    const question = document.getElementById('question');

    Quiz.forEach(async quiz => {

        question.innerText = quiz.question;
        answerA.innerText = quiz.A;
        answerB.innerText = quiz.B;
        answerC.innerText = quiz.C;
        answerD.innerText = quiz.D;

        const userClick = new Promise((resolve) => {
            answerA.addEventListener('click', () => {
                console.log('clicked');
                answerA.removeEventListener('click', () => {
                    console.log('remove')
                })
                resolve();
            })
        })

        await userClick;
        answerA.removeEventListener('click', () => {
            console.log('remove')
        })
    })

}


const startQuiz = () => {
    //get reference to display elements



}

const init = () => {
    //homepage to quiz
    document.getElementById('start').addEventListener('click', () => {
        document.querySelector('.home').classList.add('hide');
        document.querySelector('.questionnaire').classList.remove('hide');

        displayQuiz();
    })

    startQuiz()


}

window.onload = init;