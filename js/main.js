/*----- constants -----*/ 
const PIECES = {
    '0': 'transparent',
    '1': 'Red',
    '-1': 'Blue'
};
/*----- app's state (variables) -----*/ 
let board, turn, reset;
/*----- cached element references -----*/ 
const msgEl = document.getElementById('msg');

/*----- event listeners -----*/ 
document.querySelector('section.board')
    .addEventListener('click', handleClick);

document.querySelector('button')
    .addEventListener('click', resetGame);

    /*----- functions -----*/
init(); 

function init() {
    board = [
         0, 0, 0,
         0, 0, 0,
         0, 0, 0,
    ];
    turn = 1;
    render();
}

function render() {

    // assign a value of [index] to tile in every unit in array
    board.forEach(function(tile, tileIdx) {
        if (tile === 1)
            document.getElementById(tileIdx).style.borderColor = 'FireBrick';
        
        if (tile === -1) 
            document.getElementById(tileIdx).style.borderColor = 'DarkTurquoise';
        
        if (tile === 0)
            document.getElementById(tileIdx).style.borderColor = 'magenta';
        
    });
        
    // render the message
    msgEl.textContent = `${PIECES[turn]}'s Turn!`;
}

function handleClick(event) {
    // get index of tile clicked
    let idx = event.target.id;
    if (board[idx] !== 0) return;
    board[idx] = turn;
    turn *= -1;
    playSound();
    render();
}

function resetGame() {
    playSound2();
    init();
}

function playSound() {
    var sound = document.getElementById("tilepress");
    sound.play();
}

function playSound2() {
    var sound2 = document.getElementById("resetbutton")
    sound2.play();
}