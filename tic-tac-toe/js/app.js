const cells = document.querySelectorAll('.cell');

const board = {
    top: ['a', 'b', 'c'],
    middle: ['x', 'y', 'z'],
    bottom: ['1', '2', '3']
}

let playerOne = true;
let playerTwo = false;
let boardCount = 0;
let winner;

const displayWinner = document.querySelector('.winner');
const gameOver = document.querySelector('.game-over');
const restart = document.querySelector('.restart')

restart.addEventListener('click', () => {
    location.reload();
})


const checkWinner = () => {
    checkVertical();
    checkHorizontal();
    checkDiagonal();
}

const checkDraw = () => {

    if (winner === undefined) {
        console.log('draw')
        displayWinner.textContent = `It's a Draw`;
        gameOver.classList.remove('hidden');
    }
}


const checkVertical = () => {

    if (board.top[0] == board.middle[1] && board.middle[1] == board.bottom[2]) {
        displayWinner.textContent = `${board.top[0]}, is the winner`;
        gameOver.classList.remove('hidden');
    }
    else if (board.top[2] == board.middle[1] && board.middle[1] == board.bottom[0]) {
        displayWinner.textContent = `${board.top[2]}, is the winner`;
        gameOver.classList.remove('hidden');
    }

}

const checkHorizontal = () => {

    if (board.top[0] == board.top[1] && board.top[1] == board.top[2]) {
        displayWinner.textContent = `${board.top[0]}, is the winner`;
        gameOver.classList.remove('hidden');
    } else if (board.middle[0] == board.middle[1] && board.middle[1] == board.middle[2]) {
        displayWinner.textContent = `${board.middle[0]}, is the winner`;
        gameOver.classList.remove('hidden');
    } else if (board.bottom[0] == board.bottom[1] && board.bottom[1] == board.bottom[2]) {
        displayWinner.textContent = `${board.bottom[0]}, is the winner`;
        gameOver.classList.remove('hidden');
    }

}

const checkDiagonal = () => {

    if (board.top[0] == board.middle[0] && board.middle[0] == board.bottom[0]) {
        displayWinner.textContent = `${board.top[0]}, is the winner`;
        gameOver.classList.remove('hidden');
    } else if (board.top[1] == board.middle[1] && board.middle[1] == board.bottom[1]) {
        displayWinner.textContent = `${board.top[1]}, is the winner`;
        gameOver.classList.remove('hidden');
    } else if (board.top[2] == board.middle[2] && board.middle[2] == board.bottom[2]) {
        displayWinner.textContent = `${board.top[2]}, is the winner`;
        gameOver.classList.remove('hidden');
    }

}

cells.forEach((item, index) => {
    item.addEventListener('click', () => {

        if (playerOne) {

            item.textContent = 'X';
            playerOne = false;

            if (index <= 2) {
                board.top[index] = 'X';
            }
            else if (index <= 5) {
                board.middle[(index - 3)] = 'X';
            } else {
                board.bottom[(index - 6)] = 'X';
            }


        } else {
            item.textContent = 'O'
            playerOne = true;
            if (index <= 2) {
                board.top[index] = 'O';
            } else if (index <= 5) {
                board.middle[(index - 3)] = 'O';
            } else {
                board.bottom[(index - 6)] = 'O';
            }
        }

        checkWinner();


        if (boardCount >= 8) {
            checkWinner();
            checkDraw();
        }

        boardCount++;

    })
})
