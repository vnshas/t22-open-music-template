import applyInputRangeStyle from "./inputRange.js"
//import albumList from "./albumDatabase.js"  
import { themeAnalasys,buttonTheme,themeChange } from "../scripts/theme.js"
import { pegaDados } from "../scripts/api.js"


const rangePrice = document.querySelector('.range-price')
const rangeValue = document.querySelector('.range-value')

function routine(){
    return applyInputRangeStyle()

}

//Atribuindo valor ao input
rangeValue.innerHTML = `Até R$ <span class='span-price'>${rangePrice.value}</span>`


function calcRangeValue(){
    let valuePercentage = (rangePrice.value / rangePrice.max) *100;
    rangePrice.style.background = `linear-gradient(to right, #8758ff ${valuePercentage}%, #ebe9e7 ${valuePercentage}%)`;
}

calcRangeValue()
themeAnalasys()
buttonTheme.addEventListener("click", themeChange)
pegaDados()
routine()