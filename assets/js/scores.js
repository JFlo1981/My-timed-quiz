// const highScoresListEl = document.getElementById('highscores-list');

function addHighScores() {
    let highScoreList = JSON.parse(localStorage.getItem('highScores')) || [];
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