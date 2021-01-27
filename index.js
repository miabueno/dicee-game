// uncomment to test file connected to html
//alert("Working!")

// random number gen from 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// concat random num into corresponding file name
var randomImg1 = "images/dice" + randomNumber1 + ".png"
var randomImg2 = "images/dice" + randomNumber2 + ".png"

// change to random images
document.querySelector(".img1").setAttribute("src", randomImg1);
document.querySelector(".img2").setAttribute("src", randomImg2);

// determine winner
if (randomNumber1 > randomNumber2) {
	document.querySelector("h1").textContent = "🚩Player 1 Wins!"
}
else if (randomNumber2 > randomNumber1) {
	document.querySelector("h1").textContent = "Player 2 Wins!🚩"
}
else {
	document.querySelector("h1").textContent = "Draw!"
}
