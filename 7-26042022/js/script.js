function Makeup(){
    fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
    .then((response)=>response.json())
    .then((dados)=>{
        console.log(dados);
        var saida = "<div id=makeup>";
        dados.map((item,ix)=>{
            saida+=`
                <div>
                
                <img src=${item.image_link}>`
                if (item.rating != null){
                    saida+=`<p id=voto class=voto>${item.rating}</p>`;
                }
                saida+=`
                <h2 class=name>${item.name}</h2>
                <p class=price>R$${item.price}</p>
                </div>
            `;
        });
        saida+="</div>";
        document.body.innerHTML = saida;
    })
}