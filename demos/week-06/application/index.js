const cells = document.querySelectorAll( '.grid div' );
const message = document.querySelector( '.message' );
const startButton = document.querySelector( '.btn-start' );

let started = false;
let nextPlayer;
let state;

const winningStates = [
    [ 0, 1, 2 ],
    [ 3, 4, 5 ],
    [ 6, 7, 8 ],
    [ 0, 3, 6 ],
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],
    [ 0, 4, 8 ],
    [ 2, 4, 6 ]
];

function isGameOver() {
    // check if player has won
    for( let i = 0; i < winningStates.length; i++ ) {
        const x = winningStates[i][0];
        const y = winningStates[i][1];
        const z = winningStates[i][2];

        if( state[x] !== '' && state[x] === state[y] && state[y] === state[z] ) {
            message.textContent = nextPlayer + ' has won';
            return true;
        }
    }

    // check is game is not drawn
    for( let i = 0; i < state.length; i++ ) {
        if( state[i] === '' ) {
            return false;
        }
    }

    // else it is drawn
    message.textContent = 'game drawn';
    return true;
}

function onCellClick( index ) {
    // alert( 'cell ' + index + ' was clicked' );
    if( started === false ) {
        alert( 'Sorry, the game is not in progress. Click the start button to start the game.' );
        return;
    }

    // game is on...
    if(state[index] !== '') {
        alert( 'cell already taken' );
        return;
    }

    state[index] = nextPlayer;
    cells[index].textContent = nextPlayer;

    if( isGameOver() ) {
        started = false;
        return;
    }

    changePlayer();
    displayNextPlayer();
}

function displayNextPlayer() {
    message.textContent = 'Next turn: Player ' + nextPlayer;
}

function changePlayer() {
    if(nextPlayer === 'X') {
        nextPlayer = '0';
    } else {
        nextPlayer = 'X';
    }
}

function clearBoard() {
    for( let i = 0; i < cells.length; i++ ) {
        cells[i].textContent = '';
    }
}

function startGame() {
    started = true;
    nextPlayer = 'X';
    state = [
        '', '', '',
        '', '', '',
        '', '', '',
    ];

    clearBoard();
    displayNextPlayer();
};

startButton.addEventListener( 'click', startGame );

console.log(cells);

cells.forEach(
    function( cell, index ) {
        cell.addEventListener( 'click', function() {
           onCellClick( index ); 
        } )
    }
)