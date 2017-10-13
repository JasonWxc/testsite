//myHeading.innerHTML = "Hello world!";
//教程的方法，缺点是即使操作元素中还有其他元素时，innerText也只会对文本进行处理；
//myHeading.innerText = "Hello world!";

/*var myHeading = document.querySelector('h1');

if(!docCookies.hasItem("name")) {
    setUserName();
} else {
    myHeading.innerHTML = "My page is so cool " + docCookies.getItem("name");
}

var myButton = document.getElementById("myButton");
myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    var myName = prompt("Please enter your name.", "Your name");
    if(myName != null) {
        docCookies.setItem(name, myName);
        myHeading.innerHTML = "My page is so cool " + myName;
    } else {
        myHeading.innerHTML = "My page is so cool";
    }
}*/

/*if(!localStorage.getItem("name")) {
    setUserName();
} else {
    myHeading.innerHTML = "My page is so cool " + localStorage.getItem("name");
}

var myButton = document.getElementById("myButton");
myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem(name, myName);
    myHeading.innerHTML = "My page is so cool " + myName;
}*/

//在获取元素时，需要考虑用什么方法来实现；
//在对某个元素的属性进行判断以及赋值时，需要考虑用什么方法来实现；
var myPicture = document.getElementById("myPicture");
var myPictureSrc;
myPicture.onclick = function() {
    myPictureSrc = myPicture.getAttribute("src");
    if(myPictureSrc === "../images/me.jpg") {
        myPicture.setAttribute("src", "../images/back.jpg");
    } else if(myPictureSrc === "../images/back.jpg"){
        myPicture.setAttribute("src", "../images/me.jpg");
    }
}
//教程的方法，缺点是当querySelector只能取到所有符合对象的第一个值；
/*var myPicture = document.querySelector("img");
var myPictureSrc;
myPicture.onclick = function() {
    myPictureSrc = myPicture.getAttribute("src");
    if(myPictureSrc === "images/me.jpg") {
        myPicture.setAttribute("src", "images/back.jpg");
    } else if(myPictureSrc === "images/back.jpg"){
        myPicture.setAttribute("src", "images/me.jpg");
    }
}*/

var inputArea = document.getElementById("inputArea");
var inputAreaValue = inputArea.value;
var outputArea = document.querySelector("#outputArea");

function drowOutput(){
    outputArea.innerHTML = inputArea.value;
}

window.addEventListener("load", drowOutput);

inputArea.addEventListener("input", drowOutput);

var resetButton = document.getElementById("reset");
var solutionButton = document.getElementById("solution");

resetButton.addEventListener("click", function(){
    inputArea.value = inputAreaValue;
    drowOutput();
});

solutionButton.addEventListener("click", function(){
    inputArea.value = "<em>This is my text.</em>";
    drowOutput();
});