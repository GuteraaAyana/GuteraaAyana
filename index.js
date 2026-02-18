console.log("Hello world!");

let time = new Date().getHours();
let message = "";
if(time > 0 && time <= 12){
    message = "Good morning and welcome to my website!";
}
else if (time > 12 && time <= 15){
    message = "Good afternoon and welcome to my website!";
}
else if (time > 15 && time <= 18){
    message = "Good evening and welcome to my website!";
}
else{
    message = "Hello night owl and welcome to my website!";
}

const greeting = document.getElementById("greeting");
greeting.textContent = message;


const themeButton = document.getElementById("changeTheme");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light");
});