const listAlbum = document.querySelector(".albums-list")
const rangePrice = document.querySelector('.range-price')
const rangeValue = document.querySelector('.range-value')



export async function pegaDados(){
    const newAlbums = await fetch('https://openmusic-fake-api.onrender.com/api/musics')
    .then(response => response.json())
    renderAllAlbums(newAlbums)
    rangePrice.addEventListener('input', function(){
        rangeValue.innerHTML =  `Até R$ <span class='span-price'>${this.value}</span>`
        
        
        
        let newArray = newAlbums.filter((price) => parseInt(price.price) < parseInt(rangePrice.value))
        
        
        if(newArray.length > 0){
            
            renderAlbum(newArray)
        }
        else{
             listAlbum.innerHTML = ''
        }
    })
}
const renderAllAlbums = (albums) =>{
    let darkMode = JSON.parse(localStorage.getItem("@openMusic:theme"));
    if(darkMode){
        albums.map((elem) =>{
            listAlbum.insertAdjacentHTML(
                `beforeend`,
                `
                <li price-product="${elem.price}" class="album-item dark-mode"><img src= ${elem.img} alt=${elem.title}>
                <h4>${elem.title}</h4>
                <div class="album-type">
                <p>${elem.band}</p>
                <span>${elem.genre}</span>
                </div>
                <div  class="album-price">
                <p>R$ ${elem.price}</p>
                <button class="album__button">Comprar</button>
                </div>
                </li>
                `
            )
        })
    }
    else{
        albums.map((elem) =>{
            listAlbum.insertAdjacentHTML(
                `beforeend`,
                `
                <li price-product="${elem.price}" class="album-item"><img src= ${elem.img} alt=${elem.title}>
                <h4>${elem.title}</h4>
                <div class="album-type">
                <p>${elem.band}</p>
                <span>${elem.genre}</span>
                </div>
                <div  class="album-price">
                <p>R$ ${elem.price}</p>
                <button class="album__button">Comprar</button>
                </div>
                </li>
                `
            )
        })
    }

}

const renderAlbum = (albums) =>{
    let darkMode = JSON.parse(localStorage.getItem("@openMusic:theme"));
    listAlbum.innerHTML = ''
    if(darkMode){
        albums.map((elem) =>{
            listAlbum.insertAdjacentHTML(
                `beforeend`,
                `
                <li price-product="${elem.price}" class="dark-mode album-item"><img src= ${elem.img} alt=${elem.title}>
                <h4>${elem.title}</h4>
                <div class="album-type">
                <p>${elem.band}</p>
                <span>${elem.genre}</span>
                </div>
                <div  class="album-price">
                <p>R$ ${elem.price}</p>
                <button class="album__button">Comprar</button>
                </div>
                </li>
                `
            )
        })
    }
    else{
        albums.map((elem) =>{
            listAlbum.insertAdjacentHTML(
                `beforeend`,
                `
                <li price-product="${elem.price}" class="album-item"><img src= ${elem.img} alt=${elem.title}>
                <h4>${elem.title}</h4>
                <div class="album-type">
                <p>${elem.band}</p>
                <span>${elem.genre}</span>
                </div>
                <div  class="album-price">
                <p>R$ ${elem.price}</p>
                <button class="album__button">Comprar</button>
                </div>
                </li>
                `
            )
        })
    }
    
}
