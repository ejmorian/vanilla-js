const cells = document.querySelectorAll('.cell');

const board = {
    top: ['x', 'y', 'z'],
    middle: ['z', 'x', 'y'],
    bottom: ['a', 'b', 'c']
}

let playerOne = true;
let playerTwo = false;


const checkWinner = () => {
    checkVertical();
    checkHorizontal();
    checkDiagonal();
}


const checkVertical = () => {

    if (board.top[0] == board.middle[1] && board.middle[1] == board.bottom[2]) {
        console.log(board.top[0], "is the winner")
    }
    else if (board.top[2] == board.middle[1] && board.middle[1] == board.bottom[0]) {
        console.log(console.log(board.top[2], "is the winner"))
    }

}

const checkHorizontal = () => {

    if (board.top[0] == board.top[1] && board.top[1] == board.top[2]) {
        console.log(board.top[0], "is the winner")
    } else if (board.middle[0] == board.middle[1] && board.middle[1] == board.middle[2]) {
        console.log(board.middle[0], "is the winner")
    } else if (board.bottom[0] == board.bottom[1] && board.bottom[1] == board.bottom[2]) {
        console.log(board.bottom[0], "is the winner")
    }

}

const checkDiagonal = () => {

    if (board.top[0] == board.middle[0] && board.middle[0] == board.bottom[0]) {
        console.log(board.top[0], "is the winner")
    } else if (board.top[1] == board.middle[1] && board.middle[1] == board.bottom[1]) {
        console.log(board.top[1], "is the winner")
    } else if (board.top[2] == board.middle[2] && board.middle[2] == board.bottom[2]) {
        console.log(board.top[2], "is the winner")
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

    })
})

