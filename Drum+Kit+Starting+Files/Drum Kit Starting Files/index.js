let allDrumsLenght = document.querySelectorAll(".drum").length;


// for (let i = 0; i < allDrumsLenght; i++) {
//     // Adding Event Listners.
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         // Playing Drum sounds.
//         let drumSound = new Audio("sounds/tom-1.mp3");
//         drumSound.play();
//     });
// }
// Detecting on screen events.
for (let i = 0; i < allDrumsLenght; i++) {
    // Adding Event Listners.
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // Playing Drum sounds.
        let drumKey = this.innerHTML;
        playSound(drumKey);
    });
}

// Detecting keyboard events.
document.addEventListener("keydown", function (event) {
    playSound(event.key)
})

function playSound(Key) {
    switch (Key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        default:
            console.log(drumKey);
            break;
    }
}

