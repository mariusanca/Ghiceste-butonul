function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

let winnerButton = generateRandomInteger(3);

function checkWinner(clicked_id) {
    if (clicked_id == winnerButton) {
        alert('You won!')
    } else {
        alert('You lost! Keep trying!')
    }
}