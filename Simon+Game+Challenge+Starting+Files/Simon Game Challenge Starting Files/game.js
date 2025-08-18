let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let isGameStarted = false;

// Choose a random colour and shows when its called.
function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);

    $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    level++;
    $("h1").text(`Level ${level}`);

    userClickedPattern = [];
}

// Playing the button sound
function playSound(name) {
    let sound = new Audio(`sounds/${name}.mp3`);
    sound.play();
}

// Flash Animation - Button clicked
function animatePress(currentColour) {
    $(`#${currentColour}`).addClass("pressed");
    setTimeout(() => {
        $(`#${currentColour}`).removeClass("pressed");
    }, 100);
}

// Check answer is correct or not.
const checkAnswer = () => {
    for (let i = 0; i < userClickedPattern.length; i++) {
        if (userClickedPattern[i] !== gamePattern[i]) {
            gameOver();
            game();
            return;
        }
    }
    if (userClickedPattern.length === gamePattern.length) {
        setTimeout(() => {
            nextSequence();
        }, 1000);
    }
};

// Reset Game stats
const resetGame = () => {
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    isGameStarted = false;
};


// Game over - Restart the game.
const gameOver = () => {
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    const wrongSound = new Audio("/sounds/wrong.mp3");
    wrongSound.play();
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 200);
    resetGame();
    game();
    // location.reload();   // This is how we relaod the webpage.
};


// Keyboard Click.
$(document).keydown((event) => {
    if (!isGameStarted) {
        $("h1").text(`Level ${level}`);
        nextSequence();
        isGameStarted = true;
    }
});


// On Screen click.
$(".btn").click(function () {
    if (isGameStarted) {
        let userChosenColour = $(this).attr("id");
        // "this" refers to a object that called the function.
        // Here the button clicked with a "click" eventlistner is calling the function. So the button element = "this".
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);
        checkAnswer();
    } else {
        gameOver();
    }
});