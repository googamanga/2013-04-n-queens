// Write code here that will find the solution count for a board of any size.
// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)

window.findNRooksSolution = function(n){
  var board = new Board({"n":n});
  var currentRow = 0;
  var returnedArray = [];
  var solver = function(currentRow){
    for (var col = 0; col < n; col++) {
      board.attributes[currentRow][col] = 1;
      if(!board.hasAnyRooksConflicts()){
        if(currentRow === n - 1){
          for(var i = 0; i < n; i++){
            returnedArray.push(board.attributes[i]);
          }
          return returnedArray;
        } else {
          solver( currentRow + 1 );
        }
      }
      board.attributes[currentRow][col] = 0;
    }
  };
  var solution = solver(currentRow);
  solution = solution || [];

  console.log('Single solution for ' + n + ' rooks:', solution);
  return solution;
};

window.countNRooksSolutions = function(n){
  if( n === 0){return 1;}
  var board = new Board({"n":n});
  var solutionCount = 0;
  var currentRow = 0;
  var solver = function(currentRow){
    for (var col = 0; col < n; col++) {
      board.attributes[currentRow][col] = 1;
      if(!board.hasAnyRooksConflicts()){
        if(currentRow === n - 1){
          solutionCount++;
        }
        else{
          solver( currentRow + 1 );
        }
      }
      board.attributes[currentRow][col] = 0;
    }
  };
  solver(currentRow);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

window.findNQueensSolution = function(n){
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', solution);
  return solution;
};

window.countNQueensSolutions = function(n){
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};


// This function uses a board visualizer lets you view an interactive version of any piece matrix.

window.displayBoard = function(matrix){
  $('body').html(
    new BoardView({
      model: new Board(matrix)
    }).render()
  );
};
