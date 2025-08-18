// Generating random numbers as player's scores.
let playerOneScore = ((Math.floor(Math.random() * 6)) + 1);
let playerTwoScore = ((Math.floor(Math.random() * 6)) + 1);

// Add dice images to websites as per player scores.
// Method - 1
document.querySelector(".img1").src = `/images/dice${playerOneScore}.png`;
document.querySelector(".img2").src = `/images/dice${playerTwoScore}.png`;
// Method - 2
// document.querySelectorAll("img")[0].setAttribute("src", `/images/dice${playerOneScore}.png`);
// document.querySelectorAll("img")[1].setAttribute("src", `/images/dice${playerTwoScore}.png`);
// Method - 3
// document.querySelector(".img1").setAttribute("src", `/images/dice${playerOneScore}.png`);
// document.querySelector(".img2").setAttribute("src", `/images/dice${playerTwoScore}.png`);

// Winner Determination
if (playerOneScore > playerTwoScore) {
    //winner = Player-1
    document.querySelector(".container h1").innerHTML = "Player 1 Wins 🥇";
} else if (playerOneScore === playerTwoScore) {
    // Its Draw
    document.querySelector(".container h1").innerHTML = "Draw 😞";
} else {
    // Winner = Player-2
    document.querySelector(".container h1").innerHTML = "Player 2 Wins 🥇";
}