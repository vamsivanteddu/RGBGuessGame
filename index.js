var colorOnTheTitle = document.querySelector("#colorOnTheTitle");
var navbar = document.querySelector("#navbar");
var resultOnNavbar = document.querySelector("#resultOnNavbar");
var mainContainer = document.querySelector("#mainContainer");
var colorBoxes = document.querySelectorAll(".colorBoxes");
var head = document.querySelector("#head");
var resetButton = document.querySelector("#resetButton");
var easyButton = document.querySelector("#easyButton");
var mediumButton = document.querySelector("#mediumButton");
var hardButton = document.querySelector("#hardButton");
var colorArray,systemSelectedColor;

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#mediumButton").click();
});

for(var i=0;i<colorBoxes.length;i++){
    colorBoxes[i].addEventListener("click",function(){
        var userSelectedColor = this.style.backgroundColor;
        winCheck(this,userSelectedColor);
    });
}

resetButton.addEventListener("click",function(){
    layGameBoard()
});

easyButton.addEventListener("click",function(){
    easyButton.classList.add("selectedDifficulty");
    mediumButton.classList.remove("selectedDifficulty");
    hardButton.classList.remove("selectedDifficulty");
    for (var i = 3; i < 9; i++) {
        colorBoxes[i].style.display = "None";
    }
    layGameBoard();
});

mediumButton.addEventListener("click", function () {
    mediumButton.classList.add("selectedDifficulty");
    easyButton.classList.remove("selectedDifficulty");
    hardButton.classList.remove("selectedDifficulty");
    for (var i = 3; i < 6; i++) {
        colorBoxes[i].style.display = "block";
    }
    for(var i=6; i<9;i++){
        colorBoxes[i].style.display = "None";
    }
    layGameBoard();
});

hardButton.addEventListener("click", function () {
    hardButton.classList.add("selectedDifficulty");
    easyButton.classList.remove("selectedDifficulty");
    mediumButton.classList.remove("selectedDifficulty");
    for (var i = 3; i < 9; i++) {
        colorBoxes[i].style.display = "block";
    }
    layGameBoard();
});

function layGameBoard(){
    if (easyButton.classList.contains("selectedDifficulty")) {
        produceGameBoard(3);
    }
    else if (mediumButton.classList.contains("selectedDifficulty")) {
        produceGameBoard(6);
    }
    else{
        produceGameBoard(9);
    }
}
function produceGameBoard(size){
    colorArray = generateColorArray(size);
    systemSelectedColor = systemSelectColor(colorArray);
    head.style.backgroundColor = "black";
    resetButton.textContent = "NEW COLORS";
    resultOnNavbar.textContent = "";
    applyColorsToColorBoxes();
}

function generateColorArray(colorCount) {
    var colorArray = [];
    for (var i = 0; i < colorCount; i++) {
        colorArray.push(generateColor());
    }
    return colorArray;
}

function generateColor() {
    var red, green, blue;
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}



function systemSelectColor(){
    var randomNumber = Math.floor(Math.random()*(colorArray.length));
    colorOnTheTitle.textContent = colorArray[randomNumber];
    return colorArray[randomNumber];
}

function applyColorsToColorBoxes(){
    for (var i = 0; i < colorBoxes.length; i++) {
        colorBoxes[i].style.backgroundColor = colorArray[i];
    }
}

function winCheck(colorBox,userSelectedColor){
    if(userSelectedColor===systemSelectedColor){
        applyColorToAllBoxes(systemSelectedColor);
        head.style.backgroundColor = systemSelectedColor;
        resultOnNavbar.textContent = "Correct!";
        resetButton.textContent="PLAY AGAIN?";
    }
    else{
        colorBox.style.backgroundColor="black";
        resultOnNavbar.textContent = "Try Again";
    }
}

function applyColorToAllBoxes() {
    for (var i = 0; i < colorBoxes.length; i++) {
        colorBoxes[i].style.backgroundColor = systemSelectedColor;
    }
}