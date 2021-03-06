

process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');

console.log("let's play tic tac toe! \nenter quit or q to end game");


process.stdin.on('data', function (text) {
  console.log('received data:', util.inspect(text));
  if (text === 'quit\n' || text === 'q\n') {
    done();
    }
});


function done() {
  process.exit();
}

function initGame() {
  let arr = [];

  for(let i = 0; i < 9; i++) {
    arr[i] = '';
  }

  return arr;
}

function drawBoard(arr) {
  let count = 0, row = '';
  arr.forEach(item => {
    row += item + '| ';
    count++;

    if(count === 3) {
      console.log(row + '\n');
      count = 0;
      row = '';
    }
  });
}

(function() {
    console.log('this point is reached ');
    drawBoard(initGame());

})();
