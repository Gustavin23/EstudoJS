// Objetos e coleções
// Vamos criar uma colção de nomes

var nomes = ["Paula","Henrique","Vanessa"];

// usando

for (var i = 0 ; i < nomes.length ; i++){
    console.log (nomes[i]);
}

/*
outra forma de ler coleções é usando iteradores,
neste caso, você pode usar foreach ou map
*/

nomes.forEach(saida);

function saida(valor, indice){
    console.log("Do foreach -> " + valor);
}

// variação do foreach com a função dentro da estrutura

nomes.forEach(function(valor, indice){
    console.log(valor)
});

// variação do foreach com arrow function

nomes.forEach((valor,indice)=>{
    console.log("Arrow Function ->" + valor);
});

// ---------------------- MAP ----------------------

nomes.map((valor, indice)=>{
    console.log("Posição: " + indice + " Nome: " + valor)
});

// Vamos criar um objeto chamado cliente
// Para a definição dos dados do cliente é importante 
// Que estes fiquem entre chaves.
// Esta estrutura é do tipo chave - valor.

const endereco = {
    tipo:"Rua",
    logradouro:"Soldado Cleitin",
    numero:"157",
    complemento:"Complexo",
    bairro: "Jardim dos Capangas"
};

const cliente = {
    id:1,
    nome:"Paula de Oliveira",
    idade:25,
    cpf:"327.601.549.02",
    endereco:endereco
};

const prodCalca = {
    id:1,
    nome:"Calça Jeans",
    preco: "R$150.00"
}

const prodBlusa = {
    id:2,
    nome:"Jaqueta Jeans",
    preco: "R$170.00"
}

const prodTenis = {
    id:3,
    nome:"Tênis da Nike",
    preco: "R$470.00"
}

const pedido = {
    id: 69,
    data:"20/04/2022",
    hora:"16:59",
    cliente:cliente,
    produtos:[prodCalca,prodBlusa, prodTenis],
    entrega:endereco
}

console.log("Saida do objeto Pedido");
console.log(pedido);

const out = document.getElementById("output")
out.innerHTML += `Id do Pedido: ${pedido.id}`;
out.innerHTML += `<br>Nome do Cliente: ${pedido.cliente.nome}`;

pedido.produtos.map((pr,ix)=> {
    out.innerHTML += `<br>Pedido do Cliente: ${pr.nome+ " - " +pr.preco}`
})

out.innerHTML += `<br>Entregar em: ${pedido.entrega.logradouro}`


