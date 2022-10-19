let winnerButton = Math.floor(Math.random() * 3) + 1;

function checkWinner(clicked_id) {
    if (clicked_id == winnerButton) {
        alert('You won!')
    } else {
        alert('You lost! Keep trying!')
    }
}

function restart() {
    location.reload()
}