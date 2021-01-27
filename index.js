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