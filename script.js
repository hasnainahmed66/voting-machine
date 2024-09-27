let votes = {
    Naran: 0,
    Kaghan: 0,
    Skardu: 0,
    Kashmir: 0
};

function vote(destination) {
    votes[destination]++;
    document.getElementById(destination.toLowerCase() + '-votes').textContent = votes[destination];
}

function showResult() {
    let maxVotes = 0;
    let winner = '';
    for (let destination in votes) {
        if (votes[destination] > maxVotes) {
            maxVotes = votes[destination];
            winner = destination;
        }
    }
    document.getElementById('result').textContent = `The picnic plan is finalized for: ${winner}`;
}
