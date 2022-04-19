// Verificar qual a página que irá abrir este arquivo
// JavaScript
// Pega a url completa do navegador
var pagina = window.location;
console.log(pagina);
// Vamos quebrar a url onde houver barra
pagina = pagina.href.split("/");
console.log(pagina);
// Pegar o último elemento do array página criado acima
pagina = pagina[pagina.length-1];
console.log(pagina);

if(pagina == "home.html"){

    document.body.style.backgroundColor="rgb(150,150,150)";
    /*
    Acessar a caixa(input) chamada números, capturar 
    esses números e utilizar a função maior para 
    encontrar o maior valor entre eles.
    */

    // Referenciar um elemento de input da tela home
    const txtN = document.getElementById("txtN");
    // Aplicar um evento chamado onblur, ou seja,
    // quando a caixa perder o foco
    txtN.onblur = function(){
        // Vamos capturar o valr contido em txtN, ou seja,
        // os números dentro desta caixa e alocar em um array
        var valores = txtN.value.split(",");
        alert(maior(valores));
    };
}
if(pagina=="formulario.html"){
    document.body.style.backgroundColor="black";
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");

    nome.onblur = ()=>{
        verificarVazio(nome);
    }
    email.onblur = ()=>{
        verificarVazio(email);
    }
    cpf.onblur = ()=>{
        verificarVazio(cpf);
    }
    telefone.onblur = ()=>{
        verificarVazio(telefone);
    }
}