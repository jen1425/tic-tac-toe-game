var readlineSync = require('readline-sync');

// Vars
var player = 'x';
var moves = 0;
var board = [[' ',' ',' '], [' ', ' ', ' '], [' ',' ',' ']];
var move = []; // player's move

// getMove: gets the players move from terminal
var getMove = function() {
  // get inputed value in form row, column
  let userMove = readlineSync.question('Your move (r,c)? ');
  let row = userMove[0]; 
  let col = userMove[2];
  return [row, col];
};

// Outer while loop that alternates between x and o move
while (moves < 8) {
// Read player 1 move (x)
move = getMove();
// Update Board 
// Display Board
// Check if winner
// Toggles player turn x or o

}


// Repeat until Win or Tie