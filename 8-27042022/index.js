// Importação do módulo express 
const express = require('express')

// Realizar a aplicação da função do express em uma variável de aplciativo
const app = express();

// Permitir com que o servidor receba dados no formato de json
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Bem Vindo!");
});

// Criação de uma lista de clientes
const clientes = [
    {
        id:12,
        nome:"Helena",
        idade:13
    },
    {
        id:45,
        nome:"Rafael",
        idade:21 
    }
];

// Rota para clientes
app.get("/api/cliente/listar", (req, res) => {
    res.status(200).send({output:clientes});
});

// Cadastrar novos clientes
app.post("/api/cliente/cadastrar", (req, res) => {
    clientes.push(req.body);
    res.status(201).send({output:`Cliente cadastrado`});
});


app.listen(5000, () => console.log("http://localhost:5000"));


