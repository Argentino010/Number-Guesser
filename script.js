function generateTarget() {
    return Math.floor(Math.random() * 10)
}

function compareGuesses(humanGuess, computerGuess, target) {
    const humanDifference = Math.abs(humanGuess - target);
    const computerDifference = Math.abs(computerGuess - target);
    return humanDifference <= computerDifference;
}

let humanScore = 0
let computerScore = 0

function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
}

let currentRoundNumber = 1

function advanceRound() {
    currentRoundNumber += 1
}
