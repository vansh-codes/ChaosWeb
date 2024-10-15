const buttonColors = ["green", "red", "yellow", "blue"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

const scoreDisplay = document.getElementById("score");
const startButton = document.getElementById("start");

startButton.addEventListener("click", startGame);

function startGame() {
    level = 0;
    gamePattern = [];
    nextSequence();
}

function nextSequence() {
    userClickedPattern = [];
    level++;
    scoreDisplay.textContent = "Score: " + level;
    
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    
    animatePress(randomChosenColor);
}

buttonColors.forEach(color => {
    document.getElementById(color).addEventListener("click", function() {
        userClickedPattern.push(color);
        animatePress(color);
        checkAnswer(userClickedPattern.length - 1);
    });
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(nextSequence, 1000);
        }
    } else {
        scoreDisplay.textContent = "Game Over, Score: " + (level - 1);
        resetGame();
    }
}

function animatePress(color) {
    const activeButton = document.getElementById(color);
    activeButton.classList.add("active");
    setTimeout(() => {
        activeButton.classList.remove("active");
    }, 300);
}

function resetGame() {
    level = 0;
    gamePattern = [];
}
