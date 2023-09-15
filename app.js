const gameBoard = (() => {
    let board = new Array(9).fill(undefined);
  
    function setContent(sign, index) {
      if (sign === 'X' || sign === 'O') {
        board[index] = sign;
      }
    }
  
    function checkForWinner(playerName) {
      let winnersSign = undefined;
  
      return winnersSign;
    }
  
    return {
      board,
      setContent,
    };
  })();
  
  const player = function (name, sign) {
    const getName = function () {
      return name;
    };
    const getSign = function () {
      return sign;
    };
  
    return {
      getName,
      getSign,
    };
  };
  
  const abdul = new player('Abdul', 'X');
  console.log(abdul.getName());
  console.log(abdul.getSign()); 
  
  const board = gameBoard;
  board.setContent(abdul.getSign(), 2); 
  console.log(board.board); 
  