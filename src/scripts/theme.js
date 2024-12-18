const buttonTheme = document.querySelector(".button__theme");

const body = document.body;
const header = document.querySelector('header')
const albumItem = document.querySelectorAll('.album-item')
const genderLabel = document.querySelectorAll('.gender-label')
const listaGeneros = document.querySelector('.gender-list');


let darkMode = false;

function themeChange(){

    darkMode = !darkMode

    body.classList.toggle("dark-mode")
    header.classList.toggle('dark-mode')
    for (let album of albumItem){
        album.classList.toggle('dark-mode')
    }
    for (let label of genderLabel){
        label.classList.toggle('dark-mode')
    }
    buttonTheme.classList.toggle('dark-mode')
    

   localStorage.setItem("@openMusic:theme", JSON.stringify(darkMode));
}

function themeAnalasys(){
    darkMode = JSON.parse(localStorage.getItem("@openMusic:theme"));

    if (darkMode){
        body.classList.toggle("dark-mode")
        header.classList.toggle('dark-mode')
        for (let album of albumItem){
            album.classList.toggle('dark-mode')
        }
        for (let label of genderLabel){
            label.classList.toggle('dark-mode')
        }
        buttonTheme.classList.toggle('dark-mode')
    }
}

themeAnalasys()

buttonTheme.addEventListener("click", themeChange)