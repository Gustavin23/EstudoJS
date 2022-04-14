/* script para a solicitação de cor ao
usuário.Quando o usuário digita a cor
desejada, então iremos mudar a cor de
fundo body. Caso o usuário digite uma
cor não listada, mudaremos a cor
para uma pré estabelecida e será
exibida uma mensagem ao usuário
*/

var cor = prompt("Digite:\n\n" + 
                "1 - Preto" +
                "\n 2 - Amarelo" +
                "\n 3 - Vermelho" +
                "\n 4 - Azul" +
                "\n 5 - Laranja")

if(cor == 1){
    document.body.style.backgroundColor="black"
}

else if(cor == 2){
    document.body.style.backgroundColor="yellow"
}

else if(cor == 3){
    document.body.style.backgroundColor="red"
}

else if (cor == 4){
    document.body.style.backgroundColor="blue"
}

else if(cor == 5){
    document.body.style.backgroundColor="orange"
}

else{
    document.body.style.backgroundColor="teal"
    alert("Você digitou uma opção inexistente")
}

