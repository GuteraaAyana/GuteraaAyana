console.log("Hello world!");

let time = new Date().getHours();
let message = "";
if(time > 0 && time <= 12){
    message = "Hello and welcome to my website! Good Morning!";
}
else if (time > 12 && time <= 15){
    message = "Hello and welcome to my website! Good Afternoon!";
}
else if (time > 15 && time <= 18){
    message = "Hello and welcome to my website! Good Evening!";
}
else{
    message = "Hello and welcome to my website! Night Owl!";
}

const greeting = document.getElementById("greeting");
greeting.textContent = message;


const themeButton = document.getElementById("changeTheme");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light");
});