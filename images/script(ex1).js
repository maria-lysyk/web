//Variant 1
for (let i = 0; i < 8; i++) {
      let space = ''

      for (let k = 0; k < 8; k++) {
        space += (i + k) % 2 === 0 ? '  ' : '#'
      }

      console.log(space)
      space = ''
    }

//Variant 2
function ChessBoard(num) {
    var board = "";
    for (var i = 1; i < num*num; i += 1) {
      if ((i % (num + 1)) == 0) {
        board += "\n";
      } 
      else if (i % 2 != 0) {
        board += "#";
      } 
      else {
        board += " ";
      }
    }
    return board;
  }
  console.log(ChessBoard(8));

//Variant 3
function Board(a, b) {
    var val1 = "# ";
    var val2 = " #";
    var space1 = "";
    var space2 = "";
    for (var i = 0; i < a / 1; i += 1) {
      space1 += val1;
      space2 += val2;
    }
  
    for (var t = 0; t < b; t += 1) {
      if (t % 2 != 0) {
        console.log(space1);
      } else {
        console.log(space2);
      }
    }
  }
  Board(8, 8);
