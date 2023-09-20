const gameBoard = (() => {
    let board = new Array(9).fill(undefined);
  
    function setContent(sign, index) {
      if (sign === 'X' || sign === 'O') {
        board[index] = sign;
      }
    }
  
    function checkForWinner() {
      
      if (
        (board[0] === 'X' && board[1] === 'X' && board[2] === 'X') ||
        (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') ||
        (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') ||
        (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') ||
        (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') ||
        (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') ||
        (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') ||
        (board[2] === 'X' && board[4] === 'X' && board[6] === 'X')
      ) {
        return 'X';
      }
      
      // Check for 'O' wins
      if (
        (board[0] === 'O' && board[1] === 'O' && board[2] === 'O') ||
        (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') ||
        (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') ||
        (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') ||
        (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') ||
        (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') ||
        (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') ||
        (board[2] === 'O' && board[4] === 'O' && board[6] === 'O')
      ) {
        return 'O';
      }
    
      return 'No Winner';
    }
  
    return {
      board,
      setContent,
      checkForWinner,
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

  const board = gameBoard;
  const player1 = new player('Abdul', 'X');
  const player2 = new player('Dav', 'O');
  const boxes = document.querySelectorAll('.content')
  const endScreen = document.querySelector('.endScreen')
  const turnIndicator = document.querySelector('.player')
  
  let checkPlayer = true  // True = Player 1  False = PLayer 2
  
  boxes.forEach(box =>{
    let clicked = false
    box.addEventListener('click', function(){
      
      if(!clicked){
        if(checkPlayer){
          box.textContent = player1.getSign();
          board.setContent(player1.getSign(), box.id)
          turnIndicator.textContent = 'Player 2'
          checkPlayer = false;
          box.parentElement.classList.add('cells-pointer')
          console.log(board.checkForWinner())
          if(board.checkForWinner() === 'X'){
            endScreen.textContent = 'Player 1(X) Wins'
            endScreen.classList.add('end')
          } 
        }else{
          box.textContent = player2.getSign();
          board.setContent(player2.getSign(), box.id)
          turnIndicator.textContent = 'Player 1'
          box.parentElement.classList.add('cells-pointer')
          checkPlayer = true;
          if(board.checkForWinner() === 'O'){
            endScreen.textContent = 'Player 2(O) Wins'
            endScreen.classList.add('end')
          }
        }
        clicked = true
      }

    })
  })
  

  