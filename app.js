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

      // Check for a draw
      let isDraw = true;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === undefined) {
          isDraw = false;
          break;
        }
      }

      if (isDraw) {
        return 'Draw';
      }
    
      return 'No Winner';
    }

    function reset(){
      const boxes = document.querySelectorAll('.content')
      boxes.forEach(box =>{
        box.innerHTML = "&nbsp;"
      })

      for(let i = 0; i < board.length; i++){
        board[i] = undefined
      }
    }
  
    return {
      board,
      setContent,
      checkForWinner,
      reset,
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

  endScreen.addEventListener('click', function(){
    board.reset()
    endScreen.classList.remove('end')
  })
  
  let checkPlayer = true  // True = Player 1  False = PLayer 2
  
  boxes.forEach(box =>{
    
    box.addEventListener('click', function(){
      
      if(box.innerHTML === '&nbsp;'){
        if(checkPlayer){
          box.textContent = player1.getSign();
          board.setContent(player1.getSign(), box.id)
          turnIndicator.textContent = 'Player 2'
          checkPlayer = false;
          box.parentElement.classList.add('cells-pointer')
          console.log(board.checkForWinner())
          
        }else{
          box.textContent = player2.getSign();
          board.setContent(player2.getSign(), box.id)
          turnIndicator.textContent = 'Player 1'
          box.parentElement.classList.add('cells-pointer')
          checkPlayer = true;
          
        }if(board.checkForWinner() === 'X'){
            endScreen.textContent = 'Player 1(X) Wins'
            endScreen.classList.add('end')
          }
          if(board.checkForWinner() === 'O'){
            endScreen.textContent = 'Player 2(O) Wins'
            endScreen.classList.add('end')
          }
          if(board.checkForWinner() === 'Draw'){
            endScreen.textContent = 'Draw'
            endScreen.classList.add('end')
          }       
      }

    })
  })
  

  