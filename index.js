// uncomment to test file connected to html
//alert("Working!")

// random number gen from 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImg1 = "images/dice" + randomNumber1 + ".png"

document.querySelector(".img1").setAttribute("src", randomImg1);