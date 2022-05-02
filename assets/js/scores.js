function addHighScores() {
    let highScoreList = JSON.parse(localStorage.getItem('highScore')) || [];
    let list = '';
    highScoreList.forEach(score => {
        list = list + '<p>' + score.initials + ' : ' + score.score + '<p>';
    });
    highScoresListEl.innerHTML = list;
};

function resetScore() {
    localStorage.clear();
    addHighScores();
}

addHighScores();