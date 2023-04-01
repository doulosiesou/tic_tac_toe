// set up the game variables to track moves and scores
var whosMove = 'player';
var numPlayerWins = 0;
var numComputerWins = 0;
var numGames = Number(prompt("Enter number of games in round"));
var numGamesDisplay = document.getElementById('number-games')
numGamesDisplay.textContent = `The number of rounds in this match is ${numGames}`;


// set up basic Gameboard
const Gameboard = function() {

    console.log('Entering Gameboard')

    var winner = '';
    var keepPlayerScore = document.querySelector('#player-wins');
    
    //Declare buttons on gameboard and add event listeners to each button

    btn1.addEventListener('click', function() {
        btn1.classList.toggle('gameboard-button', 'winner');
        whosMove = 'player'
        playerMove();
    });

    btn2.addEventListener('click', function() {
        btn2.classList.toggle('gameboard-button', 'winner');
        whosMove = 'player'
        playerMove();
    });

    btn3.addEventListener('click', function() {
        btn3.classList.toggle('gameboard-button', 'winner');
        whosMove = 'player'
        playerMove();
    });
    
    btn4.addEventListener('click', function() {
        btn4.classList.toggle('gameboard-button', 'winner');
        whosMove = 'player'
        playerMove();
    });
    
    btn5.addEventListener('click', function() {
        btn5.classList.toggle('gameboard-button', 'winner');
        whosMove = 'player'
        playerMove();
    });

    btn6.addEventListener('click', function() {
        btn6.classList.toggle('gameboard-button', 'winner');
        whosMove = 'player'
        playerMove();
    });

    btn7.addEventListener('click', function() {
        btn7.classList.toggle('gameboard-button', 'winner');
        whosMove = 'player'
        playerMove();
    });

    btn8.addEventListener('click', function() {
        btn8.classList.toggle('gameboard-button', 'winner');
        whosMove = 'player'
        playerMove();
    });

    btn9.addEventListener('click', function() {
        btn9.classList.toggle('gameboard-button', 'winner');
        whosMove = 'player'
        playerMove();
    });

    var resetButton = document.getElementById('reset-board');

    resetButton.addEventListener('click', function(){
        
        Gameboard.emptyCells = [];

        Gameboard.r0c0 = '';
        Gameboard.r0c1 = '';
        Gameboard.r0c2 = '';
        Gameboard.r1c0 = '';
        Gameboard.r1c1 = '';
        Gameboard.r1c2 = '';
        Gameboard.r2c0 = '';
        Gameboard.r2c1 = '';
        Gameboard.r2c2 = '';

        Gameboard.row1 = [Gameboard.r0c0, Gameboard.r0c1, Gameboard.r0c2];
        Gameboard.row2 = [Gameboard.r1c0, Gameboard.r1c1, Gameboard.r1c2];
        Gameboard.row3 = [Gameboard.r2c0, Gameboard.r2c1, Gameboard.r2c2];

        Gameboard.gameBoard = Array([Gameboard.row1, Gameboard.row2, Gameboard.row3]);
        let results = document.getElementById('results');
        results.textContent = '';
        let btnStyle = '';

        // btn1.classList.toggle('gameboard-button', 'winner');

        btn1.classList.remove('winner');
        btn1.classList.add('gameboard-button');

        btn2.classList.remove('winner');
        btn2.classList.add('gameboard-button')

        btn3.classList.remove('winner');
        btn3.classList.add('gameboard-button');

        btn4.classList.remove('winner');
        btn4.classList.add('gameboard-button');

        btn5.classList.remove('winner');
        btn5.classList.add('gameboard-button');

        btn6.classList.remove('winner');
        btn6.classList.add('gameboard-button');

        btn7.classList.remove('winner');
        btn7.classList.add('gameboard-button');

        btn8.classList.remove('winner');
        btn8.classList.add('gameboard-button');

        btn9.classList.remove('winner');
        btn9.classList.add('gameboard-button');

        renderBoard();
    });

    function playerMove() {
        
        console.log(`Entered playerMove() and whosMove is ${whosMove}`);
        renderBoard();

        if(isBoardFull()) {
            let results = document.getElementById('results');
            results.textContent = 'The game ends in a tie';
            tieGame();
        }

        if(checkBoard()){
            whosMove = 'computer';
            console.log(`whosMove is ${whosMove}`);
            computerMove();
        };

        function isBoardFull() {

            let numEmptyCells = 0;

            if(Gameboard.row1[0] === ''){numEmptyCells ++};
            if(Gameboard.row1[1] === ''){numEmptyCells ++}; 
            if(Gameboard.row1[2] === ''){numEmptyCells ++};
            if(Gameboard.row2[0] === ''){numEmptyCells ++};
            if(Gameboard.row2[1] === ''){numEmptyCells ++};
            if(Gameboard.row2[2] === ''){numEmptyCells ++};
            if(Gameboard.row3[0] === ''){numEmptyCells ++};
            if(Gameboard.row3[1] === ''){numEmptyCells ++};
            if(Gameboard.row3[2] === ''){numEmptyCells ++};

            if (numEmptyCells > 0){
                return false;
            } else {return true};
        }
    };

    function computerMove() {

        console.log(`${whosMove} is next`);
        
        function availableMoves() {
            if(Gameboard.row1[0] === ''){Gameboard.emptyCells.push('r0c0')};
            if(Gameboard.row1[1] === ''){Gameboard.emptyCells.push('r0c1')}; 
            if(Gameboard.row1[2] === ''){Gameboard.emptyCells.push('r0c2')};
            if(Gameboard.row2[0] === ''){Gameboard.emptyCells.push('r1c0')};
            if(Gameboard.row2[1] === ''){Gameboard.emptyCells.push('r1c1')};
            if(Gameboard.row2[2] === ''){Gameboard.emptyCells.push('r1c2')};
            if(Gameboard.row3[0] === ''){Gameboard.emptyCells.push('r2c0')};
            if(Gameboard.row3[1] === ''){Gameboard.emptyCells.push('r2c1')};
            if(Gameboard.row3[2] === ''){Gameboard.emptyCells.push('r2c2')};

            let l = Gameboard.emptyCells.length;
            if(l === 1){
                tieGame();
            };
            let ranNum = Math.floor(Math.random() * l);
            let compMove = Gameboard.emptyCells[ranNum];
            console.log(`compMove is ${compMove}`);

            if(compMove === 'r0c0' && Gameboard.row1[0] === ''){Gameboard.row1[0] = 'O'};
            if(compMove === 'r0c1' && Gameboard.row1[1] === ''){Gameboard.row1[1] = 'O'};
            if(compMove === 'r0c2' && Gameboard.row1[2] === ''){Gameboard.row1[2] = 'O'};
            if(compMove === 'r1c0' && Gameboard.row2[0] === ''){Gameboard.row2[0] = 'O'};
            if(compMove === 'r1c1' && Gameboard.row2[1] === ''){Gameboard.row2[1] = 'O'};
            if(compMove === 'r1c2' && Gameboard.row2[2] === ''){Gameboard.row2[2] = 'O'};
            if(compMove === 'r2c0' && Gameboard.row3[0] === ''){Gameboard.row3[0] = 'O'};
            if(compMove === 'r2c1' && Gameboard.row3[1] === ''){Gameboard.row3[1] = 'O'};
            if(compMove === 'r2c2' && Gameboard.row3[2] === ''){Gameboard.row3[2] = 'O'};

            Gameboard.emptyCells = [];
        }
 
        availableMoves();
                         
        if(checkBoard()) {
            renderBoard();
        };
        
    };
    

    function renderBoard() {
        
        console.log('Entering renderBoard()');
        console.log(`row1: ${Gameboard.row1}\nrow2: ${Gameboard.row2}\nrow3: ${Gameboard.row3}`);
        console.log(`Rendering the ${whosMove} move`);
    
        if(Gameboard.row1[0] === 'X') {
            btn1.textContent = 'X'
        } else if (Gameboard.row1[0] === 'O') {
            btn1.textContent = 'O'
        } else {btn1.textContent = ''};
        
        if(Gameboard.row1[1] === 'X') {
            btn2.textContent = 'X'
        } else if (Gameboard.row1[1] === 'O') {
            btn2.textContent = 'O'
        } else (btn2.textContent = '');
    
        if(Gameboard.row1[2] === 'X') {
            btn3.textContent = 'X'
        } else if (Gameboard.row1[2] === 'O') {
            btn3.textContent = 'O'
        } else {btn3.textContent = ''};
    
        if(Gameboard.row2[0] === 'X') {
            btn4.textContent = 'X'
        } else if (Gameboard.row2[0] === 'O') {
            btn4.textContent = 'O'
        } else {btn4.textContent = ''};
    
        if(Gameboard.row2[1] === 'X') {
            btn5.textContent = 'X'
        } else if (Gameboard.row2[1] === 'O') {
            btn5.textContent = 'O'
        } else {btn5.textContent = ''};
    
        if(Gameboard.row2[2] === 'X') {
            btn6.textContent = 'X'
        } else if (Gameboard.row2[2] === 'O') {
            btn6.textContent = 'O'
        } else {btn6.textContent =''};
    
        if(Gameboard.row3[0] === 'X') {
            btn7.textContent = 'X'
        } else if (Gameboard.row3[0] === 'O') {
            btn7.textContent = 'O'
        } else {btn7.textContent = ''};
    
        if(Gameboard.row3[1] === 'X') {
            btn8.textContent = 'X'
        } else if (Gameboard.row3[1] === 'O') {
            btn8.textContent = 'O'
        } else {btn8.textContent = ''};
    
        if(Gameboard.row3[2] === 'X') {
            btn9.textContent = 'X'
        } else if (Gameboard.row3[2] === 'O') {
            btn9.textContent = 'O'
        } else {btn9.textContent = ''};

        return
    };

    function checkBoard() {

        console.log('Entering checkBoard()');
        let btnStyle = '';
        
        // Check rows
        if((Gameboard.row1[0] === Gameboard.row1[1] && Gameboard.row1[0] === Gameboard.row1[2]) && Gameboard.row1[0] !== '') {
            
            if(Gameboard.row1[0] === 'X'){
                winner = 'player'
                console.log(`the winner is player`);
                
            } else {
                winner = 'computer'
                console.log('the winner is computer');
                
            }
            
            btnStyle = 1;
            winnerIs(btnStyle)
            renderBoard();
            return
    
        } else if((Gameboard.row2[0] === Gameboard.row2[1] && Gameboard.row2[0] === Gameboard.row2[2]) && Gameboard.row2[0] !== '') {
            
            if(Gameboard.row2[0] === 'X'){
                winner = 'player';
                console.log(`the winner is player`);
                
            } else {
                winner = 'computer';
                console.log('the winner is computer');
                
            }
    
            btnStyle = 2
            winnerIs(btnStyle);
            renderBoard();
            return
    
        } else if((Gameboard.row3[0] === Gameboard.row3[1] && Gameboard.row3[0] === Gameboard.row3[2]) && Gameboard.row3[0] !== '') {
    
            if(Gameboard.row3[0] === 'X'){
                winner = 'player';
                console.log(`the winner is player`);
                
            } else {
                winner = 'computer';
                console.log('the winner is computer');
                
            }
            
            btnStyle = 3
            winnerIs(btnStyle);
            renderBoard();
            return
        }
    
        // Check columns
        if((Gameboard.row1[0] === Gameboard.row2[0] && Gameboard.row1[0] === Gameboard.row3[0]) && Gameboard.row1[0] !== '') {
    
            if(Gameboard.row1[0] === 'X'){
                winner = 'player';
                console.log(`the winner is player`);
                
            } else {
                winner = 'computer';
                console.log('the winner is computer');
                
            }
    
            btnStyle = 4;
            winnerIs(btnStyle);
            renderBoard();
            return
    
        } else if((Gameboard.row1[1] === Gameboard.row2[1] && Gameboard.row1[1] === Gameboard.row3[1]) && Gameboard.row1[1] !== '') {
            
            if(Gameboard.row1[1] === 'X'){
                winner = 'player';
                console.log(`the winner is player`);
                
            } else{
                winner = 'computer';
                console.log('the winner is computer');
                
            }
    
            btnStyle = 5;
            winnerIs(btnStyle);
            renderBoard();
            return
    
        } else if((Gameboard.row1[2] === Gameboard.row2[2] && Gameboard.row1[2] === Gameboard.row3[2]) && Gameboard.row1[2] !== '') {
            
            if(Gameboard.row1[2] === 'X'){
                winner = 'player';
                console.log(`the winner is player`);
                
            } else{
                winner = 'computer';
                console.log('the winner is computer');
                
            }
    
            btnStyle = 6;
            winnerIs(btnStyle);
            renderBoard();
            return
        }
    
        // Check diagonals
        if((Gameboard.row1[0] === Gameboard.row2[1] && Gameboard.row1[0] === Gameboard.row3[2]) && Gameboard.row1[0] !== '') {
            
            if(Gameboard.row1[0] === 'X'){
                winner = 'player';
                console.log(`the winner is player}`);
                
            } else {
                winner = 'computer';
                console.log('the winner is computer');
                
            };
        
            btnStyle = 7;
            winnerIs(btnStyle);
            renderBoard();
            return
    
        } else if((Gameboard.row1[2] === Gameboard.row2[1] && Gameboard.row1[2] === Gameboard.row3[0]) && Gameboard.row1[2] !== '') {
            
            if(Gameboard.row1[2] === 'X'){
                winner = 'player';
                console.log(`the winner is player`);
                
            } else{
                winner = 'computer';
                console.log('the winner is computer')
                
            };
            
            btnStyle = 8;
            winnerIs(btnStyle);
            renderBoard();
            return
        }
        
        return true
    };
    
    function winnerIs(btnStyle) {

        btnStyle = Number(btnStyle)
    
        console.log(`Entered winnerIs() and btnStyle is ${btnStyle}`);
        if(btnStyle === 1) {
            btn1.classList.toggle('winner');
            btn2.classList.toggle('winner');
            btn3.classList.toggle('winner');
        } else if(btnStyle === 2){
            btn4.classList.toggle('winner');
            btn5.classList.toggle('winner');
            btn6.classList.toggle('winner');
        } else if(btnStyle === 3) {
            btn7.classList.toggle('winner');
            btn8.classList.toggle('winner');
            btn9.classList.toggle('winner');
        } else if(btnStyle === 4) {
            btn1.classList.toggle('winner');
            btn4.classList.toggle('winner');
            btn7.classList.toggle('winner');
        } else if(btnStyle === 5) {
            btn2.classList.toggle('winner');
            btn5.classList.toggle('winner');
            btn8.classList.toggle('winner');
        } else if(btnStyle === 6) {
            btn3.classList.toggle('winner');
            btn6.classList.toggle('winner');
            btn9.classList.toggle('winner')
        } else if(btnStyle === 7) {
            btn1.classList.toggle('winner');
            btn5.classList.toggle('winner');
            btn9.classList.toggle('winner');
        } else if(btnStyle === 8) {
            btn3.classList.toggle('winner');
            btn5.classList.toggle('winner');
            btn7.classList.toggle('winner');
        }
        renderBoard();
        winMessage();
    };

    function tieGame() {
        winner = 'tie game';
        let results = document.getElementById('results');
        results.textContent = `Tie game`
    }

    function playerWins(){
        numPlayerWins ++;
    }

    function compWins(){
        numComputerWins ++;
    }

    function winMessage() {
        
        let results = document.getElementById('results');
        results.textContent = `${winner} wins`
        scorecard();
    }

    function scorecard() {

        console.log('Entered scorecard()');

        if(winner === 'player'){

            keepPlayerScore = document.querySelector('#player-wins');
            playerWins();
            
            console.log(`The number of rounds is ${numGames}`);

            keepPlayerScore.textContent = `Player has won ${numPlayerWins} games`
            
            if(numPlayerWins + numComputerWins >= numGames){
                console.log('Player wins match');
                let matchWinner = document.querySelector('#round-winner');
                matchWinner.textContent = 'Player wins match' 
                let results = document.getElementById('results');
                results.textContent = `Player wins the match`               
            }
        }
    
        if(winner === 'computer'){

            let keepComputerScore = document.querySelector("#computer-wins");
            compWins();

            console.log(`The number of rounds is ${numGames}`);
            
            keepComputerScore.textContent = `Computer has won ${numComputerWins} games`;

            if(numPlayerWins + numComputerWins >= numGames && numComputerWins > numPlayerWins){
                console.log('Computer wins match');
                let matchWinner = document.querySelector('#round-winner');
                matchWinner.textContent = 'Computer wins match' 
                let results = document.getElementById('results');
                results.textContent = `Computer wins the match`  
            }
        }
    }
};

function resetGame() {
    console.log('entered resetGame()');
    location.reload();
    // numGames = Number(document.querySelector('#num-rounds').value);
};


initialize = function() {

    console.log('Initializing the Gameboard variables');

    Gameboard.emptyCells = [];

    Gameboard.r0c0 = '';
    Gameboard.r0c1 = '';
    Gameboard.r0c2 = '';
    Gameboard.r1c0 = '';
    Gameboard.r1c1 = '';
    Gameboard.r1c2 = '';
    Gameboard.r2c0 = '';
    Gameboard.r2c1 = '';
    Gameboard.r2c2 = '';

    Gameboard.row1 = [Gameboard.r0c0, Gameboard.r0c1, Gameboard.r0c2];
    Gameboard.row2 = [Gameboard.r1c0, Gameboard.r1c1, Gameboard.r1c2];
    Gameboard.row3 = [Gameboard.r2c0, Gameboard.r2c1, Gameboard.r2c2];

    Gameboard.gameBoard = Array([Gameboard.row1, Gameboard.row2, Gameboard.row3]);

    Gameboard();
}();
