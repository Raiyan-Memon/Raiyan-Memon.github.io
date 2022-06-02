function refresh() {
    window.location.reload();
}

var play1 = Math.random();
play1 = play1 * 6;
play1 = Math.round(play1);
console.log(play1);

var play2 = Math.random();
play2 = play2 * 6;
play2 = Math.round(play2);
console.log(play2);

if (play1 == 0) {
    play1 = 1;
}
if (play2 == 0) {
    play2 = 1;
}

var img1 = "images/dice" + play1 + ".png";
var img2 = "images/dice" + play2 + ".png";

console.log(img1);

document.getElementById('dice1').setAttribute("src", img1);
document.getElementById('dice2').setAttribute("src", img2);

if (play1 == play2) {
    document.getElementById('winningplayer').innerHTML = "&#x1F605; Draw &#x1F605;";
} else {
    if (play1 > play2) {
        document.getElementById('winningplayer').innerHTML = "	&#x1F618; Player 1 Wins";
    } else {
        document.getElementById('winningplayer').innerHTML = "Player 2 Wins 	&#x1F618;";

    }
}