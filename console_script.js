let x = 'X';
let o = 'O';
let whosMove = 'player';
let p1Move = '';
const prompt = require('prompt-sync')();

// set up the basic board
let row1 = [' ', ' ', ' '];
let row2 = [' ', ' ', ' '];
let row3 = [' ', ' ', ' '];
const gameBoard = [row1, row2, row3];

function boardString() {
    let bStr = `\n   A  |  B  |  C  \n  ---   ---   --- \n1  ${row1[0]}  |  ${row1[1]}  |  ${row1[2]}  \n  ---   ---   --- \n2  ${row2[0]}  |  ${row2[1]}  |  ${row2[2]}  \n  ---   ---   --- \n3  ${row3[0]}  |  ${row3[1]}  |  ${row3[2]}  \n`;
    return bStr;
};

console.log(boardString());

// give brief instructions on console use
console.log('Input move by specifying row, then specify the column in second input screen');

if (whosMove === 'player') {
    playerMove()
};

if (whosMove === 'computer') {
    computerMove()
};

function getP1Move() {
    
    let row = prompt("Enter row: ");
    let column = prompt("Enter column: ");
    let move = [row, column];
    return move
}

function winnerIs() {
    console.log(`And the winner is ${whosMove}!!!!!!!!!!!!!!!`);
    console.log(boardString());
    throw new Error();
}

function playerMove() {

    p1Move = getP1Move();

    p1Row = Number(p1Move[0]);
    p1Col = p1Move[1].toUpperCase();
    
    console.log(`Your move was row ${p1Row} and column ${p1Col}`);    

    if (p1Row === 1) {

        if (p1Col === 'A' && row1[0] === ' ') {
            row1[0] = x;
        } else if (p1Col === 'B' && row1[1] === ' ') {
            row1[1] = x;
        } else if (p1Col === 'C' && row1[2] === ' ') {
            row1[2] = x;
        } else {
            console.log(`Your move of row: ${p1Row} and col: ${p1Col} is taken choose again`);
            playerMove()
        }
    }

    if (p1Row === 2) {
        if (p1Col === 'A' && row2[0] === ' ') {
            row2[0] = x;
        } else if (p1Col === 'B' && row2[1] === ' ') {
            row2[1] = x;
        } else if (p1Col === 'C' && row2[2] === ' ') {
            row2[2] = x;
        } else {
            console.log(`Your move of row: ${p1Row} and col: ${p1Col} is taken choose again`);
            playerMove()
        }
    }

    if (p1Row === 3) {
        if (p1Col === 'A' && row3[0] === ' ') {
            row3[0] = x;
        } else if (p1Col === 'B' && row3[1] === ' ') {
            row3[1] = x;
        } else if (p1Col === 'C' && row3[2] === ' ') {
            row3[2] = x;
        } else {
            console.log(`Your move of row: ${p1Row} and col: ${p1Col} is taken choose again`);
            playerMove()
        }
    }

    if(checkBoard()) {
        whosMove = 'computer';
        p1Move = ''
        console.log(boardString());
        computerMove();
    };
};

function computerMove() {

    console.log(`computer's move`);
    const numToStr = ['A', 'B', 'C'];

    while(whosMove === 'computer') {
        console.log(`whosMove = ${whosMove}`)
        
        let compRow = Math.floor(Math.random() * 3);  // from 0 to 3
        let ranCompCol = Math.floor(Math.random() * 3); // from 0 to 3
        let compCol = numToStr[ranCompCol];
        
        console.log(`Computer move is ${compRow+1},${compCol}`);

        if (compRow === 0) {
            if (compCol === 'A' && row1[0] === ' ') {
                row1[0] = o;
                whosMove = 'player'
                
            } else if (compCol === 'B' && row1[1] === ' ') {
                row1[1] = o;
                whosMove = 'player'
                
            } else if (compCol === 'C' && row1[2] === ' ') {
                row1[2] = o;
                whosMove = 'player'
                
            } else {
                console.log(`The computer's move of row: ${compRow} and col: ${compCol} is taken choose again`);
                whosMove = 'computer'
                continue
            }
        }

        if (compRow === 1) {
            if (compCol === 'A' && row2[0] === ' ') {
                row2[0] = o;
                whosMove = 'player'
                
            } else if (compCol === 'B' && row2[1] === ' ') {
                row2[1] = o;
                whosMove = 'player'
                
            } else if (compCol === 'C' && row2[2] === ' ') {
                row2[2] = o;
                whosMove = 'player'
                
            } else {
                console.log(`The computer's move of row: ${compRow} and col: ${compCol} is taken choose again`);
                whosMove = 'computer'
                continue
            }
        }

        if (compRow === 2) {
            if (compCol === 'A' && row3[0] === ' ') {
                row3[0] = o;
                whosMove = 'player'
                
            } else if (compCol === 'B' && row3[1] === ' ') {
                row3[1] = o;
                whosMove = 'player'
                
            } else if (compCol === 'C' && row3[2] === ' ') {
                row3[2] = o;
                whosMove = 'player'
                
            } else {
                console.log(`The computer's move of row: ${compRow} and col: ${compCol} is taken choose again`);
                whosMove = 'computer'
                continue
            }
        }

        console.log(boardString());
    }

    if(checkBoard()) {
        whosMove = 'player';
        playerMove();
    };
}

function checkBoard() {

    console.log('Entering checkBoard()');
    
    // Check rows
    if((row1[0] === row1[1] && row1[0] === row1[2]) && row1[0] !== ' ') {
        console.log(`the winner is ${whosMove}`);
        winnerIs();
    } else if((row2[0] === row2[1] && row2[0] === row2[2]) && row2[0] !== ' ') {
        console.log(`the winner is ${whosMove}`);
        winnerIs();
    } else if((row3[0] === row3[1] && row3[0] === row3[2]) && row3[0] !== ' ') {
        console.log(`the winner is ${whosMove}`);
        winnerIs();
    }

    // Check columns
    if((row1[0] === row2[0] && row1[0] === row3[0]) && row1[0] !== ' ') {
        console.log(`the winner is ${whosMove}`);
        winnerIs();
    } else if((row1[1] === row2[1] && row1[1] === row3[1]) && row1[1] !== ' ') {
        console.log(`the winner is ${whosMove}`);
        winnerIs();
    } else if((row1[2] === row2[2] && row1[2] === row3[2]) && row1[2] !== ' ') {
        console.log(`the winner is ${whosMove}`);
        winnerIs();
    }

    // Check diagonals
    if((row1[0] === row2[1] && row1[0] === row3[2]) && row1[0] !== ' ') {
        console.log(`the winner is ${whosMove}`);
        winnerIs();
    } else if((row1[2] === row2[1] && row1[2] === row3[0]) && row1[2] !== ' ') {
        console.log(`the winner is ${whosMove}`);
        winnerIs();
    }

    return true
};