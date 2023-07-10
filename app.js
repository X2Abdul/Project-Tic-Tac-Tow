const gameBoard = (() => {
    let board = new Array(9).fill(undefined);
    
    function setContent(sign, index){
        if(sign === 'X'){
            board[index] = sign;
        }
        if(sign === 'O'){
            board[index] = sign;
        }
    }

    function checkForWinner(playerName){
        let winnersSign = undefined;

        return winnersSign;
    }
    return{
        board,
        setContent
    }
})();

const player = function(name, sign){
    name,
    sign
    const getName = () => console.log(name);
    const getSign = () => console.log(sign);
    return{
        getName,
        getSign
    }
}

const abdul = new player('Abdul', 'X');
abdul.getName();
abdul.getSign();
console.log(gameBoard.board);