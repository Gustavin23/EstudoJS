// Encontra o maior valor em um array
// array : coleção de valores

function maior(numeros){

    // Vamos transformar os números em números.
    // Realizando um parse para inteiros
    for(var c = 0 ; c < numeros.length ; c++){
        numeros[c] = parseInt(numeros[c]);
    }
    
    var m = numeros [0];
    for(var i = 1 ; i < numeros.length ; i++){
        if(numeros[i] > m){
            m = numeros[i]
        }
    }
    return m;
}
// Encontra o menor valor em um array
function menor(numeros){
    var m = numeros[0];
    for(var i = 1 ; numeros.length ; i++){
        if(numeros[i] < m){
            m = numeros [i]
        }    
    }
    return m;
}

// verificar se um campo está vazio e alertar o usuário
function verificarVazio(controle){
    if(controle.value == "" || controle.value == null){
        alert("O campo "+controle.id+" não pode ser vazio");
        controle.setfocus();
    }
}
function dataHora(){
    return( new Date().toLocaleDateString()+
    " - "+ new Date().toLocaleTimeString()
    );
}