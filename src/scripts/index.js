import applyInputRangeStyle from "./inputRange.js"
import albumList from "./albumDatabase.js"  

const listAlbum = document.querySelector(".albums-list")
const rangePrice = document.querySelector('.range-price')
const rangeValue = document.querySelector('.range-value')

function routine(){
    return applyInputRangeStyle()

}
//Atribuindo valor ao input



rangeValue.innerHTML = `Até R$ <span>${rangePrice.value}</span>`

rangePrice.addEventListener('input', function(){
    rangeValue.innerHTML =  `Até R$ <span>${this.value}</span>`
    const products = document.querySelectorAll('.album-price');
  
    products.forEach((product) =>
      console.log(product)
    );
})


function calcRangeValue(){
    let valuePercentage = (rangePrice.value / rangePrice.max) *100;
    rangePrice.style.background = `linear-gradient(to right, #8758ff ${valuePercentage}%, #ebe9e7 ${valuePercentage}%)`;
}


calcRangeValue()


const findPrice = (price) =>{
    
}



const renderAllAlbums = (albums) =>{
    albums.map((elem) =>{
        listAlbum.insertAdjacentHTML(
            `beforeend`,
            `
            <li class="album-item"><img src= ${elem.img} alt=${elem.title}>
            <h4>${elem.title}</h4>
            <div class="album-type">
            <p>${elem.band}</p>
            <span>${elem.genre}</span>
            </div>
            <div price-product="${elem.price}" class="album-price">
            <p>R$ ${elem.price}</p>
            <button class="album__button">Comprar</button>
            </div>
            </li>
            `
        )
    })
}
renderAllAlbums(albumList)













routine()

