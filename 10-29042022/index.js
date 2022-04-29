const express = require('express'); 

const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const urldb = "mongodb+srv://gustavord:Vilhena123@cluster0.tkv9u.mongodb.net/bancodedados?retryWrites=true&w=majority";
mongoose.connect(urldb, {useNewUrlParser: true,useUnifiedTopology: true});

const tabela = mongoose.Schema({
    NomedoProduto:{type:String,require},
    Descricao:{type:String,require},
    Categoria:{type:String},
    Quantidade:{type:Number},
    Preco:{type:String}
});
const Produto = mongoose.model("tbprodutos",tabela);

const default_route = "/api/produto";

app.get(`${default_route}/listar`,(req,res)=>{  
    Produto.find().then((dados)=>{      
        res.status(200).send({output:dados});
    })
    .catch((erro)=>res.status(500).send({output:`Erro interno ao processar a consulta -> ${erro}`}));

});

app.post(`${default_route}/cadastrar`,(req, res)=>{
    const cli = new Produto(req.body);
    cli.save().then((dados)=>{
        res.status(201).send({output:`Produtos Cadastrados`, payload:dados})
    }).catch((erro) => console.error(`Erro ao tentar cadastrar: ${erro}`));

});

app.put(`${default_route}/atualizar/:id`,(req, res)=>{
    Produto.findByIdAndUpdate(req.params.id,req.body,{new:true},(erro,dados)=>{
        if(erro){
            return res.status(500).send({output:`Não atualizou -> ${erro}`});
        }
        res.status(200).send({output:"Produtos atualizados"})
    })
});

app.delete(`${default_route}/apagar/:id`,(req, res)=>{
    Produto.findByIdAndDelete(req.params.id,(erro,dados)=>{
        if(erro){return res.status(500).send({output:`Erro ao tentar apagar -> ${erro}`});
    }
    res.status(204).send({output:`Produtos Apagados`});
    });
});

app.listen(4000,
    ()=>console.log("Servidor on-line em http://localhost:4000"));
