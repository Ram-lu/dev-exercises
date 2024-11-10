// DICCIONARIOS ----------------------------------
const BOARD = Array(9).fill(null)
const WINNER_COMBOS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

// FLUJOS ----------------------------------------
const newBoard = [...BOARD]


newBoard[0] = "X"
newBoard[1] = "O"
newBoard[2] = "O"
newBoard[3] = "O"
newBoard[4] = "X"
newBoard[5] = "X"
newBoard[6] = "X"
newBoard[7] = "O"
newBoard[8] = "X"

const getWinner = (boardToCheck) => {

    for (const combo of WINNER_COMBOS) {
        const [a,b,c] = combo

        if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]){
            return boardToCheck[a]
        }
    } return null
}

const MAZO = {
    diamantes: ["A",2,3,4,5,6,7,8,9,10,"j","Q","K"],
    Picas: ["A",2,3,4,5,6,7,8,9,10,"j","Q","K"],
    corazones: ["A",2,3,4,5,6,7,8,9,10,"j","Q","K"],
    treboles:["A",2,3,4,5,6,7,8,9,10,"j","Q","K"]
}


console.log(MAZO.diamantes[0])
