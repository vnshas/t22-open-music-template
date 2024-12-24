export const buttonTheme = document.querySelector(".button__theme");
const albumItem = document.querySelectorAll('.album-item')
const body = document.body;
const header = document.querySelector('header')
const genderLabel = document.querySelectorAll('.gender-label')




let darkMode = false;

export function themeChange(){
    const albumItem = document.querySelectorAll('.album-item')
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

export function themeAnalasys(){
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
