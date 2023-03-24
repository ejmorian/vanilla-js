// get reference to board cells
const cells = document.querySelectorAll('.cell');

//get reference to game over sections
const displayWinner = document.querySelector('.winner');
const gameOver = document.querySelector('.game-over');
const restart = document.querySelector('.restart')

// create an object to represent the board
const board = {
    top: ['0', '1', '2'],
    middle: ['3', '4', '5'],
    bottom: ['6', '7', '8']
}

// define player, true is 'X', false is 'O'
let player = true;
let boardCapacity = 0;
let winner;

// restart the game at game over
restart.addEventListener('click', () => {
    location.reload();
})

//check for winner every turn
const checkWinner = () => {
    checkVertical();
    checkHorizontal();
    checkDiagonal();
}

// check for draw every turn
const checkDraw = () => {

    if (winner === undefined) {
        console.log('draw')
        displayWinner.textContent = `It's a Draw`;
        gameOver.classList.remove('hidden');
    }
}

//check if there are any vertical wins
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

//check if there are any horizontal wins
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

//check if there are any diagonal wins
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

// allows each cell to be interactive
cells.forEach((item, index) => {

    const handleClick = () => {

        // X always go first
        if (player) {
            //place an 'X' to the cell
            item.textContent = 'X';
            //next turn is player 'O'
            player = false;

            // update the board object
            if (index <= 2) {
                board.top[index] = 'X';
            }
            else if (index <= 5) {
                board.middle[(index - 3)] = 'X';
            } else {
                board.bottom[(index - 6)] = 'X';
            }


        } else {
            //place an 'O' to the cell
            item.textContent = 'O'
            //next turn is player 'O'
            player = true;

            // update the board object
            if (index <= 2) {
                board.top[index] = 'O';
            } else if (index <= 5) {
                board.middle[(index - 3)] = 'O';
            } else {
                board.bottom[(index - 6)] = 'O';
            }
        }

        // if the board is full check for any final wins, otherwise draw
        if (boardCapacity >= 8) {
            checkWinner();
            checkDraw();
        }

        // check for winner every turn
        checkWinner();

        // updates the board capacity, if full, there are no more possible moves
        boardCapacity++;

        item.removeEventListener('click', handleClick)
    }

    //if a cell is clicked do the following
    item.addEventListener('click', handleClick)


})
