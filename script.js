function greetUser() {
let name = document.getElementById("nameInput").value.trim();
if(name !== "") {
document.getElementById("greeting").innerHTML = "Hello, " + name;
}}


function changeToRed() {
    var redBox = document.getElementById("redBox");
    redBox.style.backgroundColor = "red";
}

function changeToBlue() {
    var blueBox = document.getElementById("blueBox");
    blueBox.style.backgroundColor = "blue";
}

function changeToGreen() {
    var greenBox = document.getElementById("greenBox");
    greenBox.style.backgroundColor = "green";
}

function changeToYellow() {
    var yellowBox = document.getElementById("yellowBox");
    yellowBox.style.backgroundColor = "yellow";
}
document.getElementById("redBox").onclick = changeToRed;
document.getElementById("blueBox").onclick = changeToBlue;
document.getElementById("greenBox").onclick = changeToGreen;
document.getElementById("yellowBox").onclick = changeToYellow;

